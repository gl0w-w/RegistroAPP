import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {}

  getErrorMessage(field: string): string {
    const control = this.resetForm.get(field);
    if (control?.errors) {
      if (control.errors['required']) {
        return `El correo electrónico es requerido`;
      }
      if (control.errors['email']) {
        return 'Ingrese un correo electrónico válido';
      }
    }
    return '';
  }

  async onResetPassword() {
    if (this.resetForm.valid) {
      const { email } = this.resetForm.value;
      
      const alert = await this.alertController.create({
        header: 'Restablecimiento de contraseña',
        message: `Se ha enviado un correo de restablecimiento a ${email}`,
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
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}