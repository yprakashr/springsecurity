import { Component, OnInit } from '@angular/core';
declare var google:any;


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
  activities: any = [
    { activityName:
    'Office Work', activityHour: 8 },
    { activityName:
    'Sleeping', activityHour: 7},
    { activityName:
    'Watching Movie', activityHour: 2 },]

  ngOnInit(): void {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(this.drawChart);
    // this.buildCharts(this.activities);
  }

//   buildCharts(activities:any){
// var renderChart=(chart:any)=>{
//   // var data = google.visualization.arrayToDataTable([
//   //   { activityName:
//   //   'Office Work', activityHour: 8 },
//   //   { activityName:
//   //   'Sleeping', activityHour: 7},
//   //   { activityName:
//   //   'Watching Movie', activityHour: 2 }]);

// var donutChartItems=[];
// donutChartItems.push('Task','Hours per Day');
// activities.forEach((element:any) => {
//   donutChartItems.push([element.activityName,element.activityHour])
// });
// var data = google.visualization.arrayToDataTable(donutChartItems);
//   var options = {
//     pieHole: .4,
//     width:600,
//     height:400,
//     title:"My Activity"

//   };

//   chart.draw(data, options);

// }
// var dounutChart =()=> new google.visualization.PieChart(document.getElementById('donutchart'));
// var callback=()=>renderChart(dounutChart);
// google.charts.setOnLoadCallback(callback);


//   }

  drawChart(){
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Success', 55],
      ['fail',      10],
      ['Process', 35],
    ]);

    var options = {
      pieHole: 0.1,
      title: 'My Workflow Status',
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }

}



