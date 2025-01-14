import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

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
          imagen: '../../assets/images/productos/movil3.jpg',
        },
      ],
    },
    {
      nombre: 'Placas Bases',
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
          imagen: '../../assets/images/productos/placaBase3.jpg',
        },
      ],
    },
    {
      nombre: 'Procesadores',
      productos: [
        {
          nombre: 'Samsung 970 EVO Plus',
          precio: 99.99,
          valoracion: 4.9,
          descripcion: 'Disco SSD NVMe 1TB',
          imagen: '../../assets/images/productos/disco1.jpg',
        },
        {
          nombre: 'Crucial MX500',
          precio: 69.99,
          valoracion: 4.8,
          descripcion: 'Disco SSD SATA 500GB',
          imagen: '../../assets/images/productos/disco2.jpg',
        },
        {
          nombre: 'WD Black SN850',
          precio: 149.99,
          valoracion: 4.7,
          descripcion: 'Disco SSD NVMe 2TB',
          imagen: '../../assets/images/productos/disco3.jpg',
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
          imagen: '../../assets/images/productos/ventilador1.jpg',
        },
        {
          nombre: 'Noctua NH-D15',
          precio: 89.99,
          valoracion: 4.9,
          descripcion: 'Disipador de alta eficiencia',
          imagen: '../../assets/images/productos/ventilador2.jpg',
        },
        {
          nombre: 'Corsair iCUE SP120',
          precio: 29.99,
          valoracion: 4.7,
          descripcion: 'Ventilador RGB para cajas de PC',
          imagen: '../../assets/images/productos/ventilador3.jpg',
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
          imagen: '../../assets/images/productos/RAM1.jpg',
        },
        {
          nombre: 'G.Skill Trident Z RGB 32GB',
          precio: 189.99,
          valoracion: 4.9,
          descripcion: 'DDR4 3600MHz con iluminación RGB',
          imagen: '../../assets/images/productos/RAM2.jpg',
        },
        {
          nombre: 'Kingston Fury Beast 16GB',
          precio: 74.99,
          valoracion: 4.7,
          descripcion: 'DDR4 3200MHz',
          imagen: '../../assets/images/productos/RAM3.jpg',
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
          imagen: '../../assets/images/productos/REF1.jpg',
        },
        {
          nombre: 'Corsair Hydro Series H100i',
          precio: 129.99,
          valoracion: 4.7,
          descripcion: 'Refrigeración líquida de alto rendimiento',
          imagen: '../../assets/images/productos/REF2.jpg',
        },
        {
          nombre: 'Cooler Master MasterLiquid ML240L',
          precio: 89.99,
          valoracion: 4.6,
          descripcion: 'Sistema de refrigeración líquida asequible',
          imagen: '../../assets/images/productos/REF3.jpg',
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
          imagen: '../../assets/images/productos/FA1.jpg',
        },
        {
          nombre: 'EVGA SuperNOVA 750 G5',
          precio: 129.99,
          valoracion: 4.7,
          descripcion: 'Fuente de alimentación 80+ Gold',
          imagen: '../../assets/images/productos/FA2.jpg',
        },
        {
          nombre: 'Thermaltake Smart 500W',
          precio: 49.99,
          valoracion: 4.5,
          descripcion: 'Fuente de alimentación básica',
          imagen: '../../assets/images/productos/FA3.jpg',
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
          imagen: '../../assets/images/productos/Torre1.jpg',
        },
        {
          nombre: 'Corsair iCUE 4000X RGB',
          precio: 129.99,
          valoracion: 4.8,
          descripcion: 'Caja con iluminación RGB',
          imagen: '../../assets/images/productos/Torre2.jpg',
        },
        {
          nombre: 'Cooler Master MasterBox Q300L',
          precio: 49.99,
          valoracion: 4.6,
          descripcion: 'Caja económica y compacta',
          imagen: '../../assets/images/productos/Torre3.jpg',
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
          imagen: '../../assets/images/productos/Monitor1.jpg',
        },
        {
          nombre: 'LG 27GN950-B',
          precio: 749.99,
          valoracion: 4.8,
          descripcion: 'Monitor gaming 4K con 144Hz',
          imagen: '../../assets/images/productos/Monitor2.jpg',
        },
        {
          nombre: 'AOC C24G1A',
          precio: 199.99,
          valoracion: 4.7,
          descripcion: 'Monitor curvo Full HD de 24 pulgadas',
          imagen: '../../assets/images/productos/Monitor3.jpg',
        },
      ],
    }
  ];

  comentarios = [
    {
      mensaje: 'Este producto es fantástico, superó mis expectativas.',
      persona: 'Juan Pérez',
      fecha: '2025-01-14',
      nota: 5,
    },
    {
      mensaje: 'Buen producto, aunque llegó con un pequeño retraso.',
      persona: 'María Gómez',
      fecha: '2025-01-13',
      nota: 4,
    },
    {
      mensaje: 'No cumplió con lo prometido, esperaba más.',
      persona: 'Carlos López',
      fecha: '2025-01-12',
      nota: 3,
    },
  ];



  producto: any;  // Producto actual seleccionado
  comentarioForm!: FormGroup;  // Formulario reactivo para comentarios

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    // Obtener el nombre del producto desde la ruta activa
    const nombreProducto = this.route.snapshot.paramMap.get('nombre');
    if (nombreProducto) {
      this.producto = this.buscarProducto(nombreProducto);
    }

    // Inicializar el formulario reactivo
    this.comentarioForm = this.fb.group({
      persona: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
      nota: [1, [Validators.required]]
    });
  }

  // Método para buscar el producto
  buscarProducto(nombre: string): any {
    for (const categoria of this.data) {
      const producto = categoria.productos.find(p => p.nombre === nombre);
      if (producto) {
        return producto;
      }
    }
    return null;
  }

  // Método para agregar un comentario
  agregarComentario(): void {
    if (this.comentarioForm.valid) {
      const nuevoComentario = this.comentarioForm.value;
      nuevoComentario.fecha = new Date().toLocaleDateString();
      this.comentarios.push(nuevoComentario);
      this.comentarioForm.reset();
    }
  }

  // Método para agregar un producto al carrito
  agregarAlCarrito(): void {
    alert('¡Producto añadido al carrito!');
  }


}
