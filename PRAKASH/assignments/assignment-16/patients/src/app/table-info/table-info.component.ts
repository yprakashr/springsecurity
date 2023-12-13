import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FetchapiService } from '../services/fetchapi.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
})
export class TableInfoComponent implements OnInit {
  // ***************************************** variables & arrays ********************************************

  display: boolean = true;
  @ViewChild(MatSort) matSort: any;
  @ViewChild(MatPaginator) paginator: any;
  displayedColumns: string[] = [
    'fullName',
    'phoneno',
    'age',
    'gender',
    'date',
    'time',
    'edit',
    'delete',
  ];
  dataSource: any;
  popup: boolean = false;
  showForm: boolean = false;
  posts: any;
  fullName: any;
  phoneno: any;
  age: any;
  gender: any;
  date: any;
  time: any;
  id: any;

  public patientDetials: any;
  formDetails: any;

  // ******************************************* constructor services ********************************************

  constructor(private router: Router,private fetch: FetchapiService) {}

  // ******************************** ng lifecycle hook *********************************************

  ngOnInit(): void {
    this.getRequest();
  }

  // **************************************************** date restriction functionality *********************************

  myDate: any;
  getdate() {
    var date: any = new Date();
    var todate: any = date.getDate();
    var month: any = date.getMonth() + 1;

    if (todate < 10) {
      todate = '0' + todate;
    }
    if (month < 10) {
      month = '0' + month;
    }
    var year: any = date.getFullYear();
    this.myDate = year + '-' + month + '-' + todate;
  }

  // ****************************************** Edit detials functionality *****************************************

  OpenForm(data: any) {
    this.showForm = true;
    this.fullName = data.fullName;
    this.phoneno = data.phoneno;
    this.age = data.age;
    this.gender = data.gender;
    this.date = data.date;
    console.warn(this.date);
    this.time = data.time;
    this.id = data.id;
  }

  saveData() {
    this.showForm = false;
    let body = {
      fullName: this.fullName,
      age: this.age,
      phoneno: this.phoneno,
      gender: this.gender,
      date: this.date,
      time: this.time,
    };
    console.warn(body);
    this.fetch
      .updateById(this.id, body)
      .subscribe((res: any) => console.warn('data inserted successfully'));
  }

  closeform() {
    this.showForm = false;
    this.clearForm();
  }

  clearForm() {
    this.fullName = null;
    this.phoneno = null;
    this.age = null;
    this.gender = null;
    this.date = null;
    this.time = null;
  }

  // ****************************************** sorting and filtering functions ************************************

  sort() {
    this.dataSource.sort = this.matSort;
  }

  filter(e: any) {
    this.patientDetials.filter = e.target.value;
  }
  // ********************************************* getting data and delete funcitonality *********************************

  getRequest() {
    this.fetch.getApi().subscribe((data: any) => {
      this.patientDetials = new MatTableDataSource(data.data);
      this.patientDetials.sort = this.matSort;
      this.patientDetials.paginator = this.paginator;
      console.warn(data.data);
    });
  }

  deleteData(id: number) {
    this.popup = true;
    this.id = id;
  }

  popUpopen() {
    return this.fetch.deleteApi(this.id).subscribe((res: any) => {
      this.getRequest();
      this.popup = false;
    });
  }

  popUpclose() {
    this.popup = false;
  }

  // **************************************** navigation bar **********************************************

  toExisting() {
    this.router.navigate(['/check']);
  }
  toHome() {
    this.router.navigate(['/app']);
  }
  toRegister() {
    this.router.navigate(['/register']);
  }
}
