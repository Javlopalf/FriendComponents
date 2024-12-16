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
    { nombre: 'Programas', imagen: '../../assets/images/windowsP.jpg' },
    { nombre: 'SSD', imagen: '../../assets/images/discoP.jpg' },
    { nombre: 'Placas Bases', imagen: '../../assets/images/placabaseP.jpg' },
    { nombre: 'Ventiladores', imagen: '../../assets/images/ventiladorP.jpg' },
    { nombre: 'Procesadores', imagen: '../../assets/images/procesadorP.jpg' },
    { nombre: 'Móviles', imagen: '../../assets/images/movilesP.jpg' },
    { nombre: 'Memoria RAM', imagen: '../../assets/images/ramP.jpg' },
    { nombre: 'Refrigeración líquida', imagen: '../../assets/images/refrigeracionP.jpg' },
    { nombre: 'Fuentes de alimentación', imagen: '../../assets/images/fuente.jpg' },
    { nombre: 'Torres', imagen: '../../assets/images/torreP.jpg' },
    { nombre: 'Monitores', imagen: '../../assets/images/monitor.jpg' },
    { nombre: 'Foros', imagen: '../../assets/images/foro.jpg' }
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
