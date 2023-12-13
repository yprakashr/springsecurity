import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-reoccurance',
  templateUrl: './custom-reoccurance.component.html',
  styleUrls: ['./custom-reoccurance.component.css'],
})
export class CustomReoccuranceComponent implements OnInit,OnChanges {
  isWeekUnitSelected!: boolean;
  constructor(
    public dialogRef: MatDialogRef<CustomReoccuranceComponent>
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
   console.log('adsfafd')
  }

  ngOnInit(): void {
    if (this.repeatUnit == 'week') {
      this.isWeekUnitSelected = true;
    }
    this.toggleButton(this.weekdays[new Date().getDay()]);
  }

  updateWeekUnitStatus() {
    if (this.repeatUnit == 'week') {
      this.isWeekUnitSelected = true;
    }else{
      this.isWeekUnitSelected = false;
    }
  }
 

  weekdays: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  selectedDays: Set<string> = new Set();
  repeatInterval: number = 1;
  repeatUnit: string = 'week';

  toggleButton(day: string) {
    if (this.selectedDays.has(day) && this.selectedDays.size === 1) {
      return;
    }
    if (this.selectedDays.has(day)) {
      this.selectedDays.delete(day);
    } else {
      this.selectedDays.add(day);
    }
  }

  isDaySelected(day: string): boolean {
    return this.selectedDays.has(day);
  }

  generateMessage(): string {
    if (this.selectedDays.size === 7) {
      return `Event occurs everyday.`;
    } else {
      const selectedDaysArray = Array.from(this.selectedDays);
      const daysOfWeek = selectedDaysArray.map((day) => day);
      const repeatUnitText =
        this.repeatUnit.charAt(0).toUpperCase() + this.repeatUnit.slice(1);
      return `Event occurs every ${
        this.repeatInterval
      } ${repeatUnitText} on ${daysOfWeek.join(', ')}.`;
    }
  }

  logInputsToConsole() {
    if(this.repeatUnit == 'week'){
      this.dialogRef.close([ Array.from(this.selectedDays),this.repeatInterval,this.repeatUnit]);
    }else{
      this.dialogRef.close([this.repeatInterval,this.repeatUnit]);
    }
  }

  resetFields() {
    this.selectedDays.clear();
    this.repeatInterval = 0;
    this.repeatUnit = 'day';
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
