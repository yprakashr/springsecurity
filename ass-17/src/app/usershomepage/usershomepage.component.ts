
import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';

@Component({
  selector: 'app-usershomepage',
  templateUrl: './usershomepage.component.html',
  animations: [
    fade
  ]
})
export class UsershomepageComponent  implements OnInit{
  ngOnInit(): void {
    this.isOpen=true;
  }
  isOpen:boolean=true;

}
