import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
})
export class PersonalDetailsComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  genderChecked: boolean = true;

  personalDetailsForm: FormGroup = this.fb.group({
    firstname: [
      '',
      [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-Z]*$/),
      ],
    ],
    lastname: [
      '',
      [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-Z]*$/),
      ],
    ],
    age: ['', [Validators.required, Validators.max(100), Validators.min(1)]],
    phone: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^([0-9]){10}$/),
      ],
    ],
    aadhar: ['', [Validators.required, Validators.pattern(/^([0-9]){12}$/)]],
    pan: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/),
      ],
    ],
    gender: ['', [Validators.required]],
  });

  submitForm() {
    sessionStorage.setItem(
      'personal-details',
      JSON.stringify(this.personalDetailsForm.value)
    );
    window.location.replace('address');
  }

  ngOnInit() {
    if (sessionStorage.getItem('personal-details')) {
      this.personalDetailsForm.setValue(
        JSON.parse(sessionStorage.getItem('personal-details') || '{}')
      );
    }

    var phone = document.getElementById('phone');
    var invalidChars = ['-', '+', 'e'];
    phone!.addEventListener('keydown', function (e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    var age = document.getElementById('age');
    var invalidChars = ['-', '+', 'e'];
    age!.addEventListener('keydown', function (e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    var aadhar = document.getElementById('aadhar');
    var invalidChars = ['-', '+', 'e', 'E'];
    aadhar!.addEventListener('keydown', function (e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    document
      .getElementById('phone')
      ?.setAttribute('onkeydown', 'return /[0-9B]/i.test(event.key)');

    document
      .getElementById('firstname')
      ?.setAttribute('onkeydown', 'return /[a-z]/i.test(event.key)');

    document
      .getElementById('lastname')
      ?.setAttribute('onkeydown', 'return /[a-z]/i.test(event.key)');

    document
      .getElementById('age')
      ?.setAttribute('onkeydown', 'return /[0-9B]/i.test(event.key)');

    this.genderCheck();
  }

  genderCheck() {
    console.log(this.personalDetailsForm.get('gender')!.value);
    if (this.personalDetailsForm.value.gender != '') {
      this.genderChecked = false;
    } else {
      this.genderChecked = true;
    }
  }

  capitalize(text: any) {
    text.value = text.value.toUpperCase();
  }
}
