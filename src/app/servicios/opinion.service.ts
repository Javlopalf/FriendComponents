import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {
  private apiUrl = 'http://localhost/FriendComponents/controller/OpinionController.php'; 
  
  constructor(private http: HttpClient) {}

  /**
   * Obtener opiniones por producto_id
   * @param productoId ID del producto
   * @returns Observable con las opiniones del producto
   */
  getOpinionesPorProducto(productoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?producto_id=${productoId}`);
  }

  /**
   * Añadir una nueva opinión
   * @param opinion Datos de la opinión a agregar
   * @returns Observable con la respuesta del servidor
   */
  addOpinion(opinion: any): Observable<any> {
    return this.http.post(this.apiUrl, opinion);
  }
}
