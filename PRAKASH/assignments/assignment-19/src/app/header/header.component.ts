import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { AppLoaderService } from '../apploader/apploader.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { LogOutService } from '../log-out.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit {
  
  // changes in

  ngOnInit(): void {
   


   
  }
  constructor(private authservice: AuthenticationServiceService,
    private loader: AppLoaderService,
    private router: Router, private logoutService: LogOutService) { }


    ngAfterViewInit() {
      if(localStorage.getItem('currentUser')!=undefined && localStorage.getItem('currentUser')!=null){
        console.log(localStorage.getItem('currentUser'));
         }
    }

  logOut() {
  
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



