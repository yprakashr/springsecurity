import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from '@angular/router';

import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
IntervalSubscription:Subscription | any;
  
  ngOnDestroy(): void {
  
  }
  ngOnInit(): void {
  }
show(ip:any){
  ip.control.patchValue({
    'username':"prakash",
    'password':"aldjfasi"
  });

}

  title = 'rxjs-practices';
}













