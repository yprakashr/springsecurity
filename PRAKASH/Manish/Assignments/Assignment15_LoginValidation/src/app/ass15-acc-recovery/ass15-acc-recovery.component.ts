import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ass15-acc-recovery',
  templateUrl: './ass15-acc-recovery.component.html',
  styleUrls: ['./ass15-acc-recovery.component.css'],
})
export class Ass15AccRecoveryComponent {
  constructor(
    private fb: FormBuilder,
    private user_service: UsersService,
    private _snackBar: MatSnackBar
  ) {}

  userNAME: any;
  session: any = sessionStorage.getItem('session');
  accountVerified: boolean = false;
  recoverStatus: any;
  OTP: number = 0;
  otpSent: boolean = false;
  userID: any = '';

  VerifyEmailForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
  });

  OTPForm: FormGroup = this.fb.group({
    otp: ['', [Validators.required]],
  });

  ForgotForm: FormGroup = this.fb.group({
    id: [''],
    fullname: [''],
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/^\S*$/),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^([a-zA-z0-9.]+[@][a-zA-Z]+[.][a-zA-Z]{2,})$/),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*_?&])[A-Za-z\d@$#!%*_?&]*$/
        ),
      ],
    ],
    conf_password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*_?&])[A-Za-z\d@$#!%*_?&]*$/
        ),
      ],
    ],
    gender: [''],
    phonenumber: [''],
    role: [''],
  });

  accRecoverAction(form: any) {
    this.user_service
      .getUserByUsername(form.value.username)
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.userID = res.data[0].id;
          this.userNAME = res.data[0].fullname;
          form.value.id = res.data[0].id;
          form.value.gender = res.data[0].gender;
          form.value.phonenumber = res.data[0].phonenumber;
          form.value.role = res.data[0].role;
          form.value.fullname = res.data[0].fullname;

          if (this.ForgotForm.get('email')?.value == res.data[0].email) {
            if (
              this.ForgotForm.get('password')?.value ==
              this.ForgotForm.get('conf_password')?.value
            ) {
              this.user_service
                .Account_Recover(this.userID, form.value)
                .subscribe((res) => {
                  if (res.status == 200) {
                    form.reset();
                    this.openSweetAlert(this.userNAME);
                  } else {
                    Swal.fire(
                      'Something went wrong',
                      'please try again',
                      'error'
                    );
                  }
                });
            } else {
              this.openSnackBar("Passwords won't match");
            }
          } else {
            this.openSnackBar(
              `Email does not match for ${form.value.username}`
            );
          }
        } else {
          this.openSnackBar(`username ${form.value.username} does not exist`);
        }
      });
  }

  sendOTP() {
    this.user_service
      .getUserByEmail(this.VerifyEmailForm.get('email')?.value)
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.user_service
            .sendOTP(this.VerifyEmailForm.get('email')?.value)
            .subscribe((res: any) => {
              if (res.status === 200) {
                this.otpSent = true;
                this.OTP = res.otp;
              } else {
                this.openSnackBar(
                  'Something went wrong. Please try again later.'
                );
              }
            });
        } else {
          this.openSnackBar('Email does not exists');
        }
      });
  }

  verifyOTP() {
    if (this.OTPForm.get('otp')?.value == this.OTP) {
      this.accountVerified = true;
    } else {
      this.openSnackBar('Wrong OTP entered. Please try again');
    }
  }

  togglePassword() {
    var passwordField = <HTMLInputElement>document.getElementById('pass');

    if (passwordField!.type === 'password') {
      passwordField!.type = 'text';
    } else {
      passwordField!.type = 'password';
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 2000,
      panelClass: ['registerSnackbar'],
    });
  }

  openSweetAlert(name: string) {
    Swal.fire({
      title: 'Account recovered successfully',
      html: `<b style="color:blue">${name}</b> now you can login to your account`,
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace('login');
      } else if (result.isDismissed) {
        window.location.replace('login');
      }
    });
  }

  ngOnInit() {
    if (this.session) {
      window.location.replace('users');
    }
  }
}
