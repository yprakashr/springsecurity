import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { FetchapiService } from '../services/fetchapi.service';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',

})
export class RegiterComponent implements OnInit {
  [x: string]: any;
  display: boolean = true;
  public message: boolean = false;

  public regForm = this.fb.group({
    fullName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z\s]*$/),
        Validators.maxLength(20),
      ],
    ],
    age: ['', [Validators.required,Validators.maxLength(3)]],
    phoneno: ['', [Validators.required,Validators.maxLength(13)]],
    gender: ['', [Validators.required]],
    time: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });
  signupForm: any;

  constructor(
    private fetch: FetchapiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getdate();
    this.loadScript('assets/js/register.js');

  }

  get gender() {
    return this.regForm.get('gender');
  }

  // **************************** submiting data *************************************
  public onSubmit(data: any) {
    this.fetch.postApi(data).subscribe((result: any) => {
      console.warn('result', result);
      this.regForm.reset();
      swal.fire('Good job!', 'You Booked your appointment!', 'success');
    });
  }

  remove() {
    this.message = false;
  }
  onclick() {
    this.router.navigate(['/check']);
  }

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
  public loadScript(url: any) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  toExisting() {
    this.router.navigate(['/check']);
  }
  toPatients() {
    this.router.navigate(['/details']);
  }
  toHome() {
    this.router.navigate(['/app']);
  }
}
