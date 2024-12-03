import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  
})
export class CarritoService {
  private carrito: any[] = [];

  constructor() {}

  // Agregar producto al carrito
  agregarAlCarrito(producto: any): void {
    const productoEnCarrito = this.carrito.find(item => item.nombre === producto.nombre);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  // Obtener todos los productos del carrito
  obtenerCarrito(): any[] {
    return this.carrito;
  }

  // Obtener el total del carrito
  getTotal(): number {
    return this.carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  }

  // Eliminar un producto del carrito
  eliminarProducto(index: number): void {
    this.carrito.splice(index, 1);
  }

  // Agregar una unidad más de un producto
  agregarUnidad(index: number): void {
    this.carrito[index].cantidad++;
  }

  // Quitar una unidad de un producto
  quitarUnidad(index: number): void {
    if (this.carrito[index].cantidad > 1) {
      this.carrito[index].cantidad--;
    }
  }
}
