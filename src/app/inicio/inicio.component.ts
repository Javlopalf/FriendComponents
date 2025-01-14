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
    { nombre: 'Programas', imagen: '../../assets/images/windowsP.jpg', fuente:"https://pixabay.com/es/" },
    { nombre: 'SSD', imagen: '../../assets/images/discoP.jpg',  fuente:"https://www.freepik.es/" },
    { nombre: 'Placas Bases', imagen: '../../assets/images/placabaseP.jpg', fuente:"https://www.freepik.es/"},
    { nombre: 'Ventiladores', imagen: '../../assets/images/ventilador2P.jpg' , fuente:"https://pixabay.com/es/"},
    { nombre: 'Procesadores', imagen: '../../assets/images/procesadorP.jpg', fuente:"https://www.freepik.es/" },
    { nombre: 'Móviles', imagen: '../../assets/images/movilesP.jpg', fuente:"https://www.freepik.es/" },
    { nombre: 'Memoria RAM', imagen: '../../assets/images/ramP.jpg', fuente:"https://www.freepik.es/" },
    { nombre: 'Refrigeración líquida', imagen: '../../assets/images/refrigeracionP.jpg', fuente:"https://www.freepik.es/" },
    { nombre: 'Fuentes de alimentación', imagen: '../../assets/images/fuente.jpg', fuente:"https://www.freepik.es/" },
    { nombre: 'Torres', imagen: '../../assets/images/torre17.jpg' , fuente:"https://www.freepik.es/"},
    { nombre: 'Monitores', imagen: '../../assets/images/monitor.jpg', fuente:"https://pixabay.com/es/" },
    { nombre: 'Foros', imagen: '../../assets/images/foro.jpg', fuente:"https://www.freepik.es/" }
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
