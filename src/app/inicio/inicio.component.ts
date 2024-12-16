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
    { nombre: 'Programas', imagen: '../../assets/images/programas.jpg', fuente:"" },
    { nombre: 'SSD', imagen: '../../assets/images/ssd.jpg',  fuente:"" },
    { nombre: 'Placas Bases', imagen: '../../assets/images/placasBases.jpg', fuente:"" },
    { nombre: 'Ventiladores', imagen: '../../assets/images/ventilador.jpg' , fuente:""},
    { nombre: 'Procesadores', imagen: '../../assets/images/procesador.jpg', fuente:"" },
    { nombre: 'Móviles', imagen: '../../assets/images/movil.jpg', fuente:"" },
    { nombre: 'Memoria RAM', imagen: '../../assets/images/ram.jpg', fuente:"" },
    { nombre: 'Refrigeración líquida', imagen: '../../assets/images/refri.jpg', fuente:"" },
    { nombre: 'Fuentes de alimentación', imagen: '../../assets/images/fuente.jpg', fuente:"" },
    { nombre: 'Torres', imagen: '../../assets/images/torre.jpg' , fuente:""},
    { nombre: 'Monitores', imagen: '../../assets/images/monitor.jpg', fuente:"" },
    { nombre: 'Foros', imagen: '../../assets/images/foros.jpg', fuente:"" }
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
