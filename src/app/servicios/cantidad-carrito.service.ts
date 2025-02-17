import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CantidadCarritoService {
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  private apiUrl = 'http://localhost/FriendComponents/controller/CarritoController.php';

  constructor(private http: HttpClient) {}

  updateCartCount(count: number) {
    this.cartCount.next(count);
  }

  obtenerCantidadCarrito(userId: number): Observable<number> {
    return this.http
      .get<{ cantidad_total: number }>(`${this.apiUrl}?action=GET_CANTIDAD_TOTAL&usuario_id=${userId}`)
      .pipe(map(response => response.cantidad_total));
  }
}
