import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      alert('Formulario válido. Datos enviados.');
      console.log(this.loginForm.value); // Aquí puedes enviar los datos al servidor
    } else {
      alert('Formulario inválido. Revisa los campos.');
    }
  }
}
