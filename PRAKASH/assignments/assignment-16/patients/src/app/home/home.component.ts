import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private http: HttpClient, private router: Router) {}
  display: boolean = true;
  onclick() {
    this.display = false;
  }
  toNew() {
    this.router.navigate(['/register']);
  }
  toExisting() {
    this.router.navigate(['/check']);
  }
  toPatients() {
    this.router.navigate(['/details']);
  }
}
