import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiFetchingService } from '../services/api-fetching.service';

@Component({
  selector: 'app-email-for-forgotpassword',
  templateUrl: './email-for-forgotpassword.component.html',
  styleUrls: ['./email-for-forgotpassword.component.css'],
})
export class EmailForForgotpasswordComponent implements OnInit {
  dismiss:boolean=false;
  errmsg: boolean=false;
  isValid:boolean=true;


  constructor(private fetch: ApiFetchingService,private fb: FormBuilder,private router: Router) {}
  ngOnInit(): void {
  }

  public emailcheck = this.fb.group({
    email: this.fb.control('', [
      Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
      Validators.required,
    ]),
  });
  
  get email() {
    return this.emailcheck.get('email') as FormControl;
  }

  public pinInput = this.fb.group({
    input1: this.fb.control('', []),
    input2: this.fb.control('', []),
    input3: this.fb.control('', []),
    input4: this.fb.control('', []),
  });
  // get email(){return this.emailcheck.get('email') as FormControl;}

  move(e: any, p: any, c: any, n: any) {
    var length = c.value.length;
    var char = c.value;

    var maxlength = c.getAttribute('maxlength');
    var pattern = c.getAttribute('pattern');

    if (!e.key.match(pattern)) {
      p.value = '';
      c.value = '';
      n.value = '';
      p.focus();
    }

    if (length == maxlength) {
      if (n != '') {
        n.focus();
      }}
    if (e.key == 'Backspace') {
      if (p != '') {
        p.focus();
      }}
  }   


  submitEmail(e: any) {
    if (e.value != null || e.value != '') {
      this.fetch.sendEmail(e.value.email).subscribe((res: any) => {
        console.warn(res.status);
        if (res.status == 400 || res.status == ''|| res.status == null) {
          e.reset();
          this.errmsg=true;
          
            this.dismiss=true;
          setInterval(() => {
            // document.getElementById('setClass')?.removeAttribute('class');
            this.dismiss=false;
          }, 500);
        }
        if(res.status==200){
          this.isValid=false
        }
      (err:any)=>{
    console.log("this is not valid email");
    console.log(err);
      }
      });}}


      submitOTP(e:any){

      }
}























































































