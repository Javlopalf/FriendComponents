import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from '../servicios/categorias-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  categorias: any[] = [];
  mostrarModal: boolean = false;

  constructor(private router: Router, private categoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.obtenerCategorias();
    this.verificarCookies();
  }

  obtenerCategorias(): void {
    this.categoriasService.getCategorias().subscribe(
      (data) => {
        this.categorias = data;
      },
      (error) => {
        console.error('Error al obtener las categorías', error);
      }
    );
  }

  seleccionarCategoria(categoriaId: number): void {
    this.router.navigate(['../productos', categoriaId]);
  }

  verificarCookies(): void {
    const cookiesAceptadas = localStorage.getItem('cookiesAceptadas');
    if (!cookiesAceptadas) {
      this.mostrarModal = true;
    }
  }

  aceptarCookies(): void {
    localStorage.setItem('cookiesAceptadas', 'true');
    this.mostrarModal = false;
  }

  rechazarCookies(): void {
    localStorage.removeItem('cookiesAceptadas');
    this.mostrarModal = false;
    this.logout();
  }

  logout(): void {
    localStorage.removeItem('usuario'); // Borra los datos de usuario
    this.router.navigate(['/login']); // Redirige a la pantalla de login
  }
}
