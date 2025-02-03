import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/FriendComponents/controller/UsuarioController.php'; // URL de tu API

  constructor(private http: HttpClient, private router: Router) {}

  // Método para hacer el login
  login(email: string, password: string): Observable<any> {
    const params = new HttpParams().set('correo', email).set('contrasenia', password);
    return this.http.get<any>(this.apiUrl, { params }).pipe(
      // Si el login es exitoso, guarda el usuario en localStorage
      tap((response) => {
        if (response.mensaje === 'Login exitoso') {
          // Guarda el usuario en localStorage (puedes guardar todo el objeto del usuario o solo un token)
          localStorage.setItem('user', JSON.stringify(response.usuario)); // Suponiendo que `response.usuario` contiene los datos del usuario
        }
      })
    );
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
