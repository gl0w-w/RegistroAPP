import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private toastController: ToastController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
      role: ['alumno', Validators.required]
    });
  }

  ngOnInit() {}

  passwordValidator(control: any) {
    const value = control.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const valid = hasUpperCase && hasNumber;
    return valid ? null : { invalidPassword: true };
  }

  getErrorMessage(field: string): string {
    const control = this.loginForm.get(field);
    if (control?.errors) {
      if (control.errors['required']) {
        return `El ${field} es requerido`;
      }
      if (control.errors['email']) {
        return 'Ingrese un correo electrónico válido';
      }
      if (control.errors['minlength']) {
        return `La contraseña debe tener al menos ${control.errors['minlength'].requiredLength} caracteres`;
      }
      if (control.errors['invalidPassword']) {
        return 'La contraseña debe contener al menos una mayúscula y un número';
      }
    }
    return '';
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password, role } = this.loginForm.value;
      localStorage.setItem('currentUser', email);
      localStorage.setItem('userRole', role);
      
      if (role === 'profesor') {
        this.router.navigate(['/profe-home']);
      } else {
        this.router.navigate(['/estu-home']);
      }
    }
  }

  goToResetPassword() {
    this.router.navigate(['/rpass']);
  }

  async borrarDatos() {
    localStorage.clear();
    const toast = await this.toastController.create({
      message: 'Todos los datos han sido borrados',
      duration: 2000,
      position: 'bottom',
      color: 'warning'
    });
    toast.present();
  }
}