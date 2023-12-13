import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SideNavBar';
  id:any;
  showMe:boolean=true;
  constructor(private router: Router,private Location:Location){}

ngOnInit() {
  // console.log(document.getElementById("job"))
  if(this.Location.path()=="/personal"||this.Location.path()==''){
    this.id=1;
  }
  if(this.Location.path()=="/job"){
this.id=2;
  }
  if(this.Location.path()=="/qualify"){
    this.id=3;
  }
  if(this.Location.path()=="/skill"){
    this.id=4;
  }
  if(this.Location.path()=="/tech"){
    this.id=5;
  }
}
}
