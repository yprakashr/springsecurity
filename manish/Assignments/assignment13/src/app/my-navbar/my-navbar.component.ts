import { Component } from '@angular/core';
import { fadeAnimation } from '../animations';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.css'],
  animations: [fadeAnimation],
})
export class MyNavbarComponent {
  collapsed = true;
}
