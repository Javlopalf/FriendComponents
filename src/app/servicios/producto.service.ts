import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost/FriendComponents/controller/ProductoController.php'; 

  constructor(private http: HttpClient) {}

  // Obtener productos por categoría
  obtenerProductoPorId(id: number): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`;  // Ajusta la URL si tu API usa otra estructura
    return this.http.get<any>(url);  // Hacemos una solicitud GET a la API
  }
}