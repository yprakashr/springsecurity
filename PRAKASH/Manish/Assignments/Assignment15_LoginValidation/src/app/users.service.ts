import {
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');

  baseURL = 'http://192.168.0.123:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    }),
  };

  // Login request
  login(username: string, password: string): Observable<Object[]> {
    let parameters = { username: username, password: password };
    let queryParams = new HttpParams({ fromObject: parameters });

    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(username + ':' + password),
      }),
      params: queryParams,
    };

    return this.http
      .get<Object[]>(`${this.baseURL}/users/login`, httpOptions1)
  }

  // Get all users
  getUsers() {
    return this.http.get<Object[]>(`${this.baseURL}/users`, this.httpOptions);
  }

  // Get users by ID
  getUserByID(id: any) {
    return this.http.get<Object[]>(
      `${this.baseURL}/users/${id}`,
      this.httpOptions
    );
  }

  // Get users by username
  getUserByUsername(username: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('acc_recovery:accRec@0000'),
      }),
    };
    return this.http.get(
      `${this.baseURL}/users/uname/${username}`,
      httpOptions
    );
  }

  // Get users by phone
  getUserByPhone(phone: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('acc_recovery:accRec@0000'),
      }),
    };
    return this.http.get(`${this.baseURL}/users/phone/${phone}`, httpOptions);
  }

  // Get user by email
  getUserByEmail(email: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('acc_recovery:accRec@0000'),
      }),
    };
    return this.http.get<Object[]>(
      `${this.baseURL}/users/email/${email}`,
      httpOptions
    );
  }

  // save user
  saveUser(user: any) {
    return this.http.post<Object[]>(`${this.baseURL}/users/save`, user);
  }

  // Delete user
  deleteUser(id: any) {
    return this.http.delete<Object[]>(
      `${this.baseURL}/users/delete/${id}`,
      this.httpOptions
    );
  }

  // Update user
  updateUser(id: any, user: any) {
    return this.http.put<any>(
      `${this.baseURL}/users/update/${id}`,
      user,
      this.httpOptions
    );
  }

  // Account recover
  Account_Recover(id: any, user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('acc_recovery:accRec@0000'),
      }),
    };
    return this.http.put<any>(
      `${this.baseURL}/users/recover/${id}`,
      user,
      httpOptions
    );
  }

  // send email
  sendEmail(to: string, subject: string, body: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('acc_recovery:accRec@0000'),
      }),
    };
    return this.http.get<Object[]>(
      `${this.baseURL}/users/mail/${to}/${subject}/${body}`,
      httpOptions
    );
  }

  // send otp
  sendOTP(to: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('acc_recovery:accRec@0000'),
      }),
    };
    return this.http.get<Object[]>(
      `${this.baseURL}/users/sendotp/${to}`,
      httpOptions
    );
  }

  // send email attatchment
  sendEmailAttachment(to: string, subject: string, body: string, file: File) {
    const data: FormData = new FormData();
    data.append('file', file);

    return this.http.post<Object[]>(
      `${this.baseURL}/users/send/${to}/${subject}/${body}`,
      data
    );
  }
}
