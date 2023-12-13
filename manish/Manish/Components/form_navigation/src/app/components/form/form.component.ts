import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  btn1: boolean = false;

  personalDetails = sessionStorage.getItem('personal-details');
  personalDetailsExists: boolean=false;
  addressDetails = sessionStorage.getItem('address');
  addressDetailsExists: boolean=false;
  educationDetails = sessionStorage.getItem('education');
  educationDetailsExists: boolean=false;
  careerDetails = sessionStorage.getItem('career');
  careerDetailsExists: boolean=false;

  toggleBtn1() {
    setTimeout(() => {
      this.btn1 = !this.btn1;
    }, 100);
  }

  ngOnInit() {
    if (this.personalDetails) {
      this.personalDetailsExists = true;
    }
    if (this.addressDetails) {
      this.addressDetailsExists = true;
    }
    if (this.educationDetails) {
      this.educationDetailsExists = true;
    }
    if (this.careerDetails) {
      this.careerDetailsExists = true;
    }
  }
}
