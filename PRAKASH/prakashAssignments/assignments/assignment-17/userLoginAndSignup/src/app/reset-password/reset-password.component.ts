import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators, } from '@angular/forms';
import { ApiFetchingService } from '../services/api-fetching.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  matchpassword: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    let password = control.get('password');
    let confirmpassword = control.get('confirmpassword');
    if (
      password &&
      confirmpassword &&
      password?.value != confirmpassword?.value
    ) {
      return { passwordmatcherror: true };
    }
    return null;
  };

  constructor(private fb: FormBuilder,private fetch:ApiFetchingService) {}

  public reset = this.fb.group(
    {
      password: this.fb.control('', [
        Validators.required,
        Validators.pattern(
          /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,}$/
        ),
      ]),
      confirmpassword: this.fb.control('', [Validators.required]),
    },
    {
      validators: this.matchpassword,
    }
  );

  submit(reset: any) {
    this.fetch.getApiByEmail(reset.value.password).subscribe((res:any)=>{

    })
  }
}




































