// src/app/productos/productos.component.ts
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
          imagen: '../../assets/images/productos/mcr11.jpg',
        },
        {
          nombre: 'Microsoft Windows Server 2022 Standard',
          precio: 89.99,
          valoracion: 4.6,
          descripcion: 'Descarga Digital',
          imagen: '../../assets/images/productos/mcr22.jpg',
        },
        {
          nombre: 'Microsoft Windows Server 2019 Standard',
          precio: 49.99,
          valoracion: 4.5,
          descripcion: 'Descarga Digital',
          imagen: '../../assets/images/productos/mcr19.jpg',
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
          imagen: '../../assets/images/productos/smsg22.jpg',
        },
        {
          nombre: 'iPhone 13 Pro Max',
          precio: 1199.99,
          valoracion: 4.9,
          descripcion: 'Smartphone Apple con 5G',
          imagen: '../../assets/images/productos/iphone13.jpg',
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
          imagen: '../../assets/images/productos/asus.jpg',
        },
        {
          nombre: 'MSI MPG Z590',
          precio: 229.99,
          valoracion: 4.6,
          descripcion: 'Placa base para procesadores Intel',
          imagen: '../../assets/images/productos/mpg.jpg',
        },
      ]
    },
  ];

  categorias: any[] = [];
  productos: any[] = [];
  categoriaSeleccionada: string = '';

  constructor(
    private route: ActivatedRoute,
  ) {}

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
