import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  ThemePalette  } from '@angular/material/core';
import { json } from 'express';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit{
  name = 'Angular';
   obj:any=[];
   errorMessage:boolean=false;
  //  checked:any=[];
constructor(private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {

  }
  all  = [
    {id:1,name:'Java',checked: false},
    {id:2,name:'Python',checked: false},
    {id:3,name:'Angular',checked: false},
    {id:4,name:'React',checked: false},
  ];
selected:any=[];

  regForm4 = this.fb.group({
    check: this.fb.control(null, [Validators.required]),

  })


   add() {
     var t = this.all
      .filter(opt => opt.checked)
      .map(opt => opt);
    this.selected = t;
    if(this.selected.length==0){
      this.errorMessage=true
      this.router.navigate(['/skill']);
      }else{
        for (let num of this.selected) {
          this.obj.push(num.name);
        }
        console.log(this.selected.length)

            sessionStorage.setItem('selected',this.obj);
            this.router.navigate(['/tech']);
      }
   this.obj;
// console.log(this.obj);


  }



}






