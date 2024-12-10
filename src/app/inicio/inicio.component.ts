import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InicioService } from '../inicio/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  categorias = [
    { nombre: 'Programas', imagen: '../../assets/images/programas.jpg' },
    { nombre: 'SSD', imagen: '../../assets/images/ssd.jpg' },
    { nombre: 'Placas Bases', imagen: '../../assets/images/placasBases.jpg' },
    { nombre: 'Ventiladores', imagen: '../../assets/images/ventilador.jpg' },
    { nombre: 'Procesadores', imagen: '../../assets/images/procesador.jpg' },
    { nombre: 'Móviles', imagen: '../../assets/images/movil.jpg' },
    { nombre: 'Memoria RAM', imagen: '../../assets/images/ram.jpg' },
    { nombre: 'Refrigeración líquida', imagen: '../../assets/images/refri.jpg' },
    { nombre: 'Fuentes de alimentación', imagen: '../../assets/images/fuente.jpg' },
    { nombre: 'Torres', imagen: '../../assets/images/torre.jpg' },
    { nombre: 'Monitores', imagen: '../../assets/images/monitor.jpg' },
    { nombre: 'Foros', imagen: '../../assets/images/foros.jpg' }
  ];

  constructor(private router: Router, private inicioService: InicioService) {}

  seleccionarCategoria(categoria: string): void {
    // Redirige al componente MenuComponent pasando la categoría como parámetro
    this.router.navigate(['../productos', categoria]);
  }

  productos: any[] = [];


  ngOnInit(): void {
    this.inicioService.obtenerProductos().subscribe((data) => {
      this.productos = data;
    });
  }
}
