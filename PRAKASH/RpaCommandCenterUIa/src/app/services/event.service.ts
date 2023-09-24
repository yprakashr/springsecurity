import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  
  getEventList(){
    const baseUrl = 'http://localhost:8080/event';
    return this.http.get<any>(baseUrl);
  }

  saveEvent(event:any){
    const baseUrl = 'http://localhost:8080/event';
    return this.http.post<any>(baseUrl,event);
  }

  deleteEvent(eventId:any){
    const baseUrl = 'http://localhost:8080/event/'+eventId;
    return this.http.delete<any>(baseUrl,eventId)
  }

  updateEvent(eventId:any){
    const baseUrl = 'http://localhost:8080/event/'+eventId;
    return this.http.put<any>(baseUrl,this.updateEvent)
  }

}
