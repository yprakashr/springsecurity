import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SubjectService } from '../services/subject.service';



@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent{
  personal: any;
  res: any;

  constructor(private fb:FormBuilder,private route:Router,private sub:SubjectService){}

  err:String='';
  errmessage:boolean=false;

   regForm = this.fb.group({
    name: this.fb.control('', [Validators.required,Validators.pattern(/^[a-zA-Z ]*$/)]),
    username: this.fb.control('',[Validators.required,Validators.pattern(/([a-zA-Z]+\s?\b){2,}/)]),
    mobile: this.fb.control('', [Validators.required,Validators.minLength(10)]),
    email: this.fb.control('', [Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),

  })

get name(){return this.regForm.get('name') as FormControl;}
get username(){return this.regForm.get('username') as FormControl;}
get mobile(){return this.regForm.get('mobile') as FormControl;}
get email(){return this.regForm.get('email') as FormControl;}



loginDetails(e:any){
if(e.invalid){

  setInterval(() => {
    this.errmessage=true;
    }, 500);


}else{
  console.log(e.value);
  console.warn(e.invalid)
  this.sub.sendNotification(e.value);

    this.personal=JSON.stringify(e.value) ;
    sessionStorage.setItem("personal",this.personal);
  this.route.navigate(['/job'])
}


  }


  // onsubmit(regForm:any){
  //   if(regForm){
  //     this.err="Please validate all error fields"
  //   }
  // }

}




















