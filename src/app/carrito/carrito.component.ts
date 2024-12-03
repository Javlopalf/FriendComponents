import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  carrito: { nombre: string, precio: number, cantidad: number, imagen:string }[] = [
    { nombre: 'Producto 1', precio: 10, cantidad: 2, imagen: '../../assets/images/productos/mcr11.jpg' },
    { nombre: 'Producto 2', precio: 20, cantidad: 1, imagen: '../../assets/images/productos/mcr22.jpg' }
  ];

  // Función para añadir una unidad de un producto
  agregarUnidad(index: number) {
    this.carrito[index].cantidad++;
  }

  // Función para quitar una unidad de un producto
  quitarUnidad(index: number) {
    if (this.carrito[index].cantidad > 0) {
      this.carrito[index].cantidad--;
    }
  }

  // Función para eliminar un producto del carrito
  eliminarProducto(index: number) {
    this.carrito.splice(index, 1);
  }

  // Función para realizar el pedido (puede ser para redirigir o mostrar un mensaje)
  realizarPedido() {
    alert('Pedido realizado con éxito');
    // Aquí puedes agregar la lógica para redirigir o enviar los datos del pedido.
  }

  // Obtener el total de la compra
  getTotal() {
    return this.carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  }
}
