import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernames:any='';
  passwords:any='';
  returnUrl: any;
  model = new User();
  message!: boolean;
  // @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();   
  
  ngOnInit() {
    this.authService.logout();
  }

  constructor(
    private fb: FormBuilder,
    private fetch: UserService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authService:AuthService
  ) {}


  togglePassword() {
    var passwordField = <HTMLInputElement>document.getElementById('password');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }
  LoginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });


  LoginAction() {
    this.usernames=this.LoginForm.value.username;
    this.passwords=this.LoginForm.value.password;
    this.fetch.fetchApipost(this.usernames,this.passwords).subscribe(
(res:any)=>{
      this.model=<any>res.data;
      console.log("this is response"+res.status)
      if(res.status==200){
        localStorage.setItem('isLoggedIn',"true");
        localStorage.setItem('token', this.usernames);
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
        window.location.replace('/dash');

  }},
  (err:any)=>{
    console.log(err.status)
    // if(err.status==500){
      this.LoginForm.reset();
    const avDivs = document.getElementsByClassName('mt');
    this.message=true;
    setTimeout(() => {
      avDivs[0].remove();
  }, 3000);
  this._snackBar.open("invalid credentials.","Sorry! ", {
    duration: 3000,
    panelClass: 'my-custom-snackbar',
     verticalPosition: 'top'
  });
}
// }
  
);

};}



