import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent {
  constructor(private fb:FormBuilder,private route:Router){}
  errmessage:boolean=false
tech(e:any){
if(e.invalid){
  setInterval(() => {
    this.errmessage=true;
    }, 500);
}else{
  console.log(e.value);
  let consts=JSON.stringify(e.value);
  sessionStorage.setItem("tech",consts)
  this.route.navigate(['/home']);
}}

  regForm5 = this.fb.group({
    job: this.fb.control(null, [Validators.required,Validators.minLength(20)]),
      })
      get job(){return this.regForm5.get('job') as FormControl;
    }
}







