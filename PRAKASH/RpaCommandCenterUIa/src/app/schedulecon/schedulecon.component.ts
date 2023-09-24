import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ScheduleComponent } from '../schedule/schedule.component';
import { MatDialog } from '@angular/material/dialog';
import { Workflow } from './Workflow';
import { DeleteeventComponent } from '../deleteevent/deleteevent.component';
import { UpdateeventComponent } from '../updateevent/updateevent.component';


export const WORKFLOW_DATA: EventData[] = [
  {
    id: 1,
    workflowname: 'Workflow 1',
    botname: 'Bot A',
    date: '2023-08-01',
    runFrequency: 'Daily',
    time: '10:00 AM'
  },
  {
    id: 2,
    workflowname: 'Workflow 2',
    botname: 'Bot B',
    date: '2023-08-02',
    runFrequency: 'Weekly',
    time: '3:00 PM'
  },
  {
    id: 3,
    workflowname: 'Workflow 3',
    botname: 'Bot C',
    date: '2023-08-02',
    runFrequency: 'Weekly',
    time: '4:00 PM'
  },
  {
    id: 4,
    workflowname: 'Workflow 4',
    botname: 'Bot D',
    date: '2023-08-02',
    runFrequency: 'Weekly',
    time: '6:00 PM'
  },
  {
    id: 5,
    workflowname: 'Workflow 5',
    botname: 'Bot E',
    date: '2023-08-02',
    runFrequency: 'Weekly',
    time: '3:00 AM'
  },
];



@Component({
  selector: 'app-schedulecon',
  templateUrl: './schedulecon.component.html',
  styleUrls: ['./schedulecon.component.css']
})
export class ScheduleconComponent implements AfterViewInit {


  displayedColumns: string[] = ['id', 'workflowname', 'botname', 'date', 'runFrequency', 'time', 'actions'];
  dataSource = new MatTableDataSource<Workflow>(WORKFLOW_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(public dialog: MatDialog) {
  }
   


  editWorkflow(data: Workflow): void {
    this.dialog.open(UpdateeventComponent, {
      width: '400px', // Adjust the width as needed
      data: data
    });
  }


  deleteWorkflow(workflow: Workflow):void{
    this.dialog.open(DeleteeventComponent, {
      width: '300px'
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  dialogOpen(){
    this.dialog.open(ScheduleComponent,{
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

  // runFrequency:string
  // startDate: string | null = null;
  // workflowOption:string = 'option1';
  // botsOption:string = 'option1';
  // startOnRunAt: string = 'true';
  // neverOrOnDate: string = 'never';
  // expireDateTime: string | null = null;
  // expireDate: string | null = null;
  // startOnTime: string | null = null;
  // startOnDate: string | null = null;
  // expireOption: string = 'never';
 
 

  // schedule() {
  //   // Implement your scheduling logic here
  //   console.log('Scheduled!', this.startDate,this.startOnTime, this.workflowOption,this.botsOption,this.startOnRunAt, this.neverOrOnDate, this.expireDateTime, this.expireDate);
  // }



export interface EventData {
  id: number;
  workflowname: string;
  botname: string;
  date: string;
  runFrequency: string;
  time: string;
}
