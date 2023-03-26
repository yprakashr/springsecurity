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
password:'',
confirmPassword:'',
phone:'',
gender:''
}



phoneRegex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/im
passwordRegex=/^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,}$/

ngOnInit(): void {
this.form.id=this.data.id;
this.form.fullname=this.data.Fullname;
this.form.username=this.data.Username;
this.form.password=this.data.Password;
this.form.confirmPassword=this.data.Password;
this.form.phone=this.data.Phone;
this.form.gender=this.data.Gender;

}

comparePassword(){
if(this.form.confirmPassword!=this.form.password){
  this.cpassword=true;
}else{
  this.cpassword=false;
}
console.log(this.cpassword);
console.log(this.form.password);
console.log(this.form.confirmPassword);

}


matchpassword:ValidatorFn=(control:AbstractControl):ValidationErrors|null=>{
 
  if(this.form.password&& this.form.confirmPassword&&this.form.password!=this.form.confirmPassword){
    return {passwordmatcherror:true}
  }
  return null;
};




onSubmit(){
 

  this.ref.close(this.form);}

}
















