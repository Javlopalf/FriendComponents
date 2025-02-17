// email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/send-email'; // URL de tu backend

  constructor(private http: HttpClient) { }

  sendEmail(email: string, subject: string, body: string): Observable<any> {
    const data = { email, subject, body };
    return this.http.post<any>(this.apiUrl, data);
  }
}