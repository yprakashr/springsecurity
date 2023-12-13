import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.css'],
})
export class SidenavBarComponent implements OnInit {
  collapsed: boolean = true;
  openedNavBar: any;
  dash!: boolean;
  navigators: any;
  routerEvents: any;
  login!: boolean;
  reg!: boolean;
  routeHeading: any;
  userName: any;
  dynamicId: any;
  constructor(private router: Router,private route: ActivatedRoute) {}
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateToggleButtonVisibility();}

  private updateToggleButtonVisibility(): void {
    const windowWidth = window.innerWidth;
    if (window.innerWidth<768) {
      this.openedNavBar=false;
    } else {
      this.openedNavBar=true;
    }
  }

  ngOnInit(): void {
    this.updateToggleButtonVisibility();
    this.dash = false;
    this.openedNavBar = true;
    this.routerEvents = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.navigators = event.url;
        if (event.url == '/') {
          this.reg = false;
          this.dash = false;
        }
        if (event.url == '/login') {
          this.reg = false;
          this.dash = false;
        }
        if (this.navigators == '/schedule') {
          this.routeHeading = 'Schedule';
          this.dash = true;
        }
        if (event.url == '/statusrun') {
          this.routeHeading = 'Status and Run';
          this.dash = true;
        }
        if (event.url == '/report') {
          this.dash = true;
          this.routeHeading = 'Reports';
          this.userName = localStorage.getItem('user');
        }
        const url = event.url;
        const parts = url.split('/');
        const workflowPart = parts[1];
        if(workflowPart=='workflow'){
          this.dash=true;
          this.routeHeading = 'Workflow Details';
        }
      }});}
      }


