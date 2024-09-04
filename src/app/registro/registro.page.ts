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
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroform: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private toastController: ToastController
  ) {
    this.registroform = this.fb.group({
      nombre: ['', Validators.required],
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
    const control = this.registroform.get(field);
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

  async onSubmit() {
    if (this.registroform.valid) {
      const { nombre, email, password, role } = this.registroform.value;
      
      const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
      
      if (users.some((user: User) => user.email === email)) {
        const toast = await this.toastController.create({
          message: 'Este correo electrónico ya está registrado.',
          duration: 2000,
          position: 'bottom',
          color: 'danger'
        });
        toast.present();
        return;
      }
      
      users.push({ nombre, email, password, role });
      
      localStorage.setItem('users', JSON.stringify(users));
      
      const toast = await this.toastController.create({
        message: 'Registro exitoso. Por favor, inicia sesión.',
        duration: 2000,
        position: 'bottom',
        color: 'success'
      });
      toast.present();

      this.router.navigate(['/login']);
    }
  }


  goToLogin() {
    this.router.navigate(['/login']);
  }

  async borrarDatos() {
    localStorage.clear();
  
    localStorage.removeItem('users');
    localStorage.removeItem('currentUserEmail');
  
    localStorage.removeItem('asistencias');
  
    const toast = await this.toastController.create({
      message: 'Todos los datos han sido borrados, incluyendo usuarios y asistencias',
      duration: 3000,
      position: 'bottom',
      color: 'warning'
    });
    toast.present();
  }
}