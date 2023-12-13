import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { EventInput } from '@fullcalendar/core';
import { distinctUntilChanged } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';

export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  jobtitle: string;
  department: string;
  project: string;
}

export interface Project {
  name: string;
  id: number;
}

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
export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-custom-date-events',
  templateUrl: './custom-date-events.component.html',
  styleUrls: ['./custom-date-events.component.css'],
})
export class CustomDateEventsComponent implements AfterViewInit{
  displayedColumns: string[] = [
  
    'startDate',
    'endDate',
    'duration',
    'status',
    'logs',
  ];

  displayedColumnsWithObject: string[] = [
    'startDate', 'endDate', 'duration'
  ];


  dataSource!:MatTableDataSource<any>;
  dataSourceWithObjectColumn!:MatTableDataSource<any>;

  @ViewChild('empTbSort') empTbSort = new MatSort();
  @ViewChild('empTbSortWithObject') empTbSortWithObject = new MatSort();

  @ViewChild('paginatorFirst') paginatorFirst!: MatPaginator;
  @ViewChild('paginatorSecond') paginatorSecond!: MatPaginator;

 

  ngAfterViewInit() {
    this.empTbSort.disableClear = true;
    this.dataSource.sort = this.empTbSort;
    this.dataSource.paginator = this.paginatorFirst;

    this.empTbSortWithObject.disableClear = true;
    this.dataSourceWithObjectColumn.sort = this.empTbSortWithObject;
    this.dataSourceWithObjectColumn.paginator = this.paginatorSecond;
  }

  itemId: string='1239';
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
  pastExecution: any; //Form Group
  futureSchedule: any; //Form Group
  isDisabled: boolean = true;
  ShowdateFrom1: any;
  selectedStartDate: any;
  programsData: any = []; //data variable to filter
  FutureminDate: any;
  PastminDate: any;
  imageURL: any;


  ngOnInit(): void {
    this.getProgramsData(this.itemId);
  }

  handlingPaginationSortingFilterTable1(tableDataSource: any) {
    this.dataSource = new MatTableDataSource(tableDataSource);
    this.empTbSort.disableClear = true;
    this.dataSource.sort = this.empTbSort;
    this.dataSource.paginator = this.paginatorFirst;
  }
  handlingPaginationSortingFilterTable2(tableDataSource: any) {
    this.dataSourceWithObjectColumn = new MatTableDataSource(tableDataSource);
    this.empTbSortWithObject.disableClear = true;
    this.dataSourceWithObjectColumn.sort = this.empTbSortWithObject;
    this.dataSourceWithObjectColumn.paginator = this.paginatorSecond;
  }

  constructor(
    private apiservice: ApiServiceService
  ) {
  
  }

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
    let createdDate = date1.getUTCDate();
    let createdMonth = date1.getUTCMonth() + 1;
    let createdYear = date1.getUTCFullYear();
    let createddate = `${createdYear}-${createdMonth}-${createdDate}`;
    return createddate;
  }

  time(date: any) {
    let date1 = new Date(date);
    const hours = date1.getUTCHours();
    const minutes = date1.getUTCMinutes();
    const seconds = date1.getUTCSeconds();
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
    if (this.pastExecution.get('ShowdateFrom').value !== 'Date Range') {
      this.showDateFrom(this.pastExecution.get('ShowdateFrom').value);
    }
    if (this.futureSchedule.get('showdateFrom').value !== 'Date Range') {
      this.showDateFrom(this.futureSchedule.get('showdateFrom').value);
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
    this.datesBetween(
      this.pastExecution.get('startDate').value,
      this.pastExecution.get('endDate').value
    );
  }

  previousDatesDifference() {
    this.datesBetween(
      this.pastExecution.get('StartDate').value,
      this.pastExecution.get('EndDate').value
    );
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
    if (this.pastExecution.get('Status').value !== 'Status') {
      const statusData = result[0].executions.filter((status: any) => {
        const preferedstatus = status.status;
        return status.status == this.pastExecution.get('Status').value;
      });
      this.handlingPaginationSortingFilterTable1(statusData);
    } else {
      this.handlingPaginationSortingFilterTable1(this.previousDate);
    }
  }
}
