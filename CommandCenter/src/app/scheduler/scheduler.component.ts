import { Component, OnInit, signal, ChangeDetectorRef } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
  DayCellContentArg,
} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import {createEventId } from './event-utils';
import { MatDialog } from '@angular/material/dialog';
import { ScheduledataconfirmboxComponent } from '../daillogboxes/scheduledataconfirmbox/scheduledataconfirmbox.component';
import { ToastrService } from 'ngx-toastr';
import { distinctUntilChanged } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface scheduleModel {
  reoccuranceDays: never[];
  name: string;
  botname: string;
  starDate: string;
  starTime: string;
  reoccurance: string;
  endDate: string;
  noEndDate: string;
}

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
})
export class SchedulerComponent implements OnInit {
  myControl1 = new FormControl<any>('');
  filteredOptions1!: any;
  myControl2 = new FormControl<any>('');
  filteredOptions2!: any;
  workFlowName: any=[];
  botName: any=[];
  options: scheduleModel[] = [];
  scheduleForm!: FormGroup;
  object: any;
  maxDate1: any;
  appLoader:boolean=false;
  public date1: any = new Date();
  public minDate = new Date(
    this.date1.getFullYear(),
    this.date1.getMonth(),
    this.date1.getDate()
  );
  // public maxDate = new Date(this.date1.getFullYear(), this.date1.getMonth(), this.date1.getDate() + 15);
  public minDate1 = new Date(
    this.date1.getFullYear(),
    this.date1.getMonth(),
    this.date1.getDate()
  );


 


