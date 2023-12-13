import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaveAppointmentService {
  constructor(private http: HttpClient) {}

  saveAppointment(appointment: any) {
    const url = 'http://localhost:8080/backend/patients';
    return this.http.post<any>(url, appointment);
  }
}
