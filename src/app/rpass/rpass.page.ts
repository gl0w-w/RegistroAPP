import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface User {
  nombre: string;
  email: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-rpass',
  templateUrl: './rpass.page.html',
  styleUrls: ['./rpass.page.scss'],
})
export class RpassPage implements OnInit {
  resetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {}

  getErrorMessage(field: string): string {
    const control = this.resetForm.get(field);
    if (control?.errors) {
      if (control.errors['required']) {
        return `Este campo es requerido`;
      }
      if (control.errors['email']) {
        return 'Ingrese un correo electrónico válido';
      }
      if (control.errors['minlength']) {
        return 'La contraseña debe tener al menos 8 caracteres';
      }
    }
    return '';
  }

  async onResetPassword() {
    if (this.resetForm.valid) {
      const { email, newPassword } = this.resetForm.value;
      
      const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex(user => user.email === email);

      if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));

        const alert = await this.alertController.create({
          header: 'Contraseña actualizada',
          message: 'Tu contraseña ha sido actualizada exitosamente.',
          buttons: [
            {
              text: 'Aceptar',
              handler: () => {
                this.router.navigate(['/login']);
              }
            }
          ]
        });

        await alert.present();
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se encontró una cuenta asociada a este correo electrónico.',
          buttons: ['Aceptar']
        });

        await alert.present();
      }
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}