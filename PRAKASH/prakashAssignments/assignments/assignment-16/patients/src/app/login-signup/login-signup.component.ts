import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FetchapiService } from '../services/fetchapi.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {


  constructor(private fb: FormBuilder) {}

  public regForm = this.fb.group({
    usename:['',[Validators.required]],
     phone:['',[Validators.max(3)]]
  });

  sub(value:any){
console.log(value)
  }


}
