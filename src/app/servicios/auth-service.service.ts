import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/FriendComponents/controller/UsuarioController.php'; // URL de tu API

  constructor(private http: HttpClient) {}

  // Método para hacer el login
  login(email: string, password: string): Observable<any> {
    const params = new HttpParams().set('correo', email).set('contrasenia', password);
    return this.http.get<any>(this.apiUrl, { params });
  }
}
