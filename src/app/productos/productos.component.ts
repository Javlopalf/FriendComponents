// src/app/productos/productos.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from '../servicios/categorias-service.service';  // Asegúrate de que la ruta es correcta
import { ProductosService } from '../servicios/productos.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  categorias: any[] = [];
  productos: any[] = [];
  categoriaSeleccionada: string = '';

  constructor(
    private meta: Meta, 
    private title: Title,
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private categoriasService: CategoriasService
  ) {}

  ngOnInit(): void {
    //Meta y título
    this.title.setTitle('Productos');
    this.meta.updateTag({ name: 'description', content: 'Menú de productos' });
    this.meta.updateTag({ name: 'keywords', content: 'Selección de productos' });


    // Obtener categorías desde el servicio
    this.categoriasService.getCategorias().subscribe(categorias => {
      this.categorias = categorias;

      // Obtener la categoría seleccionada desde la URL
      const categoria = this.route.snapshot.paramMap.get('categoria');
      this.categoriaSeleccionada = categoria ? categoria : categorias[0]?.nombre;

      // Cargar los productos de la categoría seleccionada
      if (this.categoriaSeleccionada) {
        this.cargarProductos(this.categoriaSeleccionada);
      }
    });
  }

  seleccionarCategoria(nombreCategoria: string): void {
    this.categoriaSeleccionada = nombreCategoria;
    this.cargarProductos(nombreCategoria);
  }

  cargarProductos(nombreCategoria: string): void {
    this.productosService.getProductosPorCategoria(nombreCategoria).subscribe(productos => {
      this.productos = productos;
    });
  }
}
