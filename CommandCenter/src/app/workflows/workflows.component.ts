import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiServiceService } from '../services/api-service.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { distinctUntilChanged } from 'rxjs/operators';

export interface UserData1 {
  startDate: string;
  endDate: string;
  duration: string;
  status: string;
  logs: string;
}

export interface UserData2 {
  startDate: string;
  endDate: string;
  duration: string;
}

@Component({
  selector: 'app-workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.css'],
})
export class WorkflowsComponent implements OnInit {
  itemId!: string;
  step = 0;
  result: any;
  previousDate: any;
  presentDate: any;
  futureDate: any;
  workflowName: any; //field
  botName: any; //field
  createdDate: any; //field
  lastUpdatedDate: any; //field
  description: any; //field
  pastExecution!: FormGroup; //Form Group
  futureSchedule!: FormGroup; //Form Group
  isDisabled: boolean = true;
  ShowdateFrom1: any;
  selectedStartDate: any;
  programsData: any = []; //data variable to filter
  FutureminDate: any;
  PastminDate: any;
  imageURL: any;
  currentDate!: string;

  displayedColumns: string[] = [
    'startDate',
    'endDate',
    'duration',
    'status',
    'logs',
  ];

  displayedColumnsWithObject: string[] = ['startDate', 'endDate', 'duration'];
  dataSource!: MatTableDataSource<any>;
  dataSourceWithObjectColumn!: MatTableDataSource<any>;

  @ViewChild('empTbSort') empTbSort = new MatSort();
  @ViewChild('empTbSortWithObject') empTbSortWithObject = new MatSort();

