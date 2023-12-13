import { AfterViewInit, Component, ViewChild, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiServiceService } from '../services/api-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { min } from 'rxjs';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { PageEvent, MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-status-runs',
  templateUrl: './status-runs.component.html',
  styleUrls: ['./status-runs.component.css'],
})
export class StatusRunsComponent implements OnInit,OnChanges{

appLoader:boolean=false;
  GoForm: any;
  minDate: any;
  objectData: any = [];
  searchByIsActive_thisMonth: boolean = false;
  searchByIsActive_prevMonth: boolean = false;
  searchByIsActive_threeMonth: boolean = false;
  searchByIsActive_all: boolean = false;
  dataSource!: MatTableDataSource<any>;
  length: any;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent!: PageEvent;
  result: any = [];
  clickCount = 0;
  myButton = document.getElementById('searchBy1') as HTMLButtonElement;
  IsActive_thisMonth!: boolean;

  constructor(
    private router: Router,
    private _liveAnnouncer: LiveAnnouncer,
    private apiservice: ApiServiceService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.GoForm = this.fb.group({
      from: this.fb.control('', [Validators.required]),
      to: this.fb.control('', [Validators.required]),
    });
    this.GoForm.get('from').valueChanges.subscribe((fromValue: any) => {
      this.minDate = fromValue;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.handleSortingPagination(this.objectData);
  }

  workflow(id: any) {
    this.router.navigate(['/workflow', id]);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {
    this.getProgramsData();
    localStorage.setItem('sidenav', 'true');
  }

  displayedColumns: string[] = [
    'workflowName',
    'botName',
    'createdDate',
    'lastUpdatedDate',
    'description',
  ];

  getProgramsData() {
    this.appLoader=true;
    this.apiservice.getExecutions().subscribe({
      next: (res: any) => {
        this.appLoader=false;
        for (const item of res) {
          const createdDate = new Date(item.createdDate);
          const lastUpdatedDate = new Date(item.lastUpdatedDate);
          const lastUpdatedYear = createdDate.getFullYear();
          const lastUpdatedMonth = createdDate.getMonth() + 1;
          const lastUpdatedDateOfMonth = createdDate.getDate();
          const createdYear = createdDate.getFullYear();
          const createdMonth = createdDate.getMonth() + 1;
          const createdDateOfMonth = createdDate.getDate();
          const formattedCreatedDate = `${createdYear}-${createdMonth}-${createdDateOfMonth}`;
          const formattedlastUpdatedDate = `${lastUpdatedYear}-${lastUpdatedMonth}-${lastUpdatedDateOfMonth}`;
          item.createdDate = formattedCreatedDate;
          item.lastUpdatedDate = formattedlastUpdatedDate;
        }
        // this.appLoader=false;
        this.objectData = res;
        this.handleSortingPagination(res);
     
        },
      error: (err: any) => { this.appLoader=false;},
    });
  }
  normalData() {
    this.searchByIsActive_all = false;
    this.searchByIsActive_prevMonth = false;
    this.searchByIsActive_threeMonth = false;
    this.searchByIsActive_thisMonth = false;
    this.handleSortingPagination(this.objectData);
  }
  searchByMONTH() {
    this.clickCount++;
    this.searchByIsActive_all = false;
    this.searchByIsActive_prevMonth = false;
    this.searchByIsActive_threeMonth = false;
    this.searchByIsActive_thisMonth = true;
    const today: Date = new Date();
    const currentMonth: number = today.getMonth() + 1;
    const currentYear: number = today.getFullYear();
    const filteredObjects = this.objectData.filter((object: any) => {
    const objectDate: Date = object.createdDate;
    const date = new Date(objectDate);
    const month: number = date.getMonth() + 1;
    const year: number = date.getFullYear();
    return month === currentMonth && year === currentYear;
    });
    this.handleSortingPagination(filteredObjects);
    this.length = filteredObjects.length;
    if (this.clickCount > 1) {
      this.IsActive_thisMonth = true;
    }
  }

  searchByPrevMONTH() {
    this.searchByIsActive_all = false;
    this.searchByIsActive_thisMonth = false;
    this.searchByIsActive_threeMonth = false;
    this.searchByIsActive_prevMonth = true;
    const today: Date = new Date();
    const currentMonth: number = today.getMonth() + 1;
    const currentYear: number = today.getFullYear();
    const filteredObjects = this.objectData.filter((object: any) => {
      const objectDate: Date = object.createdDate;
      const date = new Date(objectDate);
      const month: number = date.getMonth() + 1;
      const year: number = date.getFullYear();
      return month === currentMonth - 1 && year === currentYear;
    });
    this.handleSortingPagination(filteredObjects);
    this.length = filteredObjects.length;
  }

  searchByLast3MONTHs() {
    this.searchByIsActive_all = false;
    this.searchByIsActive_thisMonth = false;
    this.searchByIsActive_prevMonth = false;
    this.searchByIsActive_threeMonth = true;
    const today: Date = new Date();
    const currentMonth: number = today.getMonth() + 1;
    const currentYear: number = today.getFullYear();
    const filteredObjects = this.objectData.filter((object: any) => {
      const objectDate: Date = object.createdDate;
      const date = new Date(objectDate);
      const month: number = date.getMonth() + 1;
      const year: number = date.getFullYear();
      return (
        month === currentMonth - 1 ||
        month === currentMonth - 2 ||
        month === currentMonth - 3
      );
    });
    this.handleSortingPagination(filteredObjects);
    this.length = filteredObjects.length;
  }

  onSubmit() {
   if(this.GoForm.valid){ let fromDate = this.GoForm.get('from').value;
    let toDate = this.GoForm.get('to').value;
    let filteredObjects = this.objectData.filter((date: any) => {
      let date1 = new Date(date.createdDate);
      let createdDate = String(date1.getUTCDate()).padStart(2,'0');
      let createdMonth = String(date1.getUTCMonth() + 1).padStart(2,'0');
      let createdYear = date1.getUTCFullYear();
      let createddate = `${createdYear}-${createdMonth}-${createdDate}`;
      return createddate >= fromDate && createddate <= toDate;
    });
    this.handleSortingPagination(filteredObjects);
    this.length = filteredObjects.length;}else{
      this.toastr.error('Please fill the Date Range');
    }
  }

  date(date: any) {
    let date1 = new Date(date);
    let createdDate = String(date1.getUTCDate()).padStart(2,'0');
    let createdMonth = String(date1.getUTCMonth() + 1).padStart(2,'0');
    let createdYear = date1.getUTCFullYear();
    let createddate = `${createdYear}-${createdMonth}-${createdDate}`;
    return createddate;
  }
  handleSortingPagination(Data:any){
    this.dataSource = new MatTableDataSource(Data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator=this.paginator;    
   }
}
