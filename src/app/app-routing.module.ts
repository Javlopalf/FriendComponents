import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductComponent } from './product/product.component';
import { authGuard } from './servicios/auth-guard.service';
import { AvisosComponent } from './avisos/avisos.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { PoliticasComponent } from './politicas/politicas.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent,  canActivate: [authGuard]},
  {path: 'carrito', component: CarritoComponent, canActivate: [authGuard]},
  { path: 'productos/:categoria', component: ProductosComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'producto/:id', component: ProductComponent, canActivate: [authGuard]},
  { path: 'avisos', component: AvisosComponent},
  { path: 'preguntas', component: PreguntasComponent},
  { path: 'politicas', component: PoliticasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