  constructor(
    private changeDetector: ChangeDetectorRef,
    private apiservice: ApiServiceService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.scheduleForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      botname: this.fb.control('', [Validators.required]),
      starDate: this.fb.control('', [Validators.required]),
      starTime: this.fb.control('', [Validators.required]),
      reoccurance: this.fb.control('', [Validators.required]),
      endDate: this.fb.control('', []),
      noEndDate: this.fb.control('', []),
    });
    this.scheduleForm
    .get('noEndDate')
    ?.valueChanges.subscribe((fromValue: any) => {
      const currentDate = new Date();
      const year=currentDate.getFullYear()+1;
      const month=currentDate.getMonth()+1;
      const day=currentDate.getDate();
      return `${year}-${month}-${day}`;
    });
    const currentDate = new Date();
    const year=currentDate.getFullYear()+1;
    const month=currentDate.getMonth()+1;
    const day=currentDate.getDate();
    if(this.scheduleForm
      .get('noEndDate')
      ?.value){
       `${year}-${month}-${day}`
      } ;
}
  

  formReset() {
    const dialogRef = this.dialog.open(ScheduledataconfirmboxComponent, {
      width: 'auto',
      disableClose: true,
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== 'nodata') {
        this.scheduleForm.reset();
      }
    });}
    private _filter1(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.workFlowName.filter((option:any) => option.workflowName.toLowerCase().includes(filterValue));
    }
  
    private _filter2(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.botName.filter((option:any) => option.name.toLowerCase().includes(filterValue));
    }
  ngOnInit(): void {
    this.filteredOptions1 = this.scheduleForm.get('name')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter1(value))
    );

    this.filteredOptions2 = this.scheduleForm.get('botname')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value))
    );
    localStorage.setItem('sidenav', 'true');
    this.getScheduleData();
    this.getBotName();
    this.getWorkflowName();

 
    this.filteredOptions1 = this.myControl1.valueChanges.pipe(
      startWith(''),
      map(value => this._filter1(value))
    );
    this.scheduleForm
      .get('endDate')
      ?.valueChanges.subscribe((fromValue: any) => {
        if (fromValue == '') {
          const selectedOptionControl = this.scheduleForm.get(
            'noEndDate'
          ) as FormControl;
          if (this.scheduleForm.get('endDate')?.value === '') {
            selectedOptionControl.enable();
          }
        } else {
          const selectedOptionControl = this.scheduleForm.get(
            'noEndDate'
          ) as FormControl;
          selectedOptionControl.reset();
          selectedOptionControl.disable();
        }
      });
  }



  // ---------------------------BOT NAME-------------------------------------------------

  getScheduleData() {
    this.apiservice.getschedules().subscribe({
      next: (response: any) => {
        this.options = response.map((data: { name: any; starDate: any }) => ({
          title: String(data.name),
          date: data.starDate,
          color: '#0000FF',
        }));
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getBotName() {
    this.apiservice.getBot().subscribe({
      next: (response: any) => {
        this.botName = response;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  // -----------------------------------work Flow Name--------------------------------------------

  getWorkflowName() {
    this.apiservice.getWorkflows().subscribe({
      next: (response: any) => {
        this.workFlowName = response;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  startDate: string = '2023-11-10T10:15:00'; // Replace with your start date
  endDate: string = '2023-11-20T10:30:00'; // Replace with your end date
  minuteOffset: number = 60;

  calendarVisible = signal(true);
  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    // initialEvents: , // alternatively, use the `events` setting to fetch from a feed
    // weekends: true,
    // editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    // eventClick: this.handleEventClick.bind(this),
    events:this.generateEvents(),
    // slotMinTime: '00:00:00',
    // slotMaxTime: '23:59:59',
    // slotDuration: '00:15:00', // 15-minute intervals
    // slotDuration: '00:60:00',
    // eventsSet: this.handleEvents.bind(this.options)
    eventDidMount: this.applyEventColors.bind(this),
    // eventDidMount: this.applyDayColors.bind(this)
    // dayCellContent: this.applyDayColors.bind(this),
  };
  generateEvents() {
    const events = [];
    const currentDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);
    while (currentDate <= endDate) {
      const startDateTime = new Date(currentDate);
      const endDateTime = new Date(startDateTime.getTime() + 15 * 60 * 1000); // 15-minute duration
 
      events.push({
        title: `Event1 `,
        start: startDateTime.toISOString(),
        end: endDateTime.toISOString(),
        // color: '#ff0000',
      });
      
      events.push({
        title: `Event2 `,
        start: startDateTime.toISOString(),
        end: endDateTime.toISOString(),
        // color: '#ff0000',
      });
      currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }
    return events;
  }

  applyEventColors(info:any) {
    const targetDate = new Date('2023-11-15');
    if (info.event.start.toDateString() === targetDate.toDateString()) {
      const eventElement = info.el.querySelector('.fc-event-title');
      if (eventElement) {
        eventElement.classList.add('target-date-color');
      }
    }
  }

  applyDayColors(arg: any) {
    const date = arg.date;
    const dayCell = arg.el;
    if (date.toDateString() === new Date('2023-11-15').toDateString()) {
      dayCell.classList.add('target-date-color');
    }
  }

  currentEvents = signal<EventApi[]>([]);

  handleCalendarToggle() {
    this.calendarVisible.update((bool: any) => !bool);
  }

  handleWeekendsToggle() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends;
  }

  onSubmitScheduleForm() {
    if (
      (this.scheduleForm.valid &&
        this.scheduleForm.get('endDate')?.value !== '') ||
      (this.scheduleForm.get('noEndDate')?.value !== null &&
        this.scheduleForm.get('noEndDate')?.value !== '' &&
        this.scheduleForm.get('botname')?.value !== '' &&
        this.scheduleForm.get('name')?.value !== '')
    ) {
      const dialogRef = this.dialog.open(ScheduledataconfirmboxComponent, {
        data: this.scheduleForm.value,
        disableClose: true,
        width: 'auto',
        height: 'auto',
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result !== 'nodata') {
          this.scheduleForm.reset();
          this.getScheduleData();
        }
      });
    } else {
      this.toastr.error('please fill all the fields');
    }}


  dateAndTimeFormat(date: any, time: any) {
    let date1 = new Date(date);
    let createdDate = date1.getUTCDate();
    let createdMonth = date1.getUTCMonth() + 1;
    let createdYear = date1.getUTCFullYear();
    let createddate = `${createdYear}-${createdMonth}-${createdDate}`;
    let time1 = new Date(time);
    const hours = String(time1.getUTCHours()).padStart(0, '2');
    const minutes = String(time1.getUTCMinutes()).padStart(0, '2');
    const seconds = String(time1.getUTCSeconds()).padStart(0, '2');
    let createdtime = `${hours}:${minutes}`;
    return `${createddate}T${createdtime}`;
  }

  date(date: any) {
    let date1 = new Date(date);
    let createdDate = String(date.getUTCDate()).padStart(2, '0');
    let createdMonth = date.getUTCMonth() + 1;
    let createdYear = date.getUTCFullYear();
    let createddate = `${createdYear}-${createdMonth}-${createdDate}`;
    return createddate;
  }
}
