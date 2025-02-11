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

  constructor(private carritoService: CarritoService) {}

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
        this.carrito = data.map((item: any) => ({
          cart_id: item.carrito_id,  // ID del carrito
          id: item.id, // ID del producto
          nombre: item.nombre, // Nombre del producto
          precio: parseFloat(item.precio), // Precio unitario del producto
          cantidad: item.cantidad, // Cantidad del producto
          imagen: item.imagen || '../../assets/images/productos/default.jpg' // Ruta de la imagen, si no hay imagen, usa una predeterminada
        }));
      },
      (error) => console.error('Error al cargar el carrito', error)
    );
  }
  
  

  // Agregar una unidad y actualizar en el backend
  agregarUnidad(index: number) {
    const producto = this.carrito[index];
    producto.cantidad++;
    this.carritoService.actualizarCantidad(this.usuarioId, producto.id, producto.cantidad).subscribe();
  }

  // Quitar una unidad y actualizar en el backend
  quitarUnidad(index: number) {
    const producto = this.carrito[index];
    if (producto.cantidad > 1) {
      producto.cantidad--;
      this.carritoService.actualizarCantidad(this.usuarioId, producto.id, producto.cantidad).subscribe();
    }
  }

  // Eliminar producto del carrito y actualizar en el backend
  eliminarProducto(i: number) {
    const producto = this.carrito[i];
    console.log('Eliminando producto con id:', producto.id);  // Asegúrate de que este id esté correctamente definido
  
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
