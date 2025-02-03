import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../servicios/auth-service.service'; // Asegúrate de que la ruta del servicio sea correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Validación de email
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).*$/) // Al menos una mayúscula y un número
      ]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      
      // Llamada al servicio de login
      this.authService.login(email, password).subscribe({
        next: (response) => {
          // Si la respuesta es exitosa, redirige al usuario
          if (response.mensaje === 'Login exitoso') {
            this.router.navigate(['inicio']); // Redirige a la página de inicio o dashboard
          } else {
            this.errorMessage = 'Correo o contraseña incorrectos';
          }
        },
        error: (error) => {
          this.errorMessage = 'Hubo un error al intentar iniciar sesión. Por favor, inténtelo de nuevo más tarde.';
        }
      });
    } else {
      alert('Formulario inválido. Revisa los campos.');
    }
  }
}
