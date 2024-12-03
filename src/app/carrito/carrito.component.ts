// src/app/carrito/carrito.component.ts
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito/carrito.service';  // Asegúrate de importar el servicio

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carrito = this.carritoService.obtenerCarrito();  // Obtener los productos del carrito
  }

  getTotal(): number {
    return this.carritoService.getTotal();  // Obtener el total del carrito
  }

  eliminarProducto(index: number): void {
    this.carritoService.eliminarProducto(index);  // Eliminar producto del carrito
  }

  agregarUnidad(index: number): void {
    this.carritoService.agregarUnidad(index);  // Aumentar cantidad del producto
  }

  quitarUnidad(index: number): void {
    this.carritoService.quitarUnidad(index);  // Reducir cantidad del producto
  }

  realizarPedido(): void {
    alert('Pedido realizado');
  }
}
