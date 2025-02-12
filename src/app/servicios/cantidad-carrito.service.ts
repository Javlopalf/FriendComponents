// cart-count.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CantidadCarritoService {
  // Inicia el contador en 0
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  // Método para actualizar el contador
  updateCartCount(count: number): void {
    this.cartCountSubject.next(count);
  }
}
