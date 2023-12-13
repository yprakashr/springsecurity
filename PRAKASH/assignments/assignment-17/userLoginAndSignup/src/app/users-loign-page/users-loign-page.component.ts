import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, FormBuilder, FormControl, FormGroup, PatternValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiFetchingService } from '../services/api-fetching.service';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { passwordStrength } from 'check-password-strength';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service'
import {getCookie} from 'typescript-cookie';


@Component({
  selector: 'app-users-loign-page',
  templateUrl: './users-loign-page.component.html',
})
export class UsersLoignPageComponent implements OnInit{
  Password: string = '';
  strength: number = 0;
  strengthText: string = '';
  strengthClass: string = '';
  confirmpassword:any;
  LoginErrorMessage:boolean=false;
  message: string='';
  returnUrl: any;
  passwordIsValid = false;
  msg: any;
  msgColor: any;
  usernames:string='';
  passwords:string='';
// public  regForm:any;

  checkPasswordStrength() {
    // calculate password strength
    let strength = 0;
    if (this.Password.length >= 8) strength++;
    if (/[A-Z]/.test(this.Password)) strength++;
    if (/[a-z]/.test(this.Password)) strength++;
    if (/\d/.test(this.Password)) strength++;
    if (/\W/.test(this.Password)) strength++;

    // set strength properties
    this.strength = strength;
    switch (strength) {
      case 0: this.strengthText = ''; break;
      case 1: this.strengthText = 'Weak'; break;
      case 2: this.strengthText = 'Fair'; break;
      case 3: this.strengthText = 'Good'; break;
      case 4: this.strengthText = 'Strong'; break;
      case 5: this.strengthText = 'Very strong'; break;
    }
    this.strengthClass = 'strength-' + strength;
  }


  constructor(private router:Router, private fetch:ApiFetchingService,private fb:FormBuilder,private authService : AuthService){
    // console.log("this is login component lazy loading");
  }


  // model: Login = { username: "admnin", password: "admin@123" };

  ngOnInit() {
    this.returnUrl = '/data';
    this.authService.logout();
  }

forgotPassword(){
  this.router.navigate(["/"]);
}

  matchpassword:ValidatorFn=(control:AbstractControl):ValidationErrors|null=>{
    let password=control.get('password');
    let confirmpassword=control.get('confirmpassword');
    if(password&& confirmpassword&&password?.value!=confirmpassword?.value){
      return {passwordmatcherror:true}
    }
    return null;
  };



passwordValid(event:any) {
  this.passwordIsValid = event;
}


public regForm:any = this.fb.group({
  fullname: this.fb.control(null, [Validators.required,Validators.maxLength(20)]),
  username: this.fb.control(null,[Validators.required,Validators.maxLength(15)]),
  password: this.fb.control(null, [Validators.required,Validators.pattern(/^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,}$/)]),
  gender: this.fb.control(null, [Validators.required]),
  phone: this.fb.control(null, [Validators.required,Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/im)]),
  confirmpassword: this.fb.control(null,[Validators.required]),
  email: this.fb.control(null,[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
  role: this.fb.control('user',[])
},
{
  validators:this.matchpassword,
});


get fullname(){return this.regForm.get('fullname') as FormControl;}
get username(){return this.regForm.get('username') as FormControl;}
get password(){return this.regForm.get('password') as FormControl;}
get gender(){return this.regForm.get('gender') as FormControl;}
get phone(){return this.regForm.get('phone') as FormControl;}
get email(){return this.regForm.get('email') as FormControl;}



public login=this.fb.group({
  username:[null,[Validators.required,Validators.maxLength(15)]],
  password:[null,[Validators.required]]
},);
get uname(){return this.login.get('username') as FormControl;}
get pswd(){return this.login.get('password') as FormControl;}
get f():any{ return this.login.controls; }




onSubmit(data:any):any{
 
  this.fetch.postApi(data.value).subscribe(() => {
    this.regForm.reset();
    swal.fire('Good job!', 'Now you can login!', 'success');
  });
}


loginDetails(data:any){
  this.usernames=data.value.username;
  this.passwords=data.value.password;
  sessionStorage.setItem('username',`${this.usernames}`);
  sessionStorage.setItem('password',`${this.passwords}`);
  this.fetch.fetchApipost(data.value.username,data.value.password).subscribe((res:any)=>{
    let xsrf:any=getCookie('XSRF-TOKEN');
    window.sessionStorage.setItem("XSRF-TOKEN",xsrf);
    if(res.status==200){
      window.location.replace('data');
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', this.f.username.value);
}},
(err:any)=>{
  this.message = "Please check your username and password";
});}
}








