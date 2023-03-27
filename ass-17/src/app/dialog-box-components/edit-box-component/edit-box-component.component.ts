import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersdatatableComponent } from 'src/app/usersdatatable/usersdatatable.component';

@Component({
  selector: 'app-edit-box-component',
  templateUrl: './edit-box-component.component.html',
  styleUrls: ['./edit-box-component.component.css']
})
export class EditBoxComponentComponent implements OnInit{

constructor(@Inject(MAT_DIALOG_DATA)public data:any ,private fb:FormBuilder,private ref:MatDialogRef<UsersdatatableComponent>){}

cpassword:boolean=false;

form={
id:'',
fullname:'',
username:'',
email:'',
phone:'',
gender:''
}



phoneRegex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/im;
emailRegex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

ngOnInit(): void {
this.form.id=this.data.id;
this.form.fullname=this.data.Fullname;
this.form.username=this.data.Username;
this.form.email=this.data.email;
this.form.phone=this.data.Phone;
this.form.gender=this.data.gender;
}

onSubmit(){
  this.ref.close(this.form);
}
}
















