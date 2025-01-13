// src/app/productos/productos.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
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
      ],
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
        {
          nombre: 'Xiaomi Mi 11 Ultra',
          precio: 649.99,
          valoracion: 4.8,
          descripcion: 'Smartphone con cámara avanzada',
          imagen: '../../assets/images/productos/xiaomi11.jpg',
        },
      ],
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
        {
          nombre: 'Gigabyte X570 AORUS Elite',
          precio: 169.99,
          valoracion: 4.5,
          descripcion: 'Compatible con PCIe 4.0',
          imagen: '../../assets/images/productos/gigabyte.jpg',
        },
      ],
    },
    {
      nombre: 'SSD',
      productos: [
        {
          nombre: 'Samsung 970 EVO Plus',
          precio: 99.99,
          valoracion: 4.9,
          descripcion: 'Disco SSD NVMe 1TB',
          imagen: '../../assets/images/productos/ssd970.jpg',
        },
        {
          nombre: 'Crucial MX500',
          precio: 69.99,
          valoracion: 4.8,
          descripcion: 'Disco SSD SATA 500GB',
          imagen: '../../assets/images/productos/mx500.jpg',
        },
        {
          nombre: 'WD Black SN850',
          precio: 149.99,
          valoracion: 4.7,
          descripcion: 'Disco SSD NVMe 2TB',
          imagen: '../../assets/images/productos/wdblack.jpg',
        },
      ],
    },
    {
      nombre: 'Ventiladores',
      productos: [
        {
          nombre: 'Cooler Master Hyper 212',
          precio: 39.99,
          valoracion: 4.6,
          descripcion: 'Disipador de CPU con ventilador',
          imagen: '../../assets/images/productos/coolermaster.jpg',
        },
        {
          nombre: 'Noctua NH-D15',
          precio: 89.99,
          valoracion: 4.9,
          descripcion: 'Disipador de alta eficiencia',
          imagen: '../../assets/images/productos/noctua.jpg',
        },
        {
          nombre: 'Corsair iCUE SP120',
          precio: 29.99,
          valoracion: 4.7,
          descripcion: 'Ventilador RGB para cajas de PC',
          imagen: '../../assets/images/productos/corsair.jpg',
        },
      ],
    },
    {
      nombre: 'Memoria RAM',
      productos: [
        {
          nombre: 'Corsair Vengeance LPX 16GB',
          precio: 79.99,
          valoracion: 4.8,
          descripcion: 'DDR4 3200MHz',
          imagen: '../../assets/images/productos/vengeance.jpg',
        },
        {
          nombre: 'G.Skill Trident Z RGB 32GB',
          precio: 189.99,
          valoracion: 4.9,
          descripcion: 'DDR4 3600MHz con iluminación RGB',
          imagen: '../../assets/images/productos/tridentz.jpg',
        },
        {
          nombre: 'Kingston Fury Beast 16GB',
          precio: 74.99,
          valoracion: 4.7,
          descripcion: 'DDR4 3200MHz',
          imagen: '../../assets/images/productos/kingston.jpg',
        },
      ],
    },
    {
      nombre: 'Refrigeración líquida',
      productos: [
        {
          nombre: 'NZXT Kraken X63',
          precio: 149.99,
          valoracion: 4.8,
          descripcion: 'Kit de refrigeración líquida con iluminación RGB',
          imagen: '../../assets/images/productos/kraken.jpg',
        },
        {
          nombre: 'Corsair Hydro Series H100i',
          precio: 129.99,
          valoracion: 4.7,
          descripcion: 'Refrigeración líquida de alto rendimiento',
          imagen: '../../assets/images/productos/hydro.jpg',
        },
        {
          nombre: 'Cooler Master MasterLiquid ML240L',
          precio: 89.99,
          valoracion: 4.6,
          descripcion: 'Sistema de refrigeración líquida asequible',
          imagen: '../../assets/images/productos/masterliquid.jpg',
        },
      ],
    },
    {
      nombre: 'Fuentes de alimentación',
      productos: [
        {
          nombre: 'Corsair RM850x',
          precio: 149.99,
          valoracion: 4.8,
          descripcion: 'Fuente de alimentación modular 80+ Gold',
          imagen: '../../assets/images/productos/rm850x.jpg',
        },
        {
          nombre: 'EVGA SuperNOVA 750 G5',
          precio: 129.99,
          valoracion: 4.7,
          descripcion: 'Fuente de alimentación 80+ Gold',
          imagen: '../../assets/images/productos/supernova.jpg',
        },
        {
          nombre: 'Thermaltake Smart 500W',
          precio: 49.99,
          valoracion: 4.5,
          descripcion: 'Fuente de alimentación básica',
          imagen: '../../assets/images/productos/thermaltake.jpg',
        },
      ],
    },
    {
      nombre: 'Torres',
      productos: [
        {
          nombre: 'NZXT H510',
          precio: 79.99,
          valoracion: 4.7,
          descripcion: 'Caja compacta con diseño minimalista',
          imagen: '../../assets/images/productos/h510.jpg',
        },
        {
          nombre: 'Corsair iCUE 4000X RGB',
          precio: 129.99,
          valoracion: 4.8,
          descripcion: 'Caja con iluminación RGB',
          imagen: '../../assets/images/productos/4000x.jpg',
        },
        {
          nombre: 'Cooler Master MasterBox Q300L',
          precio: 49.99,
          valoracion: 4.6,
          descripcion: 'Caja económica y compacta',
          imagen: '../../assets/images/productos/q300l.jpg',
        },
      ],
    },
    {
      nombre: 'Monitores',
      productos: [
        {
          nombre: 'Dell UltraSharp U2723QE',
          precio: 649.99,
          valoracion: 4.9,
          descripcion: 'Monitor 4K UHD de 27 pulgadas',
          imagen: '../../assets/images/productos/dell.jpg',
        },
        {
          nombre: 'LG 27GN950-B',
          precio: 749.99,
          valoracion: 4.8,
          descripcion: 'Monitor gaming 4K con 144Hz',
          imagen: '../../assets/images/productos/lg.jpg',
        },
        {
          nombre: 'AOC C24G1A',
          precio: 199.99,
          valoracion: 4.7,
          descripcion: 'Monitor curvo Full HD de 24 pulgadas',
          imagen: '../../assets/images/productos/aoc.jpg',
        },
      ],
    },
    {
      nombre: 'Foros',
      productos: [
        {
          nombre: 'Foro de Hardware',
          precio: 0.00,
          valoracion: 4.9,
          descripcion: 'Discusión sobre componentes y configuraciones',
          imagen: '../../assets/images/productos/foro-hardware.jpg',
        },
        {
          nombre: 'Foro de Software',
          precio: 0.00,
          valoracion: 4.8,
          descripcion: 'Soporte y consejos sobre software',
          imagen: '../../assets/images/productos/foro-software.jpg',
        },
        {
          nombre: 'Foro de Gaming',
          precio: 0.00,
          valoracion: 4.7,
          descripcion: 'Discusiones sobre juegos y configuraciones óptimas',
          imagen: '../../assets/images/productos/foro-gaming.jpg',
        },
      ],
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
