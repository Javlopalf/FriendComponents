import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CarritoService } from './carritoService/carrito.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    CarritoComponent,
    ProductosComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
