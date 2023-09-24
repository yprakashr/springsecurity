import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { matchpassword } from '../matchpassword.validator';
import { ToastrService } from 'ngx-toastr';
import { SuccesspopupComponent } from '../dailogeboxes/successpopup/successpopup.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  confpassword1: boolean=false;
  RegForm:any;
  message:any;
ngOnInit(){
  this.authService.logout();

}
ngOnChange(){
  this.message=true;
}
  constructor(
    private toastrService: ToastrService,
    private _snackBar: MatSnackBar,
    private user_service: UserService,
    private authService:AuthService,

    public formBuilder: FormBuilder
    
  ) {
    this.RegForm= new FormGroup({
      firstname:new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/),]),
      lastname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/),]),
      email:new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),]),
      password:new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[a-z]){1,}(?=.*[A-Z]){2,}(?=.*[0-9]){1,}(?=.*[!@#$%^&*()--__+.]){1,}.{8,}$/),]),
      cpassword:new FormControl('',[Validators.required])
    },{
      validators:matchpassword
    });}

  
  togglePassword() {
    var passwordField = <HTMLInputElement>document.getElementById('password');
    if (passwordField!.type === 'password') {
      setTimeout(function(){
        passwordField!.type = 'text';
      },3000);
      passwordField!.type = 'text';
    } else {
      passwordField!.type = 'password';
    }}


  togglecPassword(){
    var cpasswordField = <HTMLInputElement>document.getElementById('Confirm-Password');
    if (cpasswordField!.type === 'password') {
      cpasswordField!.type = 'text';
    } else {
      cpasswordField!.type = 'password';
    }}


  confpassword(){
    console.log(this.RegForm.hasError('passwordMismatch'))
    if((this.RegForm.get('password'))?.value!==(this.RegForm.get('cpassword'))?.value){
      this.confpassword1=true;
      var submit = <HTMLInputElement>document.getElementById('subm');
      submit.disabled=false;
          }}


  RegAction(){
    console.log(this.RegForm.value);
    this.user_service.saveUser(this.RegForm.value).subscribe((res:any)=>{console.log(res.status)
      if(res.status==200){
        this.RegForm.reset();
      //   const avDivs = document.getElementsByClassName('success');
      //   this.message=true;
      //   setTimeout(() => {
      //     avDivs[0].remove();
      // }, 3000);
      Swal.fire("Great! you Registered Successfully.","Success")
      this._snackBar.open("Great! invalid credentials.","Thank you ", {
        duration: 3000
      });
      }

    }

    
     );
    
  }


}






