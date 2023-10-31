import { Component, OnChanges, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.css']
})
export class SidenavBarComponent implements OnInit{
  collapsed: boolean = true;
  openedNavBar: any;
  dash!: boolean;
  navigators: any;
  routerEvents: any;
  login!: boolean;
  reg!: boolean;
route:any;
  constructor( private router: Router){

  }
  ngOnInit(): void {
    this.openedNavBar=true;
    this.dash=false;
    this.routerEvents = this.router.events.subscribe(
      (event:any)=>{
        if(event instanceof NavigationEnd){
          this.navigators=event.url;
          if(event.url=="/login"){
            this.login=true;
            this.reg=false;
            this.dash=false;
          }
          if(this.navigators=='/sche'){
            this.route="Schedule";
            this.dash=true;
            this.login=false;
          }
          if(event.url=="/statusrun"){
            this.route="Status and Run";
            this.dash=true;
          }


          if(this.navigators=="/dash"){
            this.dash=true;
            this.route="Reports";
          }
      }
  })
}
}




