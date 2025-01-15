import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).*$/) // Al menos una mayúscula y un número
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).*$/) ]]
    }, {
      validator: this.matchPasswords('password', 'confirmPassword') // Validador personalizado
    });
  }

  // Validador personalizado para comparar contraseñas
  matchPasswords(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passControl = formGroup.controls[password];
      const confirmPassControl = formGroup.controls[confirmPassword];
      if (confirmPassControl.errors && !confirmPassControl.errors['passwordMismatch']) {
        return;
      }

      if (passControl.value !== confirmPassControl.value) {
        confirmPassControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPassControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    this.submitted = true;
  
    // Detener si el formulario no es válido
    if (this.registerForm.invalid) {
      return;
    }
  
    // Si el formulario es válido, procesar los datos
    console.log('Formulario válido:', this.registerForm.value);
    alert('Registrado Correctamente');
    
    // Reiniciar el formulario
    this.registerForm.reset();
    this.submitted = false; // Resetear el estado de envío
  }

  // Getter para simplificar el acceso a los controles del formulario
  get f() {
    return this.registerForm.controls;
  }
}
