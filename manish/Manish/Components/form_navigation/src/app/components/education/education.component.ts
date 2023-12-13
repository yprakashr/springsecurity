import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  txt: any;

  isPreviousFilled: boolean = false;

  ngOnInit() {
    if (sessionStorage.getItem('address')) {
      this.isPreviousFilled = true;
    } else {
      this.isPreviousFilled = false;
      alert('Please fill address details to access education form');
      window.location.replace('address');
    }

    var gpa1 = document.getElementById('secondaryGPA');
    var invalidChars = ['-', '+', 'e', 'E'];
    gpa1!.addEventListener('keydown', function (e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    var gpa2 = document.getElementById('highSchoolGPA');
    var invalidChars = ['-', '+', 'e', 'E'];
    gpa2!.addEventListener('keydown', function (e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    var gpa3 = document.getElementById('graduationGPA');
    var invalidChars = ['-', '+', 'e', 'E'];
    gpa3!.addEventListener('keydown', function (e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    document
      .getElementById('secondaryInstitute')
      ?.setAttribute('onkeydown', 'return /[a-z _]/i.test(event.key)');

    document
      .getElementById('highSchoolInstitute')
      ?.setAttribute('onkeydown', 'return /[a-z _]/i.test(event.key)');

    document
      .getElementById('graduationInstitute')
      ?.setAttribute('onkeydown', 'return /[a-z _]/i.test(event.key)');

    if (sessionStorage.getItem('education')) {
      this.educationForm.setValue(
        JSON.parse(sessionStorage.getItem('education') || '{}')
      );
    }
  }

  educationForm: FormGroup = this.fb.group({
    secondaryInstitute: [
      '',
      [Validators.required, Validators.pattern(/^([A-Za-z])([a-zA-Z\s]){0,}$/)],
    ],
    highSchoolInstitute: [
      '',
      [Validators.required, Validators.pattern(/^([A-Za-z])([a-zA-Z\s]){0,}$/)],
    ],
    graduationInstitute: [
      '',
      [Validators.required, Validators.pattern(/^([A-Za-z])([a-zA-Z\s]){0,}$/)],
    ],
    secondaryGPA: [
      '',
      [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
        Validators.pattern(/^([0-9]{1})|([0-9]){1}([.]){1}([0-9]){1}$/),
      ],
    ],
    highSchoolGPA: [
      '',
      [Validators.required, Validators.min(0), Validators.max(10)],
    ],
    graduationGPA: [
      '',
      [Validators.required, Validators.min(0), Validators.max(10)],
    ],
  });

  submitForm() {
    sessionStorage.setItem(
      'education',
      JSON.stringify(this.educationForm.value)
    );
    window.location.replace('career');
  }

  getSelectedText() {
    if (window.getSelection) {
      this.txt = window.getSelection();
    } else if (window.document.getSelection) {
      this.txt = window.document.getSelection();
    } else if (window.document.getSelection()) {
      this.txt = window.document.getSelection();
    }
    alert(this.txt);
  }
}
