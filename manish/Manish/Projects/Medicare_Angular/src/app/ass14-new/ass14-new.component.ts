import { DatePipe, Time } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { data } from 'jquery';
import { SaveAppointmentService } from '../save-appointment.service';

@Component({
  selector: 'app-ass14-new',
  templateUrl: './ass14-new.component.html',
  styleUrls: ['./ass14-new.component.css'],
})
export class Ass14NewComponent {
  respStatus: any = 0;
  today: Date = new Date();

  // appointment form-group
  AppointmentForm = this.fb.group({
    firstname: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/),
        Validators.minLength(1),
        Validators.maxLength(20),
      ],
    ],
    lastname: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/),
        Validators.minLength(1),
        Validators.maxLength(20),
      ],
    ],
    age: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
    phone: ['', [Validators.required, Validators.min(1000000000)]],
    gender: ['', [Validators.required]],
    date: ['', [Validators.required]],
    time: ['', [Validators.required]],
  });

  constructor(
    private saveApp: SaveAppointmentService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loadScript('assets/js/new.js');

    document.getElementById('firstname')?.setAttribute('maxlength', '20');

    document
      .getElementById('firstname')
      ?.setAttribute('onkeydown', 'return /[a-z]/i.test(event.key)');

    document.getElementById('lastname')?.setAttribute('maxlength', '20');
    document
      .getElementById('lastname')
      ?.setAttribute('onkeydown', 'return /[a-z]/i.test(event.key)');
  }

  // function to save appointment
  saveAppointment(form: FormGroup) {
    this.saveApp
      .saveAppointment(this.AppointmentForm.value)
      .subscribe((response: any) => {
        form.reset();
        this.respStatus = response.status;
      });
  }

  public loadScript(url: any) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
