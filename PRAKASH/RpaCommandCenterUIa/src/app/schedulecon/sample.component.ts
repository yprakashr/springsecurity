import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

   
  // selectedDay: string = '';
  // selectChangeHandler (event: any) {
  //   this.selectedDay = event.target.value;
  // }

  // @Input() options: string[] = [];
  // selectedValue: string | null = null;
  // isDropdownOpen = false;

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }

  // selectOption(option: string) {
  //   this.selectedValue = option;
  //   this.isDropdownOpen = false;
  // }

  

  runFrequency:string

  startDate: string | null = null;
  workflowOption:string = 'option1';
  botsOption:string = 'option1';
  startOnRunAt: string = 'true';
  neverOrOnDate: string = 'never';
  expireDateTime: string | null = null;
  expireDate: string | null = null;
  startOnTime: string | null = null;
  startOnDate: string | null = null;
  expireOption: string = 'never';
 
 

  schedule() {
    // Implement your scheduling logic here
    console.log('Scheduled!', this.startDate,this.startOnTime, this.workflowOption,this.botsOption,this.startOnRunAt, this.neverOrOnDate, this.expireDateTime, this.expireDate);
  }

}
