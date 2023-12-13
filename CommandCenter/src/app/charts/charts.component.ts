import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
declare var google:any;


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
constructor(
  private apiservice: ApiServiceService){}

  ngOnInit(): void {
    this.getScheduleData()
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(this.drawChart);
  }

getScheduleData(){
this.apiservice.getExecutions().subscribe({
next:(res: any)=>{
  for (const item of res) {
  }},
error:()=>{

}})}

  drawChart(){
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Complete', 55],
      ['Pending',      10],
      ['Running', 35],
    ]);

    var options = {
      pieHole: 0.4,
      title: 'My Workflow Status',
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }

}



