import { Component } from '@angular/core';
import { ConfirmationDialogService } from '../confirmation-dialog.service';

@Component({
  selector: 'app-ass14-navbar',
  templateUrl: './ass14-navbar.component.html',
  styleUrls: ['./ass14-navbar.component.css'],
})
export class Ass14NavbarComponent {
  collapsed = true;
  session: any = sessionStorage.getItem('session');

  constructor(private confirmationDialogService: ConfirmationDialogService) {}

  logOut() {
    this.confirmationDialogService
      .confirm('Are you sure..', 'You want to logout   ?')
      .then((confirm) => {
        sessionStorage.clear();
        window.location.replace('login');
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }
}
