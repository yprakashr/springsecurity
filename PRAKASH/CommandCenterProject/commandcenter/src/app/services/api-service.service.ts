import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://prductapi.azurewebsites.net/api/Workflows?code=cfiH7m4ANVh9XSsrj_ne9xMAkastNRlYKKxkWGX20OAhAzFuVG_asQ==');
  }
}
