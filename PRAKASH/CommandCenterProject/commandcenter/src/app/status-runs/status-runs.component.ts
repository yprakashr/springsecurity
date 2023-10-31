import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Workflow } from './Workflow';
import { ApiServiceService } from '../services/api-service.service';
import { HttpClient } from '@angular/common/http';



// export interface PeriodicElement {
//   id:number;
//   workflowName: string;
//   botName: string;
//   createdDate: string;
//   lastUpdatedDate: string;
//   description:string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     id: 1,
//     workflowName: 'Workflow 1',
//     botName: 'Bot A',
//     createdDate: '2023-08-01',
//     lastUpdatedDate: 'Daily',
//     description: '10:00 AM'
//   },
//   {
//     id: 2,
//     workflowName: 'Workflow 2',
//     botName: 'Bot B',
//     createdDate: '2023-08-02',
//     lastUpdatedDate: 'Weekly',
//     description: '3:00 PM'
//   },
//   {
//     id: 3,
//     workflowName: 'Workflow 3',
//     botName: 'Bot C',
//     createdDate: '2023-08-02',
//     lastUpdatedDate: 'Weekly',
//     description: '4:00 PM'
//   },
//   {
//     id: 4,
//     workflowName: 'Workflow 4',
//     botName: 'Bot D',
//     createdDate: '2023-08-02',
//     lastUpdatedDate: 'Weekly',
//     description: '6:00 PM'
//   },
//   {
//     id: 5,
//     workflowName: 'Workflow 5',
//     botName: 'Bot E',
//     createdDate: '2023-08-02',
//     lastUpdatedDate: 'Weekly',
//     description: '3:00 AM'
//   },
// ];



@Component({
  selector: 'app-status-runs',
  templateUrl: './status-runs.component.html',
  styleUrls: ['./status-runs.component.css']
})
export class StatusRunsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'workflowName','botName','createdDate', 'lastUpdatedDate', 'description'];
  dataSource!: MatTableDataSource<any>;

constructor(private apiservice: ApiServiceService){}
  ngOnInit(): void {
    this.getProgramsData();
  }

  getProgramsData(){
      this.apiservice.getUsers().subscribe({
        next: (res: any) => {
          this.dataSource = new MatTableDataSource(res);
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }


}
