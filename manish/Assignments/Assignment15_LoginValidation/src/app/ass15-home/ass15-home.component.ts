import { Component } from '@angular/core';

@Component({
  selector: 'app-ass15-home',
  templateUrl: './ass15-home.component.html',
  styleUrls: ['./ass15-home.component.css'],
})
export class Ass15HomeComponent {
  ngOnInit() {
    sessionStorage.setItem('currentURL', '');
  }
}
