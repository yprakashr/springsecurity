import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from '../services/api-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { ScheduledataconfirmboxComponent } from '../daillogboxes/scheduledataconfirmbox/scheduledataconfirmbox.component';
import { CalendarOptions, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { scheduleModel } from '../scheduler/scheduler.component';
import { Observable, distinctUntilChanged, from, map, startWith } from 'rxjs';
import { CustomReoccuranceComponent } from '../daillogboxes/custom-reoccurance/custom-reoccurance.component';
import { Week } from '@syncfusion/ej2-angular-schedule';

export interface WorkFlow {
  workFlowName: string;
}
export interface User {
  name: string;
}
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent {
  myControl1 = new FormControl<any>('');
  filteredOptions1!: any;
  myControl2 = new FormControl<any>('');
  filteredOptions2!: any;
  customData: any;
  public minDate: any;
  currentDate: any;
  options: scheduleModel[] = [];
  scheduleForm!: FormGroup;
  object: any;
  maxDate1: any;
  ObjectData: any;
  appLoader: boolean = false;
  eventGenerations: any = [];
  customScedulingData: any = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private apiservice: ApiServiceService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.currentDate = this.date(new Date());

    this.scheduleForm = this.fb.group({
      name: this.fb.control('', []),
      botname: this.fb.control('', []),
      starDate: this.fb.control('', [Validators.required]),
      starTime: this.fb.control('', [Validators.required]),
      reoccurance: this.fb.control('Reoccurance', [Validators.required]),
      endDate: this.fb.control('', []),
      noEndDate: this.fb.control('', []),
    });
    this.scheduleForm
      .get('starDate')
      ?.valueChanges.pipe(distinctUntilChanged())
      .subscribe((fromValue: any) => {
        this.minDate = `${fromValue.getFullYear()}-${
          fromValue.getMonth() + 1
        }-${fromValue.getDate()}`;
      });
  }
  @ViewChild('searchInputFirst') searchInputFirst!: ElementRef<any>;
  @ViewChild('searchInputSecond') searchInputSecond!: ElementRef<any>;
  @ViewChild('contentFirst') contentFirst!: ElementRef<any>;
  @ViewChild('contentSecond') contentSecond!: ElementRef<any>;


  countriesFirst: any[] = [];
  countriesSecond: any[] = [];
  selectedCountry = '';
  selectedCountrySecond = '';
  isWrapperActive = false;
  isWrapperActiveSecond = false;


  toggleWrapper(type: string) {
    if (type === 'first') {
      this.isWrapperActiveSecond = false;
      this.isWrapperActive = !this.isWrapperActive;
      if (!this.isWrapperActive) {
        this.searchInputFirst.nativeElement.value = '';
      }
    } else if (type === 'second') {
      this.isWrapperActive = false;
      this.isWrapperActiveSecond = !this.isWrapperActiveSecond;
      if (!this.isWrapperActiveSecond) {
        this.searchInputSecond.nativeElement.value = '';
      }
    }
  }

  searchCountry(searchWord: string, type: string) {
    if (type === 'first') {
      return this.countriesFirst.filter((data) =>
        data.toLowerCase().startsWith(searchWord.toLowerCase())
      );

    } else if (type === 'second') {
      return this.countriesSecond.filter((data) =>
        data.toLowerCase().startsWith(searchWord.toLowerCase())
      );
    }
    return [];}

 
  updateName(selectedCountry: string, type: string) {
    if (type === 'first') {
      this.selectedCountry = selectedCountry;
      this.toggleWrapper('first');
    } else if (type === 'second') {
      this.selectedCountrySecond = selectedCountry;
      this.toggleWrapper('second');
    }}

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


  generateEvents(options: any) {
    const events: any = [];
    for (const item of options) {
      if (
        item.reoccurance &&
        item.endDate !== '' &&
        item.endDate !== null &&
        item.noEndDate !== 'noEndDate'
      ) {
        const endDate = new Date(`${item.endDate}`);
        const recurrence = item.reoccurance;
        const startDateTime = new Date(`${item.starDate}`);

        if (
          !Array.isArray(recurrence) &&
          recurrence.length !== 0 &&
          recurrence === 'daily' &&
          recurrence !== null &&
          recurrence !== ''
        ) {
          this.generateDailyEvents(item, events, startDateTime, endDate);
        }
        if (
          !Array.isArray(recurrence) &&
          recurrence.length !== 0 &&
          recurrence === 'weekly' &&
          recurrence !== null &&
          recurrence !== ''
        ) {
          this.generateWeeklyEvents(item, events, startDateTime, endDate);
        }
        if (
          !Array.isArray(recurrence) &&
          recurrence.length !== 0 &&
          recurrence === 'monthly' &&
          recurrence !== null &&
          recurrence !== ''
        ) {
          this.generateMonthlyEvents(item, events, startDateTime, endDate);
        }
        if (Array.isArray(recurrence) && recurrence.length !== 0) {
          if (recurrence.length == 2) {
            this.generateCustomEvents(item, events);
          } else  if (recurrence.length == 3) {
            this.generateCustomWeeklyEvents(item, events);
          }
        }
      }
    }
    this.calendarOptions.events = events;
  }

  generateCustomWeeklyEvents(item: any, events: any) {
    const startDate = new Date(item.starDate);
    const endDate = new Date(item.endDate);
    const selectedWeekdays = item.reoccurance[0];
    const interval = item.reoccurance[1] || 1; // Interval between occurrences
    const frequency = item.reoccurance[2]; // Frequency: 'week', 'month', or 'year'
    const weekdays: string[] = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const weekIndices: number[] = selectedWeekdays.map((day: string) => weekdays.indexOf(day));
    while (startDate <= endDate) {
      let currentDate = new Date(startDate);
      for (let num = currentDate.getDay(); num <= 6; num++) {
        if (weekIndices.includes(num)) {
          const startDateTime = new Date(startDate);
          const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1-hour duration
          events.push({
            title: `${item.name} Event`,
            start: startDateTime.toISOString(),
            end: endDateTime.toISOString(),
          });}
        startDate.setDate(startDate.getDate() + 1);
      }
      startDate.setDate(startDate.getDate() + 7*interval);
    }}


  generateCustomEvents(item: any, events: any) {
    const currentDate = new Date(item.starDate);
    const endDate = new Date(item.endDate);
    const interval = item.reoccurance[0] || 1; // Interval between occurrences
    const frequency = item.reoccurance[1]; // Frequency: 'week', 'month', or 'year'
    if (frequency !== 'week') {
      while (currentDate <= endDate) {
        const currentDay = currentDate.getDay(); // Get the numeric representation of the current day
        const startDateTime = new Date(currentDate);
        const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1-hour duration
        events.push({
          title: `${item.name} Event`,
          start: startDateTime.toISOString(),
          end: endDateTime.toISOString(),
        });
        if (frequency === 'day') {
          currentDate.setDate(currentDate.getDate() + interval);
        } else if (frequency === 'month') {
          currentDate.setMonth(currentDate.getMonth() + interval);
        } else if (frequency === 'year') {
          currentDate.setFullYear(currentDate.getFullYear() + interval);
        }
      }
    }
    return events;
  }


  private generateDailyEvents(
    item: any,
    events: any[],
    startDateTime: any,
    endDate: any
  ) {
    while (startDateTime <= endDate) {
      const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // Assuming 1-hour duration
      events.push({
        title: item.name,
        start: startDateTime.toISOString(),
        end: endDateTime.toISOString(),
      });
      startDateTime.setDate(startDateTime.getDate() + 1); // Move to the next day
    }
    return events;
  }


  private generateWeeklyEvents(
    item: any,
    events: any[],
    startDateTime: any,
    endDate: any
  ) {
    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const selectedWeekdays = item.reoccuranceDays || [];
    while (startDateTime <= endDate) {
      const weekday = weekdays[startDateTime.getDay()];
      if (selectedWeekdays.includes(weekday.toLowerCase())) {
        const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // Assuming 1-hour duration
        events.push({
          title: item.name,
          start: startDateTime.toISOString(),
          end: endDateTime.toISOString(),
          color:'#ffcc00'
        });
      }
      startDateTime.setDate(startDateTime.getDate() + 7); // Move to the next week
    }
    return events
  }


  private generateMonthlyEvents(
    item: any,
    events: any[],
    startDateTime: any,
    endDate: any
  ) {
    while (startDateTime <= endDate) {
      const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // Assuming 1-hour duration
      events.push({
        title: item.name,
        start: startDateTime.toISOString(),
        end: endDateTime.toISOString(),
      });
      startDateTime.setMonth(startDateTime.getMonth() + 1); // Move to the next month
    }
    return events
  }


  ngOnInit(): void {
    this.getScheduleData();
    this.getBotName();
    this.getWorkflowName();

    this.scheduleForm
      .get('noEndDate')
      ?.valueChanges.pipe(distinctUntilChanged())
      .subscribe((fromValue: any) => {
        if (fromValue) {
          const selectedOptionControl = this.scheduleForm.get(
            'endDate'
          ) as FormControl;
          selectedOptionControl.reset();
          selectedOptionControl.disable();
        } else {
          (this.scheduleForm.get('endDate') as FormControl).enable();
        }
      });
    this.scheduleForm
      .get('endDate')
      ?.valueChanges.pipe(distinctUntilChanged())
      .subscribe((fromValue: any) => {
        if (fromValue == null || fromValue == '') {
          (this.scheduleForm.get('noEndDate') as FormControl).enable();
        } else {
          const selectedOptionControl = this.scheduleForm.get(
            'noEndDate'
          ) as FormControl;
          selectedOptionControl.reset();
          selectedOptionControl.disable();
        }
      });
    this.scheduleForm.get('reoccurance')?.valueChanges.subscribe((value) => {
      if (value == 'custom') {
        const dialogRef = this.dialog.open(CustomReoccuranceComponent, {
          // data: this.scheduleForm.value,
          disableClose: true,
          width: '600PX',
          height: 'auto',
        });
        dialogRef.afterClosed().subscribe((result) => {
          this.customData = result;
        });
      }
    });

    const recurrence = [['Thursday', 'Tuesday', 'Wednesday'], 4, 'week'];

    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];}


  // ---------------------------BOT NAME-------------------------------------------------


  getScheduleData() {
    this.appLoader = true;
    this.apiservice.getschedules().subscribe({
      next: (response: any) => {
        this.options = response;
        this.appLoader = false;
        this.generateEvents(response);
      },
      error: (err: any) => {
        console.log(err);
        this.appLoader = false;
      },
    });}


  getBotName() {
    this.apiservice.getBot().subscribe({
      next: (response: any) => {
        for (let item of response) {
          this.countriesSecond.push(item.name);
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });}


  // -----------------------------------work Flow Name--------------------------------------------


  getWorkflowName() {
    this.apiservice.getWorkflows().subscribe({
      next: (response: any) => {
        for (let item of response) {
          this.countriesFirst.push(item.workflowName);
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });}


  startDate: string = '2023-11-10T10:15:00'; // Replace with your start date
  endDate: string = '2023-11-20T10:30:00'; // Replace with your end date
  minuteOffset: number = 15;

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
    // events: this.eventGenerations,
    // slotMinTime: '00:00:00',
    // slotMaxTime: '23:59:59',
    // slotDuration: '00:15:00', // 15-minute intervals
    // slotDuration: '00:60:00',
    // eventsSet: this.handleEvents.bind(this.options)
    eventDidMount: this.applyEventColors.bind(this),
    // eventDidMount: this.applyDayColors.bind(this)
    // dayCellContent: this.applyDayColors.bind(this),
  };


  applyEventColors(info: any) {
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
    if (this.scheduleForm.get('reoccurance')?.value == 'custom') {
      if (this.selectedCountry!==''&&this.selectedCountrySecond!==''&&
        (this.scheduleForm.valid &&
          this.scheduleForm.get('endDate')?.value !== '' &&
          this.scheduleForm.get('endDate')?.value !== null) ||
        (this.scheduleForm.get('noEndDate')?.value !== null &&
          this.scheduleForm.get('noEndDate')?.value !== false &&
          this.scheduleForm.get('noEndDate')?.value !== '' )
      ) {
        this.ObjectData = {
          name: this.selectedCountry,
          botname: this.selectedCountrySecond,
          starDate: this.scheduleForm.get('starDate')?.value,
          starTime: this.scheduleForm.get('starTime')?.value,
          reoccurance: this.customData,
          endDate: this.scheduleForm.get('endDate')?.value,
          noEndDate: this.scheduleForm.get('noEndDate')?.value,
        };
        const dialogRef = this.dialog.open(ScheduledataconfirmboxComponent, {
          data: this.ObjectData,
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
        this.toastr.error('Please fill all the fields');
      }
    } else {
      if (
        (this.scheduleForm.valid &&this.selectedCountry!==''&&this.selectedCountrySecond!==''&&
          this.scheduleForm.get('endDate')?.value !== '' &&
          this.scheduleForm.get('endDate')?.value !== null) ||
        (this.scheduleForm.get('noEndDate')?.value !== null &&
          this.scheduleForm.get('noEndDate')?.value !== false &&
          this.scheduleForm.get('noEndDate')?.value !== '' )
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
        this.toastr.error('Please fill all the fields');
      }
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
    return `${createddate}T${createdtime}Z`;
  }

  date(date: any) {
    let date1 = new Date(date);
    let createdDate = String(date.getUTCDate()).padStart(2, '0');
    let createdMonth = String(date.getUTCMonth() + 1).padStart(2, '0');
    let createdYear = date.getUTCFullYear();
    let createddate = `${createdYear}-${createdMonth}-${createdDate}`;
    return createddate;
  }
}
