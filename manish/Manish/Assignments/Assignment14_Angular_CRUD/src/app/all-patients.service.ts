import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AllPatientsService {
  constructor(private http: HttpClient) {}

  getPatients() {
    return this.http.get(`http://localhost:8080/backend/patients`);
  }

  getPatientByID(id: any) {
    return this.http.get(`http://localhost:8080/backend/patients/${id}`);
  }

  deletePatient(id: any) {
    return this.http.delete(`http://localhost:8080/backend/patients/${id}`);
  }

  updatePatient(id: any, patient: any) {
    return this.http.put<any>(
      `http://localhost:8080/backend/patients/${id}`,
      patient
    );
  }
}
