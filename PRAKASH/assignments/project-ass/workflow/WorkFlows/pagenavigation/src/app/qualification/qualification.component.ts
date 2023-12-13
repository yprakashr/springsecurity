import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent {

  constructor(private fb: FormBuilder, private router: Router) { }

                                                                // (/^([0-9]){0,2}([.])([0-9]){2}$/)
  QualForm: FormGroup = this.fb.group({
    ssccollegename: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s.]*$/)]],
    sscpercentage: ['', [Validators.required, Validators.pattern(/^([0-9]{0,2})|([0-9]){0,2}([.])([0-9]){2} $/), Validators.min(35), Validators.max(100)]],
    hsccollegename: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s.]*$/)]],
    hscpercentage: ['', [Validators.required, Validators.pattern(/^([0-9]){0,2}([.])([0-9]){2}$/), Validators.min(35), Validators.max(100)]],
    ugpgcollegename: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s.]*$/)]],
    ugpgpercentage: ['', [Validators.required, Validators.pattern(/^([0-9]){0,2}([.])([0-9]){2}$/), Validators.min(35), Validators.max(100)]],
  })



  onSubmit() {
    localStorage.setItem('Qualification', JSON.stringify(this.QualForm.value));
    this.router.navigate(["/", "jobprofile"]);
  }
}
