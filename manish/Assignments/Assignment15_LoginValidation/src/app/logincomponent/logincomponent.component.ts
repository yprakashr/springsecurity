import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css'],
})
export class LogincomponentComponent {
  constructor(private router: Router) {}
  ngOnInit() {
    const sessionValid = sessionStorage.getItem('session');
    console.log(this.router);
    if (sessionValid !== null) {
      this.router.navigate(['/users']);
    }
  }
}
