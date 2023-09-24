import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { matchpassword } from '../matchpassword.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  otp:any;
  changepasswordcomponent:any;
  usernames:any='';
  passwords:any='';
  returnUrl: any;
  model = new User();
  message!: boolean;
  dialogRef: any;
  isLoading:any; 
  usermail: string | null;
 
  ngOnInit() {
    this.authService.logout();
    this.changepasswordcomponent=false;}

  constructor(
    private toastrService: ToastrService,
    private fb: FormBuilder,
    private http:HttpClient,
    private fetch: UserService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authService:AuthService,
    public dialog: MatDialog
  ) {}


  togglePassword() {
    var passwordField = <HTMLInputElement>document.getElementById('password');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }}



  LoginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });



  LoginAction() {
    this.isLoading=true;
    this.usernames=this.LoginForm.value.username;
    this.passwords=this.LoginForm.value.password;
    this.fetch.fetchApipost(this.usernames,this.passwords).subscribe({
next:(res:any)=>{
  this.isLoading=false;
      this.model=<any>res.data;
      console.log("this is response"+res.status)
      if(res.status==200){
        localStorage.setItem('isLoggedIn',"true");
        localStorage.setItem('token', this.usernames);
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
        window.location.replace('/dash');
        this.toastrService.success("login is successfull!");
  }},
 error: (err:any)=>{
  this.LoginForm.reset();
    this.isLoading=false;
    console.log(err)
    const welcome=err.lastIndexOf("400")
    console.log(welcome)
    if(welcome!==-1){
      this.toastrService.error("Password you entered is wrong.")
    }
    const welcome1=err.lastIndexOf("401")
    if(welcome1!==-1){
      this.toastrService.error("Invalid credientials.")
    }
    const welcome2=err.lastIndexOf("400")
    if(welcome2!=-1){
      this.toastrService.error("Invalid credientials.")
    }
    this.toastrService.error("Invalid credientials.")
  }});}       


// ---------------------------------------changing password ------------------------------------------------------------


  forgotPassword(){
    const dialogRef = this.dialog.open(ForgotPasswordComponent,{
    width:'500px',
    height:'auto',
    disableClose: true
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      this.changepasswordcomponent=result;
    });}


  PasswordChange1 = this.fb.group({
    confirmpassword: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z]){1,}(?=.*[A-Z]){2,}(?=.*[0-9]){1,}(?=.*[!@#$%^&*()--__+.]){1,}.{8,}$/)]],
    cfpassword: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z]){1,}(?=.*[A-Z]){2,}(?=.*[0-9]){1,}(?=.*[!@#$%^&*()--__+.]){1,}.{8,}$/)]],
  },{
    validators:matchpassword
  });


  PasswordChange(){
   this.usermail= window.sessionStorage.getItem('forgottenEmail');
   console.log("this is session stored value of forgotten email: ",this.usermail)
    this.fetch.changePassword("yprakashr@gmail.com",this.PasswordChange1.value.confirmpassword).subscribe({
     
      next:(res)=>{
        console.log(res)
        window.sessionStorage.removeItem('forgottenEmail');
        this.toastrService.success("Password updated successfully.");
        this.changepasswordcomponent=false;
      },
      error:(err)=>{
        window.sessionStorage.removeItem('forgottenEmail');
        this.toastrService.error("Password is not updated successfully. Please try again!");
        this.changepasswordcomponent=false;
      }
    });}






}



