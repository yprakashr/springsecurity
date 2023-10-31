import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';



@Component({
  selector: 'app-scheduler',
  // template: '<ejs-schedule></ejs-schedule>',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit{


  ngOnInit(): void {
    this.loadScript('../../assets/js/script.js');
  }

  public loadScript(url: any) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('body')[0].appendChild(node);
  }
  }



