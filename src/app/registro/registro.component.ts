import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  registerForm: FormGroup;
  submitted = false;
  private apiUrl = 'http://localhost/FriendComponents/controller/UsuarioController.php'; // URL del backend


  //Validador de Formulario
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
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

  //Al completar el formulario indica al usuario si esta bien cumplimentada la informacion  
    onSubmit() {
      this.submitted = true;
  
      if (this.registerForm.invalid) {
        return;
      }
  
      const formData = {
        nombre: this.registerForm.value.name,
        correo: this.registerForm.value.email,
        contrasenia: this.registerForm.value.password
      };
  
      this.http.post(this.apiUrl, formData).subscribe({
        next: (response) => {
          console.log('Usuario registrado:', response);
          alert('Usuario registrado correctamente.');
          this.registerForm.reset();
          this.submitted = false;
        },
        error: (error) => {
          console.error('Error al registrar usuario:', error);
          alert('Hubo un error al registrar el usuario.');
        }
      });
    }
  
    get f() {
      return this.registerForm.controls;
    }
}