  @ViewChild('paginator1') paginator1!: MatPaginator;
  @ViewChild('paginator2') paginator2!: MatPaginator;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.itemId = params['id'];
    });
    this.currentDate = this.date(new Date());
    console.log(this.currentDate);
    this.getProgramsData(this.itemId);
    this.pastExecution = this.fb.group({
      ShowdateFrom: this.fb.control('Date Range', []),
      StartDate: this.fb.control('', []),
      EndDate: this.fb.control('', []),
      Status: this.fb.control('Status', []),
    });
    this.futureSchedule = this.fb.group({
      showdateFrom: this.fb.control('Date Range', []),
      startDate: this.fb.control('', []),
      endDate: this.fb.control('', []),
    });

    this.pastExecution
      .get('StartDate')
      ?.valueChanges.pipe(distinctUntilChanged()) // Using optional chaining here
      ?.subscribe((fromValue: any) => {
        if (fromValue == '') {
          const selectedOptionControl = this.pastExecution?.get(
            'ShowdateFrom'
          ) as FormControl;
          if (this.pastExecution?.get('EndDate')?.value === '') {
            // Using optional chaining
            selectedOptionControl?.enable(); // Using optional chaining
          }
        } else {
          const selectedOptionControl = this.pastExecution?.get(
            'ShowdateFrom'
          ) as FormControl;
          selectedOptionControl?.disable(); // Using optional chaining
        }
      });

    this.pastExecution
      .get('EndDate')
      ?.valueChanges.pipe(distinctUntilChanged())
      ?.subscribe((fromValue: any) => {
        if (fromValue == '') {
          const selectedOptionControl = this.pastExecution.get(
            'ShowdateFrom'
          ) as FormControl;
          if (this.pastExecution.get('StartDate')?.value === '') {
            selectedOptionControl?.enable();
          }
        } else {
          const selectedOptionControl = this.pastExecution?.get(
            'ShowdateFrom'
          ) as FormControl;
          selectedOptionControl?.disable();
        }
      });

    this.pastExecution
      .get('ShowdateFrom')
      ?.valueChanges?.subscribe((fromValue: any) => {
        if (fromValue) {
          const selectedStartDate = this.pastExecution.get(
            'StartDate'
          ) as FormControl;
          const selectedEndDate = this.pastExecution.get(
            'EndDate'
          ) as FormControl;
          if (fromValue !== 'Date Range') {
            selectedStartDate?.disable();
            selectedEndDate?.disable();
          } else {
            selectedStartDate?.enable();
            selectedEndDate?.enable();
          }
        }
      });

    this.futureSchedule
      .get('showdateFrom')
      ?.valueChanges?.subscribe((fromValue: any) => {
        if (fromValue) {
          const selectedStartDate = this.futureSchedule.get(
            'startDate'
          ) as FormControl;
          const selectedEndDate = this.futureSchedule.get(
            'endDate'
          ) as FormControl;
          if (fromValue !== 'Date Range') {
            selectedStartDate?.disable();
            selectedEndDate?.disable();
          } else {
            selectedStartDate?.enable();
            selectedEndDate?.enable();
          }
        }
      });

    this.futureSchedule
      ?.get('startDate')
      ?.valueChanges.pipe(distinctUntilChanged())
      .subscribe((fromValue: any) => {
        if (fromValue == '') {
          const selectedOptionControl = this.futureSchedule?.get(
            'showdateFrom'
          ) as FormControl;
          if (this.futureSchedule?.get('endDate')?.value === '') {
            selectedOptionControl?.enable();
          }
        } else {
          const selectedOptionControl = this.futureSchedule?.get(
            'showdateFrom'
          ) as FormControl;
          selectedOptionControl?.disable();
        }
      });

    this.futureSchedule
      ?.get('endDate')
      ?.valueChanges.pipe(distinctUntilChanged())
      .subscribe((fromValue: any) => {
        if (fromValue == '') {
          const selectedOptionControl = this.futureSchedule.get(
            'showdateFrom'
          ) as FormControl;
          if (this.futureSchedule?.get('startDate')?.value === '') {
            selectedOptionControl?.enable();
          }
        } else {
          const selectedOptionControl = this.futureSchedule.get(
            'showdateFrom'
          ) as FormControl;
          selectedOptionControl.disable();
        }
      });

    if (this.futureSchedule && this.futureSchedule.get('startDate')) {
      this.futureSchedule
        ?.get('startDate')
        ?.valueChanges.subscribe((fromValue: any) => {
          this.FutureminDate = fromValue;
        });
    }

    if (this.pastExecution && this.pastExecution.get('StartDate')) {
      this.pastExecution
        ?.get('StartDate')
        ?.valueChanges.subscribe((fromValue: any) => {
          this.PastminDate = fromValue;
        });
    }
  }

  handlingPaginationSortingFilterTable1(tableDataSource: any) {
    this.dataSource = new MatTableDataSource(tableDataSource);
    this.empTbSort.disableClear = true;
    this.dataSource.sort = this.empTbSort;
    this.dataSource.paginator = this.paginator1;
  }
  
  handlingPaginationSortingFilterTable2(tableDataSource: any) {
    this.dataSourceWithObjectColumn = new MatTableDataSource(tableDataSource);
    this.empTbSortWithObject.disableClear = true;
    this.dataSourceWithObjectColumn.sort = this.empTbSortWithObject;
    this.dataSourceWithObjectColumn.paginator = this.paginator2;
  }

  constructor(
    private route: ActivatedRoute,
    private apiservice: ApiServiceService,
    private fb: FormBuilder
  ) {}

  getProgramsData(id: string) {
    if (id !== null || id !== '') {
      this.apiservice.getExecutions().subscribe({
        next: (res: any) => {
          this.programsData = res;
          this.result = res.filter((data: any) => {
            if (id == data.id) {
              data.createdDate = this.date(data.createdDate);
              data.lastUpdatedDate = this.date(data.lastUpdatedDate);
              this.imageURL = data.imageURL;
              this.workflowName = data.workflowName;
              this.botName = data.botName;
              this.createdDate = data.createdDate;
              this.lastUpdatedDate = data.lastUpdatedDate;
              this.description = data.description;
            }
            return id == data.id;
          });
          this.futureDate = this.result[0].executions.filter((date: any) => {
            this.presentDate = new Date();
            const startDate = new Date(this.date(date.startDate));
            const res = this.presentDate <= startDate;
            return res;
          });
          this.previousDate = this.result[0].executions.filter((date: any) => {
            this.presentDate = new Date();
            const endDate = new Date(this.date(date.startDate));
            const res = this.presentDate >= endDate;
            date.duration = this.duration(date.startDate, date.endDate);
            date.startDate = `${this.date(date.startDate)} ${this.time(
              date.startDate
            )}`;
            date.endDate = `${this.date(date.endDate)} ${this.time(
              date.endDate
            )}`;
            return res;
          });
          this.handlingPaginationSortingFilterTable1(this.previousDate);
          this.handlingPaginationSortingFilterTable2(this.futureDate);
        },
        error: (err: any) => {},
      });
    }
  }

  duration(startDate: any, endDate: any) {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const timeDifference = Math.abs(date1.getTime() - date2.getTime());
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingHours = String(
      Math.floor((timeDifference / (1000 * 60 * 60)) % 24) + daysDifference * 24
    ).padStart(2, '0');
    const remainingMinutes = String(
      Math.floor((timeDifference / (1000 * 60)) % 60)
    ).padStart(2, '0');
    const remainingSeconds = String(
      Math.floor((timeDifference / 1000) % 60)
    ).padStart(2, '0');
    return `${remainingHours}:${remainingMinutes} Hours`;
  }

  date(date: any) {
    let date1 = new Date(date);
    let createdDate = String(date1.getUTCDate()).padStart(2, '0');
    let createdMonth = String(date1.getUTCMonth() + 1).padStart(2, '0');
    let createdYear = date1.getUTCFullYear();
    let createddate = `${createdYear}-${createdMonth}-${createdDate}`;
    return createddate;
  }

  time(date: any) {
    let date1 = new Date(date);
    const hours = String(date1.getUTCHours()).padStart(2, '0');
    const minutes = String(date1.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date1.getUTCSeconds()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  showDatepreference() {
    const pastShowdateFrom = this.pastExecution.get('ShowdateFrom');
    if (pastShowdateFrom && pastShowdateFrom.value !== 'Date Range') {
      this.showDateFrom(pastShowdateFrom.value);
    }

    const futureShowdateFrom = this.futureSchedule.get('showdateFrom');
    if (futureShowdateFrom && futureShowdateFrom.value !== 'Date Range') {
      this.showDateFrom(futureShowdateFrom.value);
    }
  }

  showDateFrom(selection: any) {
    const result = this.programsData.filter((data: any) => {
      return this.itemId == data.id;
    });
    if (selection == 'day') {
      const originalDate = new Date();
      const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      const newDate = new Date(
        this.date(new Date(originalDate.getTime() - oneDayInMilliseconds))
      );
      const previousDate = result[0].executions.filter((date: any) => {
        const dateString = date.startDate;
        const dateParts = dateString.split(' '); // Split the string into date and time parts
        const PreviousDate = new Date(dateParts[0]);
        return PreviousDate < newDate;
      });
      this.handlingPaginationSortingFilterTable1(previousDate);
    }

    if (selection == 'day1') {
      const originalDate = new Date();
      const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      const newDate = new Date(
        this.date(new Date(originalDate.getTime() - oneDayInMilliseconds))
      );
      const previousDate = result[0].executions.filter((date: any) => {
        const dateString = date.startDate;
        const dateParts = dateString.split(' '); // Split the string into date and time parts
        const PreviousDate = new Date(dateParts[0]);
        return PreviousDate > newDate;
      });
      this.handlingPaginationSortingFilterTable2(previousDate);
    }

    if (selection == 'week') {
      const originalDate = new Date();
      const sevenDayInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      const newDate = new Date(
        this.date(new Date(originalDate.getTime() - sevenDayInMilliseconds))
      );
      const previousDate = result[0].executions.filter((date: any) => {
        const dateString = date.startDate;
        const dateParts = dateString.split(' '); // Split the string into date and time parts
        const PreviousDate = new Date(dateParts[0]);
        return PreviousDate > newDate;
      });
      this.handlingPaginationSortingFilterTable1(previousDate);
    }

    if (selection == 'week1') {
      const originalDate = new Date();
      const sevenDayInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      const newDate = new Date(
        this.date(new Date(originalDate.getTime() - sevenDayInMilliseconds))
      );
      const previousDate = result[0].executions.filter((date: any) => {
        const dateString = date.startDate;
        const dateParts = dateString.split(' '); // Split the string into date and time parts
        const PreviousDate = new Date(dateParts[0]);
        return PreviousDate > newDate;
      });
      this.handlingPaginationSortingFilterTable2(previousDate);
    }

    if (selection == 'month') {
      const originalDate = new Date();
      const onMonthInMilliseconds = 30 * 24 * 60 * 60 * 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      const newDate = new Date(
        this.date(new Date(originalDate.getTime() - onMonthInMilliseconds))
      );
      const previousDate = result[0].executions.filter((date: any) => {
        const dateString = date.startDate;
        const dateParts = dateString.split(' '); // Split the string into date and time parts
        var PreviousDate = new Date(dateParts[0]);
        return PreviousDate > newDate;
      });
      this.handlingPaginationSortingFilterTable1(previousDate);
    }

    if (selection == 'month1') {
      const originalDate = new Date();
      const onMonthInMilliseconds = 30 * 24 * 60 * 60 * 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      const newDate = new Date(
        this.date(new Date(originalDate.getTime() - onMonthInMilliseconds))
      );
      const previousDate = result[0].executions.filter((date: any) => {
        const dateString = date.startDate;
        const dateParts = dateString.split(' '); // Split the string into date and time parts
        var PreviousDate = new Date(dateParts[0]);
        return PreviousDate > newDate;
      });
      this.handlingPaginationSortingFilterTable2(previousDate);
    }

    if (selection == 'Date Range') {
      this.handlingPaginationSortingFilterTable1(this.previousDate);
    }

    if (selection == 'Date Range') {
      this.handlingPaginationSortingFilterTable2(this.futureDate);
    }
  }

  futureDatesDifference() {
    const startDate = this.pastExecution.get('startDate');
    const endDate = this.pastExecution.get('endDate');
    if (startDate && endDate && startDate.value && endDate.value) {
      this.datesBetween(startDate.value, endDate.value);
    }
  }

  previousDatesDifference() {
    const startDate = this.pastExecution.get('startDate');
    const endDate = this.pastExecution.get('endDate');
    this.datesBetween(startDate?.value, endDate?.value);
  }

  datesBetween(date1: any, date2: any) {
    if (date1 !== '' && date2 !== '') {
      const result = this.programsData.filter((data: any) => {
        return this.itemId == data.id;
      });
      const previousDates = result[0].executions.filter((date: any) => {
        const dateString = date.startDate;
        const dateParts = dateString.split(' '); // Split the string into date and time parts
        const newDate = new Date(dateParts[0]);
        return date1 <= newDate >= date2;
      });
      this.handlingPaginationSortingFilterTable1(previousDates);
    } else {
      this.handlingPaginationSortingFilterTable1(this.previousDate);
      this.handlingPaginationSortingFilterTable2(this.futureDate);
    }
  }

  statusCompare() {
    const result = this.programsData.filter((data: any) => {
      return this.itemId == data.id;
    });
    const statusFormControl = this.pastExecution.get('Status');

    if (statusFormControl && statusFormControl.value !== 'Status') {
      const statusData = result[0].executions.filter((status: any) => {
        const preferedstatus = status.status;
        return status.status == statusFormControl.value;
      });
      this.handlingPaginationSortingFilterTable1(statusData);
    } else {
      this.handlingPaginationSortingFilterTable1(this.previousDate);
    }
  }
}
