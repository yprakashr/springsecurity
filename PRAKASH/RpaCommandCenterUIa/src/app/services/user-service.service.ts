import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { environment } from 'src/environmentVariables/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userbaseurl: string;
  eventbaseurl: string;

constructor(private http: HttpClient) {
  this.userbaseurl = environment.UsersbaseURL;
  this.eventbaseurl = environment.UsersbaseURL;
}



saveUser(user: any) {
  console.log(user)
  return this.http.post(`${this.userbaseurl}`, user);}
  

fetchApipost(username: any, password: any) {
  let parameters = {"email":username,"password":password};
  let queryParams = new HttpParams({ fromObject: parameters });
  return this.http.get(`${this.userbaseurl}`,{params:queryParams});}


forgotPassword(email:any){
return this.http.get(`${this.userbaseurl}/set/${email}`);}


changePassword(email:any,password:any){
  let parameters = {"email":email,"password":password};
  let queryParams1 = new HttpParams({ fromObject: parameters });
  console.log("this is changingpassword email at user service: ",email,password);
  return this.http.patch(`${this.userbaseurl}/updatePassword`,{"email":email,"password":password})}


verifyingOTP(otp:any){
  console.log(`${this.userbaseurl}/get/${otp}`)
  return this.http.get(`${this.userbaseurl}/get/${otp}`);
  }

  createEvent(eventData: any): Observable<any> {
    return this.http.post(this.eventbaseurl, eventData);
  }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.eventbaseurl);
  }

  updateEvent(eventId: number, eventData: any): Observable<any> {
    return this.http.put(`${this.eventbaseurl}/${eventId}`, eventData);
  }

  deleteEvent(eventId: number): Observable<any> {
    return this.http.delete(`${this.eventbaseurl}/${eventId}`);
  }

  
}
