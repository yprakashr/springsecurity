import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup; //Form Group
  user: any;
  constructor(private router: Router,
  private fb: FormBuilder){
 
  this.loginform = this.fb.group({
    mail: this.fb.control('', []),
    password: this.fb.control('', [])
  });
}
  ngOnInit(): void { 
    localStorage.setItem('sidenav','false');
  }

LoginSubmit(){
  localStorage.setItem('user',this.loginform.get('mail')?.value)
 this.router.navigate(['/report']);
}
}
