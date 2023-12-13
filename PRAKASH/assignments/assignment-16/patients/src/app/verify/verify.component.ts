import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchapiService } from '../services/fetchapi.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
})
export class VerifyComponent {
  [x: string]: any;
  dataSource: any;
  dataFound: boolean = false;
  display: boolean = true;
  status: any;
  @ViewChild(MatPaginator) paginator: any;

  displayedColumns: string[] = [
    'fullName',
    'phoneno',
    'age',
    'gender',
    'date',
    'time',

  ];
  constructor(
    private fb: FormBuilder,
    private fetch: FetchapiService,
    private router: Router
  ) {}

  onclick() {
    this.router.navigate(['/register']);
  }

  regForm = this.fb.group({
    fullName: ['', [Validators.minLength(2)]],
    age: ['', []],
    phoneno: ['', []],
  });
  toExisting() {
    this.router.navigate(['/app']);
  }

  onSubmit(form: FormGroup) {
    if (form.value.fullName == '') {
      form.value.fullName = null;
    }
    if (form.value.age == '') {
      form.value.age = null;
    }
    if (form.value.phoneno == '') {
      form.value.phoneno = null;
    }

    console.warn(form.value.fullName, form.value.age, form.value.phoneno);
    this.loadall(form.value.fullName, form.value.age, form.value.phoneno);
    console.warn(
      `${form.value.fullName},${form.value.age},${form.value.phoneno}`
    );
  }

  loadall(fullName: any, age: any, phoneno: any) {
    this.fetch.fetchApipost(fullName, age, phoneno).subscribe((data: any) => {
      console.warn(data);
      this.dataSource = new MatTableDataSource(data.data);
      this.status = data.status;
      this.dataSource.paginator = this.paginator;
        });
  }

  toHome() {
    this.router.navigate(['/app']);
  }
  toRegister() {
    this.router.navigate(['/register']);
  }
  toPatients() {
    this.router.navigate(['/details']);
  }

}
