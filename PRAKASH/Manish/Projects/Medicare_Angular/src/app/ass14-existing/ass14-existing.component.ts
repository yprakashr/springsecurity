import { Component } from '@angular/core';
import { PatientsService } from '../patients.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Patient {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  date: string;
  time: string;
  phone: string;
}

@Component({
  selector: 'app-ass14-existing',
  templateUrl: './ass14-existing.component.html',
  styleUrls: ['./ass14-existing.component.css'],
})
export class Ass14ExistingComponent {
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'age',
    'gender',
    'date',
    'time',
    'phone',
  ];

  dataSource: MatTableDataSource<Patient> = new MatTableDataSource();

  tbody: any = ['0'];
  status: any = 0;

  constructor(
    private patients: PatientsService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  //template form
  existingPatientsForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]*$/),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]*$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]*$/),
    ]),
  });

  ngOnInit() {
    this.loadScript('assets/js/existing.js');
    document.getElementById('firstname')?.setAttribute('maxlength', '20');
    document.getElementById('lastname')?.setAttribute('maxlength', '20');
  }

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  // individual http requests
  loadData_fn_ln_ph(fname: any, lname: any, phone: any) {
    this.patients
      .getPatients_fn_ln_ph(fname, lname, phone)
      .subscribe((res: any) => {
        this.dataSource = new MatTableDataSource<Patient>(res.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.status = res.status;
      });
  }
  loadData_fn(fname: any) {
    this.patients.getPatients_fn(fname).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<Patient>(res.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.status = res.status;
    });
  }

  loadData_ln(lname: any) {
    this.patients.getPatients_ln(lname).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<Patient>(res.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.status = res.status;
    });
  }

  loadData_ph(phone: any) {
    this.patients.getPatients_ph(phone).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<Patient>(res.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.status = res.status;
    });
  }

  loadData_fn_ln(fname: any, lname: any) {
    this.patients.getPatients_fn_ln(fname, lname).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<Patient>(res.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.status = res.status;
    });
  }

  loadData_fn_ph(fname: any, phone: any) {
    this.patients.getPatients_fn_ph(fname, phone).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<Patient>(res.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.status = res.status;
    });
  }
  
  loadData_ln_ph(lname: any, phone: any) {
    this.patients.getPatients_ln_ph(lname, phone).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<Patient>(res.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.status = res.status;
    });
  }

  // search function
  searchExisting(form: FormGroup) {
    if (form.value.phone == null) {
      form.value.phone = '';
    }

    if (
      form.value.firstname != '' &&
      form.value.lastname != '' &&
      form.value.phone != ''
    ) {
      this.loadData_fn_ln_ph(
        form.value.firstname,
        form.value.lastname,
        form.value.phone
      );
    }

    if (
      form.value.firstname != '' &&
      form.value.lastname == '' &&
      form.value.phone == ''
    ) {
      this.loadData_fn(form.value.firstname);
    }

    if (
      form.value.firstname == '' &&
      form.value.lastname != '' &&
      form.value.phone == ''
    ) {
      this.loadData_ln(form.value.lastname);
    }

    if (
      form.value.firstname == '' &&
      form.value.lastname == '' &&
      form.value.phone != ''
    ) {
      this.loadData_ph(form.value.phone);
    }

    if (
      form.value.firstname != '' &&
      form.value.lastname != '' &&
      form.value.phone == ''
    ) {
      this.loadData_fn_ln(form.value.firstname, form.value.lastname);
    }

    if (
      form.value.firstname != '' &&
      form.value.lastname == '' &&
      form.value.phone != ''
    ) {
      this.loadData_fn_ph(form.value.firstname, form.value.phone);
    }

    if (
      form.value.firstname == '' &&
      form.value.lastname != '' &&
      form.value.phone != ''
    ) {
      this.loadData_ln_ph(form.value.lastname, form.value.phone);
    }
  }

  public loadScript(url: any) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  checkValid() {
    if (
      this.existingPatientsForm.get('firstname')?.valid ||
      this.existingPatientsForm.get('lastname')?.valid ||
      this.existingPatientsForm.get('phone')?.valid
    ) {
      return false;
    } else {
      return true;
    }
  }
}
