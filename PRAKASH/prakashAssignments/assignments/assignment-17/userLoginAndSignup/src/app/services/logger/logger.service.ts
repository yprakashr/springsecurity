import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  messages: string[] = [];

  log(message: string) {
    debugger;
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
