import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  usuarioId!: number;
  carritoId!: number;

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    // Obtener el ID del usuario desde localStorage (suponiendo que el objeto usuario está guardado)
    const usuario = JSON.parse(localStorage.getItem('user') || '{}');
    if (usuario && usuario.id) {
      this.usuarioId = usuario.id;
    } else {
      console.error('No se encontró el usuario en localStorage');
    }
    this.cargarCarrito();
  }

  // Cargar productos del carrito desde el backend
  cargarCarrito() {
    this.carritoService.obtenerCarrito(this.usuarioId).subscribe(
      (data) => {
        console.log("Datos recibidos del carrito:", data); // Verifica la estructura del JSON
        if (data.length > 0 && data[0].carrito_id) {
          this.carritoId = data[0].carrito_id; // Asigna el ID del carrito
        } else {
          console.warn("No se encontró carrito_id en los datos.");
        }
        this.carrito = data.map((item: any) => ({
          cart_id: item.carrito_id,
          id: item.id,
          nombre: item.nombre,
          precio: parseFloat(item.precio),
          cantidad: item.cantidad,
          imagen: item.imagen || '../../assets/images/productos/default.jpg'
        }));
      },
      (error) => console.error('Error al cargar el carrito', error)
    );
  }




  // Agregar una unidad y actualizar en el backend
  agregarUnidad(index: number) {
    const producto = this.carrito[index];
    console.log('Cantidad de producto', producto.cantidad);
    producto.cantidad++;
    this.carritoService.actualizarCantidad(this.usuarioId, producto.id, producto.cantidad).subscribe();
  }

  // Quitar una unidad y actualizar en el backend// Quitar una unidad y actualizar en el backend
  quitarUnidad(index: number) {
    const producto = this.carrito[index];

    // Si la cantidad es mayor a 1, simplemente decrementa y actualiza
    if (producto.cantidad > 1) {
      producto.cantidad--;
      this.carritoService.actualizarCantidad(this.usuarioId, producto.id, producto.cantidad).subscribe(
        () => {
          console.log('Cantidad actualizada a', producto.cantidad);
        },
        (error) => {
          console.error('Error al actualizar la cantidad del producto', error);
        }
      );
    }
    // Si la cantidad es 1, al quitarla la nueva cantidad será 0 y se eliminará el producto
    else if (producto.cantidad === 1) {
      // Llamamos al endpoint con cantidad 0, el cual en el backend elimina el producto
      this.carritoService.actualizarCantidad(this.usuarioId, producto.id, 0).subscribe(
        (response) => {
          console.log("Producto eliminado por tener 0 cantidad", response);
          // Eliminamos el producto del arreglo local para actualizar la vista
          this.carrito.splice(index, 1);
        },
        (error) => {
          console.error("Error al eliminar el producto con cantidad 0", error);
        }
      );
    }
  }

  // Eliminar producto del carrito y actualizar en el backend
  eliminarProducto(i: number) {
    const producto = this.carrito[i];
    console.log('Eliminando producto con id:', producto.id);  // Asegúrate de que este id esté correctamente definido
    console.log('Eliminando el carrito del usuario con id', this.usuarioId);
    console.log('id del carrito', this.carritoId);
    if (this.usuarioId && producto && producto.id) {
      // Si ambos el usuarioId y producto.id están definidos, hacemos la llamada
      this.carritoService.eliminarDelCarrito(this.usuarioId, producto.id).subscribe(
        (response) => {
          console.log('Producto eliminado correctamente', response);
          // Eliminar el producto de la lista en el frontend
          this.carrito.splice(i, 1);
        },
        (error) => {
          console.error('Error al eliminar el producto del carrito', error);
        }
      );
    } else {
      console.error('Datos incompletos para eliminar el producto del carrito');
      console.log('usuarioId:', this.usuarioId);
      console.log('productoId:', producto ? producto.id : 'no disponible');
    }
  }



  // Calcular total del carrito
  getTotal(): number {
    return this.carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  }

  // Realizar pedido (simulación)
  realizarPedido() {
    alert('Pedido realizado con éxito');
  }
}
