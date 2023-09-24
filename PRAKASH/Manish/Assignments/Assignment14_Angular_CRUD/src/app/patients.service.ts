import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor(private http: HttpClient) {}

  getPatients_fn_ln_ph(fname: any, lname: any, phone: any) {
    return this.http.get(
      `http://localhost:8080/backend/patients_fn_ln_ph/${fname}/${lname}/${phone}`
    );
  }
  getPatients_fn(fname: any) {
    return this.http.get(`http://localhost:8080/backend/patients_fn/${fname}`);
  }
  getPatients_ln(lname: any) {
    return this.http.get(`http://localhost:8080/backend/patients_ln/${lname}`);
  }
  getPatients_ph(phone: any) {
    return this.http.get(`http://localhost:8080/backend/patients_ph/${phone}`);
  }
  getPatients_fn_ln(fname: any, lname: any) {
    return this.http.get(
      `http://localhost:8080/backend/patients_fn_ln/${fname}/${lname}`
    );
  }
  getPatients_fn_ph(fname: any, phone: any) {
    return this.http.get(
      `http://localhost:8080/backend/patients_fn_ph/${fname}/${phone}`
    );
  }
  getPatients_ln_ph(fname: any, phone: any) {
    return this.http.get(
      `http://localhost:8080/backend/patients_ln_ph/${fname}/${phone}`
    );
  }
}
