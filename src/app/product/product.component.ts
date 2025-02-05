import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../servicios/producto.service';
import { OpinionService } from '../servicios/opinion.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  producto: any; // Producto actual seleccionado
  opiniones: any[] = []; // Lista de opiniones del producto
  comentarioForm!: FormGroup; // Formulario reactivo para comentarios
  productoId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productoService: ProductoService,
    private opinionService: OpinionService
  ) {}

  ngOnInit(): void {
    // Obtener el ID del producto desde la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productoId = Number(id);
      this.cargarProducto(this.productoId);
      this.obtenerOpiniones(this.productoId);
    }

    // Inicializar el formulario de comentarios
    this.comentarioForm = this.fb.group({
      persona: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
      nota: [1, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  // Obtener el producto desde la base de datos
  cargarProducto(id: number): void {
    this.productoService.getProductoPorId(id).subscribe(
      (producto) => {
        this.producto = producto;
      },
      (error) => {
        console.error('Error al obtener el producto:', error);
      }
    );
  }

  // Obtener opiniones por producto_id
  obtenerOpiniones(productoId: number): void {
    this.opinionService.getOpinionesPorProducto(productoId).subscribe(
      (opiniones) => {
        this.opiniones = opiniones;
      },
      (error) => {
        console.error('Error al obtener opiniones:', error);
      }
    );
  }

  // Agregar una nueva opinión
  agregarComentario(): void {
    if (this.comentarioForm.valid) {
      const nuevaOpinion = {
        producto_id: this.productoId,
        ...this.comentarioForm.value
      };

      this.opinionService.addOpinion(nuevaOpinion).subscribe(
        () => {
          this.obtenerOpiniones(this.productoId); // Recargar opiniones tras añadir
          this.comentarioForm.reset();
        },
        (error) => {
          console.error('Error al agregar la opinión:', error);
        }
      );
    }
  }

  // Agregar un producto al carrito
  agregarAlCarrito(): void {
    alert('¡Producto añadido al carrito!');
  }
}
