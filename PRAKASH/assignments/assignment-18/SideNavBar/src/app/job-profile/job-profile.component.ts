import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css']
})
export class JobProfileComponent {
  errmessage:boolean=false
  constructor(private fb:FormBuilder,private route:Router){}

  regForm2 = this.fb.group({
    job: this.fb.control(null, [Validators.required,Validators.minLength(20)]),
      })
  get job(){return this.regForm2.get('job') as FormControl;}



   login(p:any){
    if(p.invalid){
      setInterval(() => {
        this.errmessage=true;
        }, 500);
    }else{
       let constr=JSON.stringify(p.value);
      console.log(p.value);
      sessionStorage.setItem("job",constr);
      this.route.navigate(['/qualify']);
    }

}
}
