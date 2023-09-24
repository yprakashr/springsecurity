import { Component } from '@angular/core';
import { ConfirmationDialogService } from '../confirmation-dialog.service';

@Component({
  selector: 'app-ass15-navbar',
  templateUrl: './ass15-navbar.component.html',
  styleUrls: ['./ass15-navbar.component.css'],
})
export class Ass15NavbarComponent {
  collapsed: boolean = true;
  collapsed_1 = false;
  session: any = sessionStorage.getItem('session');

  constructor(private confirmationDialogService: ConfirmationDialogService) {
  }

  logOut() {
    this.confirmationDialogService
      .confirm('Are you sure..', 'You want to logout ?', this.session)
      .then(() => {
        sessionStorage.clear();
        localStorage.clear();

        window.location.replace('login');
      })
      .catch(() => {
        console.log('user cancelled dialog');
      });
  }
}
