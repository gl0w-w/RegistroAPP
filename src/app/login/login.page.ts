import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

interface User {
  nombre: string;
  email: string;
  password: string;
  role: string;
}

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
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  getErrorMessage(field: string): string {
    const control = this.loginForm.get(field);
    if (control?.errors) {
      if (control.errors['required']) {
        return `El ${field} es requerido`;
      }
      if (control.errors['email']) {
        return 'Ingrese un correo electrónico válido';
      }
    }
    return '';
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  
      const user = users.find(u => u.email === email && u.password === password);
  
      if (user) {
        localStorage.setItem('currentUserEmail', user.email);
        if (user.role === 'profesor') {
          this.router.navigate(['/profe-home']);
        } else {
          this.router.navigate(['/estu-home']);
        }
      } else {
        const toast = await this.toastController.create({
          message: 'Credenciales incorrectas',
          duration: 2000,
          position: 'bottom',
          color: 'danger'
        });
        toast.present();
      }
    }
  }

  goToRegistro() {
    this.router.navigate(['/registro']);
  }

  goToResetPassword() {
    this.router.navigate(['/rpass']);
  }
}