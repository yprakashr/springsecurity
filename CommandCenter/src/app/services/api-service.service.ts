import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  getExecutions() {
    return this.http.get(
      'https://prductapi.azurewebsites.net/api/Executions?code=Nih0JA9yJc7SGfPNdNouSWtqF-ZLkZuKkeGCv9nlWgBdAzFuPrJdCg=='
    );
  }

  getWorkflows() {
    return this.http.get(
      'https://prductapi.azurewebsites.net/api/Workflows?code=cfiH7m4ANVh9XSsrj_ne9xMAkastNRlYKKxkWGX20OAhAzFuVG_asQ=='
    );
  }

  getschedules() {
    return this.http.get(
      'https://prductapi.azurewebsites.net/api/Schedules?code=-17yHOkyqhuyt3rox5FNsc7UzHY2F9Hkhe1cFfxU7NQiAzFu4-lfYg=='
    );
  }

  getBot() {
    return this.http.get(
      'https://prductapi.azurewebsites.net/api/Bots?code=9eM5I-eXhGzoCO91o3-0LCEeaqIn2JPOxFKsuYnceWF4AzFu4X-OOw=='
    );
  }

  postSchedule(data:any) {
   return this.http.post(
    'https://prductapi.azurewebsites.net/api/Schedules?code=-17yHOkyqhuyt3rox5FNsc7UzHY2F9Hkhe1cFfxU7NQiAzFu4-lfYg==',data
    );
}






}
