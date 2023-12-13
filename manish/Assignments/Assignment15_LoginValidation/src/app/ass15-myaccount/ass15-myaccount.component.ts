import { Component } from '@angular/core';
import { UsersService } from '../users.service';

export interface User {
  id: number;
  fullname: string;
  username: string;
  email: string;
  gender: string;
  phonenumber: number;
  role: string;
}

@Component({
  selector: 'app-ass15-myaccount',
  templateUrl: './ass15-myaccount.component.html',
  styleUrls: ['./ass15-myaccount.component.css'],
})
export class Ass15MyaccountComponent {
  session: any = sessionStorage.getItem('session');
  user: User = {
    id: 0,
    fullname: '',
    username: '',
    email: '',
    gender: '',
    phonenumber: 0,
    role: '',
  };

  constructor(private user_service: UsersService) {}

  ngOnInit() {
    sessionStorage.setItem('currentURL', 'myaccount');
    if (this.session != null) {
      this.user_service
        .getUserByUsername(this.session)
        .subscribe((res: any) => {
          this.user = res.data[0];
        });
    }
  }
}
