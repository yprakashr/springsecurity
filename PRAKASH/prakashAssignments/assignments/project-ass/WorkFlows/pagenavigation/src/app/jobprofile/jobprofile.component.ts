import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobprofile',
  templateUrl: './jobprofile.component.html',
  styleUrls: ['./jobprofile.component.css']
})
export class JobprofileComponent {

  constructor(private fb: FormBuilder, private router: Router) { }
  

  JobForm: FormGroup = this.fb.group({

  })
  onSubmit() {
    localStorage.setItem('jobprofile', JSON.stringify(this.JobForm.value));
    this.router.navigate(["/", "address"]);
}
}
