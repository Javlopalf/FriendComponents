import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost/FriendComponents/controller/ProductoController.php'; 
  
  constructor(private http: HttpClient) {}

  getProductosPorCategoria(nombreCategoria: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?nombreCategoria=${nombreCategoria}`);
  }

}
