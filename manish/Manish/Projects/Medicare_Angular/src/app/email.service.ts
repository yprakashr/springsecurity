import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(to: any, subject: string, body: string) {
    return this.http.get(
      `http://localhost:8080/backend/mail/${to}/${subject}/${body}`
    );
  }
}
