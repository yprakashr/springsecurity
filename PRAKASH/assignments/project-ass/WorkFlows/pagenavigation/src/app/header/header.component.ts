import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { NavigationEnd } from '@angular/router';
// import { UserService } from '../services/user-service.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { NavigationEnd, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { User } from '../models/user.model';
// import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // user = new User();
  fullname: any;
  navigators: any;
  routerEvents: any;
  login: any;
  reg: any;
  dash: any;
  constructor( private fb: FormBuilder,
  // private fetch: UserService,
  // private _snackBar: MatSnackBar,
  // private router: Router,
  // private authService:AuthService,
 ){
    this.fullname=`${JSON.parse(sessionStorage.getItem('userdetails') || '{}').firstname} ${JSON.parse(sessionStorage.getItem('userdetails') || '{}').lastname}`
  }

  ngOnInit() {
  if(JSON.parse(localStorage.getItem('isLoggedIn') || '{}')==true){
    this.navigators=true;
  }else{
    this.navigators=false;
  }
  

  this.routerEvents = this.router.events.subscribe(
    (event:any)=>{
      if(event instanceof NavigationEnd){
        console.log(this.fullname);
        this.navigators=event.url;
        if(event.url==="/login"){
          this.login=true;
          this.reg=false;
          this.dash=false;
        }

        if(this.navigators=='/reg'){
          this.reg=true;
          this.dash=false;
          this.login=false;
        }

        if(this.navigators=="/dash"){
          this.dash=true;
          this.login=false;
          this.reg=false;
        }
      }
    }
  )  
 
  }


  Logout(){
    // this.authService.logout();
    this.router.navigate(['/login']);
    this.navigators=false;
  }



}
