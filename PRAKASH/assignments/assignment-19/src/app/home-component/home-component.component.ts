import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  constructor ( private router: Router,){
    
  }

  NavigatetoPage(){
    this.router.navigate(["/programsdata"]);
  }
}
