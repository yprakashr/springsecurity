import { DatePipe } from '@angular/common';
import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent  {

  frequencyOptions = [
    { value: 'm', label: 'Minute (m)' },
    { value: 'h', label: 'Hour (h)' },
    { value: 'w', label: 'Week (w)' },
    { value: 'd', label: 'Day (d)' },
    { value: 'M', label: 'Month (M)' },
    { value: 'y', label: 'Year (y)' }
  ];
  
 
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
  currentDate: any;
  minDate: string;
  selectedDate: string;
  selectedTime: string;
  isPastDate: boolean = false;
  isPastTime:boolean=false;

    
    constructor(private dialog:MatDialog,private datePipe: DatePipe){
      this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      this.minDate = this.currentDate;
    }

    onSelectDate() {
      this.isPastDate = this.selectedDate < this.currentDate;
    }

    openDialog() {
      this.dialog.open(ScheduleComponent, {
        height:'70%',
      });
    }

    schedule() {
    console.log('Scheduled!', this.startDate,this.startOnTime, this.workflowOption,this.botsOption,this.startOnRunAt,this.frequencyOptions,this.neverOrOnDate, this.expireDateTime, this.expireDate);
  }
}
