import { Component, HostListener } from '@angular/core';
import { OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatCalendar, MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  standalone: true,
  imports: [MatFormFieldModule,MatButtonModule, MatInputModule,MatMenuModule, MatDatepickerModule, MatNativeDateModule,MatIconModule],
 
})
export class AddressComponent {
    
  @ViewChild(MatCalendar) calendar: MatCalendar<Date>;
  selectedDate = new Date();
  calendarVisible = true;

  constructor() {}

  onPreviousDay() {
    this._addDays(-1);
  }

  onNextDay() {
    this._addDays(1);
  }

  onSelectedChange(selectedDate:any) {
    this.selectedDate = selectedDate;
  }

  private _addDays(days: number) {
    this.selectedDate = new Date(
      this.selectedDate.getFullYear(),
      this.selectedDate.getMonth(),
      this.selectedDate.getDate() + days
    );

    this.calendar._goToDateInView(this.selectedDate, 'month');
  }
}
