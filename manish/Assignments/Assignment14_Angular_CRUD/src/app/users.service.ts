import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`http://localhost:8080/backend/users`);
  }

  getUserById(id: any) {
    return this.http.get(`http://localhost:8080/backend/users/${id}`);
  }

  saveUser(user: any) {
    return this.http.post<any>('http://localhost:8080/backend/users', user);
  }

  userLogin(username: any, password: any) {
    return this.http.get<any>(
      `http://localhost:8080/backend/users/${username}/${password}`
    );
  }

  userUpdate(user: any, id: any) {
    return this.http.put<any>(
      `http://localhost:8080/backend/users/${id}`,
      user
    );
  }

  getUserbyUname(username: any) {
    return this.http.get<any>(`http://localhost:8080/backend/user/${username}`);
  }

  getUserbyEmail(email: any) {
    return this.http.get<any>(
      `http://localhost:8080/backend/userByMail/${email}`
    );
  }
}
