import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-apploader',
  templateUrl: './apploader.component.html',
  styleUrls: ['./apploader.component.css']
})
export class AppLoaderComponent implements OnInit {
  title:any;
  message:any;
  progressColor: ThemePalette = 'accent';
timerPercent: number = 0; 
progressLabel: number = 100;
  constructor(public dialogRef: MatDialogRef<AppLoaderComponent>) {}

  ngOnInit() {
  }

}
