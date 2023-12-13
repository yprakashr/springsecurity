import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Router } from '@angular/router';
import { AppLoaderService } from '../apploader/apploader.service';
import { LogOutService } from '../log-out.service';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private authservice: AuthenticationServiceService,
    private loader: AppLoaderService,
    private router: Router, private logoutService: LogOutService) { }
  logOut() {
    // this.loader.open("Please wait .... ");
    //    this.router.navigate(["/"]);
    //    setTimeout(() => {      
    //       this.loader.close();

    //     }, 1000);
    // this.authservice.logout();
    this.openConfirmationDialog()

  }
  public openConfirmationDialog() {
    this.logoutService.confirm('Please confirm..', 'Do you want to Logout this ?')
      .then((confirmed) => {
        this.loader.open("Please wait .... ");
        this.router.navigate(["/"]);
        setTimeout(() => {
          this.loader.close();

        }, 1000);
        this.authservice.logout();
      }
      )
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

}
