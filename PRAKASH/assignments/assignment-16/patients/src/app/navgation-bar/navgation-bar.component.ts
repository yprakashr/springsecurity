import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchapiService } from '../services/fetchapi.service';

@Component({
  selector: 'app-navgation-bar',
  templateUrl: './navgation-bar.component.html',
  styles: [
  ]
})
export class NavgationBarComponent {
  collapsed=true;
  display:boolean=true;
  constructor(private fetch:FetchapiService,private fb:FormBuilder,private router:Router){}

  toExisting(){
    this.router.navigate(['/app']);
  }
  toPatients(){
    this.router.navigate(['/details']);
  }
  toHome(){
    this.router.navigate(['/app']);
  }
}









