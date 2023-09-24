import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) { }

url="http://localhost:8080/user";

saveUser(user: any) {
  console.log(user)
  return this.http.post(`${this.url}`, user);
}

fetchApipost(username: any, password: any) {
  let parameters = {"email":username,"password":password};
  let queryParams = new HttpParams({ fromObject: parameters });
  return this.http.get(`${this.url}`,{params:queryParams});
}


}
