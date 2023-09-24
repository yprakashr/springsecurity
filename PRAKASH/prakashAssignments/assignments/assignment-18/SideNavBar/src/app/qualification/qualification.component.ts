import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  myDate: any;
  constructor(private fb:FormBuilder,private route:Router){}

  ngOnInit(): void {
    this.getdate();
    console.log(this.myDate)
  }

  errmessage:boolean=false

  getdate() {
    var date: any = new Date();
    var todate: any = date.getDate();
    var month: any = date.getMonth() + 1;

    if (todate < 10) {
      todate = '0' + todate;
    }
    if (month < 10) {
      month = '0' + month;
    }
    var year: any = date.getFullYear();
    this.myDate = year + '-' + month + '-' + todate;
  }

 


  regForm3 = this.fb.group({
    username: this.fb.control(null,[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/)]),
    course: this.fb.control(null, [Validators.required]),
    number: this.fb.control(null, [Validators.required]),
    date: this.fb.control(null, [Validators.required]),
  })
  get course(){return this.regForm3.get('course') as FormControl;}
  get username(){return this.regForm3.get('username') as FormControl;}
  get number(){return this.regForm3.get('number') as FormControl;}
  get date(){return this.regForm3.get('date') as FormControl;}


  public qualifyDetails(e:any){
    if(e.invalid){
      setInterval(() => {
        this.errmessage=true;
        }, 500);
    }else{
      console.log(e.value)
      let constp=JSON.stringify(e.value)
      sessionStorage.setItem("qualify",constp)
      this.route.navigate(['/skill'])
    }

      }








}
