import { Injectable, computed, signal } from '@angular/core';
import { Email } from '../models/Email';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailDataService {
  private readonly _emails = signal<Email[]>([]);

  emails = this._emails.asReadonly();

  getEmailById = (id: number) =>
    computed(() => this._emails().find(email => email.id === id));

  constructor(private http: HttpClient) {
    this.loadEmails();
  }

  private loadEmails() {
    this.http.get<Email[]>('/assets/emails.json')
      .pipe(
        map(emails => emails.map(email => ({
          ...email,
          date: new Date(email.date) 
        })))
      )
      .subscribe({
        next: (emails) => this._emails.set(emails),
        error: (err) => console.error('Failed to load emails:', err)
      });
  }
}
