import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent {

  userSubmitted: boolean = false;
  user: any = {};

  constructor(private fb: FormBuilder, private router: Router) { }

  RegisterForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^([a-zA-Z])([a-zA-Z\s]){0,20}$/)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}/)]],
    phonenumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
    age: ['', [Validators.required,Validators.max(100),Validators.min(1)]],
    address: ['', [Validators.required, Validators.maxLength(30)]],
    gender: ['', [Validators.required]]
  });

  onSubmit() {
    localStorage.setItem('PersonalInfo', JSON.stringify(this.RegisterForm.value));
    this.router.navigate(["/", "qualification"]);
  }
}