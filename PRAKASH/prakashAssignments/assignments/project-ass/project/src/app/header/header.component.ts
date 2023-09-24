import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { LoginComponent } from '../login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  user = new User();
  fullname: any;
  navigators: any;
  isMenuOpened:boolean=false;
  constructor( private fb: FormBuilder,
  private fetch: UserService,
  private _snackBar: MatSnackBar,
  private router: Router,
  private authService:AuthService){
  
    this.fullname=`${JSON.parse(sessionStorage.getItem('userdetails') || '{}').firstname} ${JSON.parse(sessionStorage.getItem('userdetails') || '{}').lastname}`
    }
    clickedOutside(): void {
      this.isMenuOpened = false;
    }
  ngOnInit() {
  if(JSON.parse(localStorage.getItem('isLoggedIn') || '{}')==true){
    this.navigators=true;
  }else{
    this.navigators=false;
  }
 
  }
//   onCategorySelected(categoryId: number) {
//     const params = this.shopService.getShopParams();
//     params.categoryId = categoryId;
//     this.shopService.setShopParams(params);
// }

  Logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
    this.navigators=false;
  }}




