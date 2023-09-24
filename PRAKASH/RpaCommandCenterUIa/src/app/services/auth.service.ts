import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  status!: string | null;
  userdetails!: string | null;

  constructor() { }
  logout() :void {
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
    // sessionStorage.removeItem('username');
    // sessionStorage.removeItem('password');
    }


    @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();
    loginUser() { 
this.status=sessionStorage.getItem("Auth");
this.userdetails=sessionStorage.getItem("userdetails");
      if (this.status==="200") { 
        this.fireIsLoggedIn.emit(this.userdetails); // you can pass here whatever you want 
      } 
    } 
    getEmitter() { 
      return this.fireIsLoggedIn; 
    } 

}
