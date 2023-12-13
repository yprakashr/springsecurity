import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  constructor(private router: Router) {}

  isPreviousFilled: boolean = false;

  ngOnInit() {
    if (sessionStorage.getItem('career')) {
      this.isPreviousFilled = true;
    } else {
      this.isPreviousFilled = false;
      alert('Please fill career details to access confirmation page');
      window.location.replace('/career');
    }

  }

  personal_details: any = JSON.parse(
    (sessionStorage.getItem('personal-details')! as any) || '{}'
  );
  address: any = JSON.parse(
    (sessionStorage.getItem('address')! as any) || '{}'
  );
  education: any = JSON.parse(
    (sessionStorage.getItem('education')! as any) || '{}'
  );
  career: any = JSON.parse((sessionStorage.getItem('career')! as any) || '{}');

  finalDetails = [
    {
      personalDetails: this.personal_details,
      address: this.address,
      education: this.education,
      career: this.career,
    },
  ];

  keys1 = Object.keys(this.finalDetails[0].personalDetails);
  keys2 = Object.keys(this.finalDetails[0].address);
  keys3 = Object.keys(this.finalDetails[0].education);
  keys4 = Object.keys(this.finalDetails[0].career);
}
