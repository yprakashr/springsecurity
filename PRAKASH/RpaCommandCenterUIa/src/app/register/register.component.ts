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
  isLoading:any;
  confpassword1: boolean=false;
  RegForm:any;
  message:any;
ngOnInit(){
  this.authService.logout();
}

  constructor(
    private toastrService: ToastrService,
    private _snackBar: MatSnackBar,
    private user_service: UserService,
    private authService:AuthService,
    private router: Router
    // public formBuilder: FormBuilder
    
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
    this.isLoading=true;
    console.log(this.RegForm.value);
    this.user_service.saveUser(this.RegForm.value).subscribe({
      
   next:   (res:any)=>{
        console.log("this is from line 83",res);
      this.isLoading=false;
      if(res.status==200){
        this.RegForm.reset();
       
      Swal.fire("Great! you Registered Successfully.","Check your email for verification.");
      this.router.navigate(['/reg']);
      }},
      
     error: (err:any)=>{
        console.log(`the status is `,err)
        const welcome=err.lastIndexOf("406")
        console.log(welcome)
        if(welcome!=-1){
          this.toastrService.error("verification mail is already sent your account.")
        }
        const welcome1=err.lastIndexOf("409")
        if(welcome1!=-1){
          this.toastrService.error("User is already registered! please login with your credentials.")
        }
        const welcome2=err.lastIndexOf("500")
        if(welcome2!=-1){
          this.toastrService.error("Sorry! server is busy Please register again.")
        }
        this.isLoading=false;
        if (err.error.message != null || err.error.message != undefined) {
          //    this.toastrService.error(err.error.message);
              console.log(err.error.message)
            } else {
           //   this.toastrService.error(DynamicMessagingConstants.APIERRORSOMETHINGWENTWRONG);
          //  console.log(DynamicMessagingConstants.APIERRORSOMETHINGWENTWRONG)
            }
            this.isLoading=false;
           // this.loader.close();
   }});
    
  }
// newgun(){

//   this.user_service.saveUser(this.RegForm.value).subscribe({
    

//       next: (resp: any) => {

     

//       },

//       error: (err: any) => {
//         if (err.error.message != null || err.error.message != undefined) {
//       //    this.toastrService.error(err.error.message);
//           console.log(err.error.message)
//         } else {
//        //   this.toastrService.error(DynamicMessagingConstants.APIERRORSOMETHINGWENTWRONG);
//       //  console.log(DynamicMessagingConstants.APIERRORSOMETHINGWENTWRONG)
//         }
//         this.isLoading=false;
//        // this.loader.close();
//       }

    
//   });
// }

}






