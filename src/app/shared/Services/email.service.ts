import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private existingEmails = [
    'Batman@gmail.com',
    'Superman@gmail.com',
    'Joker@gmail.com',
    'Luthor@gmail.com',
  ];

  constructor() {}

  CheckEmail(email: string): Observable<any> {
    return of(this.existingEmails.some((x) => x === email));
  }
}
