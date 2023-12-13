import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  name=JSON.parse(sessionStorage.getItem('personal') || '{}').name;
  username=JSON.parse(sessionStorage.getItem('personal') || '{}').username;
  mobile=JSON.parse(sessionStorage.getItem('personal') || '{}').mobile;
  email=JSON.parse(sessionStorage.getItem('personal') || '{}').email;
  job=JSON.parse(sessionStorage.getItem('job') || '{}').job;
  instructor=JSON.parse(sessionStorage.getItem('qualify') || '{}').username;
  coursed=JSON.parse(sessionStorage.getItem('qualify') || '{}').course;
  coursen=JSON.parse(sessionStorage.getItem('qualify') || '{}').number;
  joiningdate=JSON.parse(sessionStorage.getItem('qualify') || '{}').date;
  selected=sessionStorage.getItem('selected');
  tech=JSON.parse(sessionStorage.getItem('tech') || '{}').job;


  notificationMessage:any;
constructor(private sub:SubjectService){}

  ngOnInit(): void {
this.sub.notificaitonSubject.subscribe((d:any)=>this.notificationMessage=d);
}



}


