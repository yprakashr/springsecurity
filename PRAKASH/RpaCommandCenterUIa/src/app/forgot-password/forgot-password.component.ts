import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  otp:boolean;
  isLoading:any;
  pinCode: string | null;
  constructor(private fb: FormBuilder,
    private toastrService: ToastrService,
    private userservice:UserService,
    public http:HttpClient,
    public dialogRef: MatDialogRef<ForgotPasswordComponent>
    ) {}

ngOnInit(){
  this.otp=false;}

ForgotEmailForm = this.fb.group({
  emailForgot:  ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]]
});

  forgotmail(){
    window.sessionStorage.setItem("forgottenEmail",`${this.ForgotEmailForm.value.emailForgot}`);
    this.isLoading=true;
    this.userservice.forgotPassword(`this.ForgotEmailForm.value.emailForgot`).subscribe({
  next:(res:any)=>{
    console.log("forgotten email response: ",res.code)
    sessionStorage.setItem("PIN",res.code)
    this.isLoading=false;
    this.toastrService.success("OTP sent to your mail.");
    this.otp=true;
  },
  error:(err:any)=>{
    this.isLoading=false;
    this.toastrService.error("Invalid email.");
    this.otp=false;
  }})
}

// -------------------------------- otp submission -----------------------------------------------------


OTPmailForm= this.fb.group({
  OTPmail:  ['', [Validators.required]]
});


otpmail(){
  this.isLoading=true;
  console.log(this.OTPmailForm.value.OTPmail);
  this.pinCode=sessionStorage.getItem("PIN");
  console.log(this.pinCode);
  if(this.pinCode==this.OTPmailForm.value.OTPmail){
this.toastrService.success('verification is successfull')
    this.dialogRef.close(true);
  }if(this.pinCode!=this.OTPmailForm.value.OTPmail){
    this.toastrService.error('verification is not successfull')
    this.dialogRef.close(false);
  }
}

}
