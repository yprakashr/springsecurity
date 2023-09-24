import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../email.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-ass14-login',
  templateUrl: './ass14-login.component.html',
  styleUrls: ['./ass14-login.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class Ass14LoginComponent {
  loginStatus: number;
  signupStatus: number;
  recoverStatus: number;
  isPassMatch: number;
  forgot_Pass: any;
  forgot_ConfPass: any;
  forgot_Email: any;
  ver_email: any;
  isEmailMatch: number;
  isEmailExists: boolean = true;
  forgot_Username: any;
  uId: any;
  forgot: boolean = false;
  loginsignup: boolean = true;
  accountVerified: boolean = false;
  OTP: number = 0;
  OTPX: number;
  isOTPMatch: boolean = false;

  constructor(
    private users: UsersService,
    private fb: FormBuilder,
    private sendMail: EmailService
  ) {}

  // login form
  LoginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  //OTP form
  OTPForm = this.fb.group({
    otpx: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^([a-zA-z0-9.]+[@][a-zA-Z]+[.][a-zA-Z]{2,})$/),
      ],
    ],
  });

  // forgot form
  ForgotForm = this.fb.group({
    id: [''],
    fullname: [''],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^([a-zA-z0-9.]+[@][a-zA-Z]+[.][a-zA-Z]{2,})$/),
      ],
    ],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    conf_password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(30)],
    ],
  });

  // signup form
  SignUpForm = this.fb.group({
    fullname: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(20)],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^([a-zA-z0-9.]+[@][a-zA-Z]+[.][a-zA-Z]{2,})$/),
      ],
    ],
    username: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(30)],
    ],
  });

  loginAction(form: any) {
    this.users
      .userLogin(form.value.username, form.value.password)
      .subscribe((res: any) => {
        this.loginStatus = res.status;

        if (this.loginStatus === 200) {
          sessionStorage.setItem('session', form.value.username);
          window.location.replace('patients');
        }

        if (this.loginStatus === 404) {
          form.reset();
          sessionStorage.setItem('session', 'null');
        }
      });
  }

  signupAction(form: any) {
    this.users.saveUser(this.SignUpForm.value).subscribe((res: any) => {
      form.reset();
      this.signupStatus = res.status;
    });
  }

  verifyOTP() {
    if (this.OTPX === this.OTP) {
      this.accountVerified = true;
    } else {
      this.isOTPMatch = true;
    }
  }

  sendOTP() {
    this.users.getUserbyEmail(this.ver_email).subscribe((res) => {
      if (res.status == 200) {
        this.OTP = Math.floor(Math.random() * 9000) + 1000;
        this.sendMail
          .sendEmail(
            this.OTPForm.value.email,
            'Account recovery',
            'Your OTP is ' + this.OTP
          )
          .subscribe();
      } else {
        this.isEmailExists = false;
      }
    });
  }

  resetRecovery() {
    this.forgot = false;
    this.accountVerified = false;
    this.isOTPMatch = false;
    this.OTP = 0;
    this.ver_email = null;
  }

  accRecoverAction(form: any) {
    this.users.getUserbyUname(form.value.username).subscribe((res) => {
      this.uId = res.data.id;

      form.value.id = res.data.id;
      form.value.fullname = res.data.fullname;
      form.value.username = res.data.username;

      if (this.forgot_Email == res.data.email) {
        this.isEmailMatch = 0;

        if (this.forgot_Pass == this.forgot_ConfPass) {
          this.isPassMatch = 0;
          this.users.userUpdate(form.value, this.uId).subscribe((res) => {
            form.reset();
            this.recoverStatus = res.status;
          });
        } else {
          this.isPassMatch = 1;
        }
      } else {
        this.isEmailMatch = 1;
      }
    });
  }
}
