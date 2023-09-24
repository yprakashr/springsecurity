import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

public notificaitonSubject = new Subject<Object>()

  constructor() { }

sendNotification(data:any){
  this.notificaitonSubject.next(data);
}


}
