import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from '../servicios/categorias-service.service';  // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  categorias: any[] = [];  // Arreglo para almacenar las categorías desde la base de datos

  constructor(private router: Router, private categoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.obtenerCategorias();  // Llamar al método para obtener las categorías
  }

  // Método para obtener las categorías
  obtenerCategorias(): void {
    this.categoriasService.getCategorias().subscribe(
      (data) => {
        this.categorias = data;  // Asegúrate de que la estructura de datos sea correcta
      },
      (error) => {
        console.error('Error al obtener las categorías', error);
      }
    );
  }

  seleccionarCategoria(categoriaId: number): void {
    // Redirige al componente Productos pasando la categoría como parámetro
    this.router.navigate(['../productos', categoriaId]);
  }
}
