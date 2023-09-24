import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}

  isPreviousFilled: boolean = false;

  ngOnInit() {
    if (sessionStorage.getItem('personal-details')) {
      this.isPreviousFilled = true;
    } else {
      this.isPreviousFilled = false;
      alert('Please fill personal details to access address form');
      window.location.replace('personal-details');
    }

    var pin = document.getElementById('pin');
    var invalidChars = ['-', '+', 'e', 'E'];
    pin!.addEventListener('keydown', function (e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    document
    .getElementById('pin')
    ?.setAttribute('onkeydown', 'return /[0-9B]/i.test(event.key)');

    document
      .getElementById('area')
      ?.setAttribute('onkeydown', 'return /[a-z _]/i.test(event.key)');

    document
      .getElementById('city')
      ?.setAttribute('onkeydown', 'return /[a-z _]/i.test(event.key)');

    document
      .getElementById('district')
      ?.setAttribute('onkeydown', 'return /[a-z _]/i.test(event.key)');

    document
      .getElementById('state')
      ?.setAttribute('onkeydown', 'return /[a-z _]/i.test(event.key)');

    if (sessionStorage.getItem('address')) {
      this.addressForm.setValue(
        JSON.parse(sessionStorage.getItem('address') || '{}')
      );
    }
  }

  addressForm: FormGroup = this.fb.group({
    area: [
      '',
      [Validators.required, Validators.pattern(/^([A-Za-z])([a-zA-Z\s]){0,}$/)],
    ],
    city: [
      '',
      [Validators.required, Validators.pattern(/^([A-Za-z])([a-zA-Z\s]){0,}$/)],
    ],
    district: [
      '',
      [Validators.required, Validators.pattern(/^([A-Za-z])([a-zA-Z\s]){0,}$/)],
    ],
    state: [
      '',
      [Validators.required, Validators.pattern(/^([A-Za-z])([a-zA-Z\s]){0,}$/)],
    ],
    houseno: [
      '',
      [Validators.required, Validators.maxLength(50), Validators.minLength(1)],
    ],
    pin: [
      '',
      [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(2),
        Validators.pattern(/^([1-9])([0-9]){5}$/),
      ],
    ],
  });

  submitForm() {
    sessionStorage.setItem('address', JSON.stringify(this.addressForm.value));
    window.location.replace('education');
  }
}
