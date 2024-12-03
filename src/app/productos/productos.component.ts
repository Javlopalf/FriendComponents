import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  data = [
    {
      nombre: 'Programas',
      productos: [
        {
          nombre: 'Microsoft Windows 11 Pro',
          precio: 103.99,
          valoracion: 4.8,
          descripcion: 'Licencia Permanente - Descarga Digital',
          imagen: 'https://via.placeholder.com/100',
        },
        {
          nombre: 'Microsoft Windows Server 2022 Standard',
          precio: 89.99,
          valoracion: 4.6,
          descripcion: 'Descarga Digital',
          imagen: 'https://via.placeholder.com/100',
        },
        {
          nombre: 'Microsoft Windows Server 2019 Standard',
          precio: 49.99,
          valoracion: 4.5,
          descripcion: 'Descarga Digital',
          imagen: 'https://via.placeholder.com/100',
        },
      ]
    },
    {
      nombre: 'Móviles',
      productos: [
        {
          nombre: 'Samsung Galaxy S22',
          precio: 799.99,
          valoracion: 4.7,
          descripcion: 'Smartphone Android 5G',
          imagen: 'https://via.placeholder.com/100',
        },
        {
          nombre: 'iPhone 13 Pro Max',
          precio: 1199.99,
          valoracion: 4.9,
          descripcion: 'Smartphone Apple con 5G',
          imagen: 'https://via.placeholder.com/100',
        },
      ]
    },
    {
      nombre: 'Placas Base',
      productos: [
        {
          nombre: 'ASUS ROG Strix B550-F',
          precio: 189.99,
          valoracion: 4.7,
          descripcion: 'Placa base para procesadores AMD',
          imagen: 'https://via.placeholder.com/100',
        },
        {
          nombre: 'MSI MPG Z590',
          precio: 229.99,
          valoracion: 4.6,
          descripcion: 'Placa base para procesadores Intel',
          imagen: 'https://via.placeholder.com/100',
        },
      ]
    },
  ];

  categorias: any[] = [];
  productos: any[] = [];
  categoriaSeleccionada: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categorias = this.data;
    const categoria = this.route.snapshot.paramMap.get('categoria');
    if (categoria) {
      this.categoriaSeleccionada = categoria;
      this.cargarProductos(categoria);
    }
  }

  seleccionarCategoria(nombreCategoria: string): void {
    this.categoriaSeleccionada = nombreCategoria;
    this.cargarProductos(nombreCategoria);
  }

  cargarProductos(nombreCategoria: string): void {
    const categoria = this.categorias.find(cat => cat.nombre === nombreCategoria);
    this.productos = categoria ? categoria.productos : [];
  }
}
