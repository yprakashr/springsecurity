import { Component, ElementRef, HostListener, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges{
  user = new User();
  fullname: any;
  navigators: any;
  routerEvents: any;
  login: boolean;
  reg: boolean;
  dash: boolean;
  email: string;
  btn: HTMLElement;
  @ViewChild('nav') toggleButtonRef: ElementRef;
  toggleButtonhidden: boolean;
  openedNavBar: boolean;

  constructor( 
  private router: Router,
  private authService:AuthService,
  private renderer: Renderer2
 ){
    this.fullname=`${JSON.parse(sessionStorage.getItem('userdetails') || '{}').firstname} ${JSON.parse(sessionStorage.getItem('userdetails') || '{}').lastname}`
    this.email=`${JSON.parse(sessionStorage.getItem('userdetails') || '{}').email}`
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.updateToggleButtonVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateToggleButtonVisibility();}


  private updateToggleButtonVisibility(): void {
    const windowWidth = window.innerWidth;
    // this.isToggleButtonVisible = windowWidth < 768; 
    if (window.innerWidth<768) {
      this.toggleButtonhidden=false;
      this.openedNavBar=true;
    } else {
      this.toggleButtonhidden=true;
      this.openedNavBar=true;
      // this.renderer.setAttribute(this.toggleButtonRef.nativeElement, 'opened', 'true');
    }}


  ngOnInit() {
    this.openedNavBar=true;
      this.dash=false;
      this.updateToggleButtonVisibility()
      console.log(window.innerWidth)
      this.routerEvents = this.router.events.subscribe(
    (event:any)=>{
      if(event instanceof NavigationEnd){
        this.navigators=event.url;
        if(event.url=="/login"){
          this.login=true;
          this.reg=false;
          this.dash=false;
        }
        if(this.navigators=='/reg'){
          this.reg=true;
          this.dash=false;
          this.login=false;
        }
        if(event.url=="/forgot"){
          this.login=true;
          this.reg=false;
          this.dash=false;
        }
        if(event.url.lastIndexOf('/verify')!=-1){
          this.login=false;
          this.reg=true;
          this.dash=false;
        }
        if(this.navigators=="/schedule"){
          this.dash=true;
          this.login=false;
          this.reg=false;
        }
        if(this.navigators=="/dash"){
          this.dash=true;
          this.login=false;
          this.reg=false;
        }
      }
    }
  )}


  Logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
    this.navigators=false;
  }}




