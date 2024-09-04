import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

interface User {
  nombre: string;
  email: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-estu-home',
  templateUrl: './estu-home.page.html',
  styleUrls: ['./estu-home.page.scss'],
})
export class EstuHomePage implements OnInit {
  nombre: string = '';
  correo: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUserEmail = localStorage.getItem('currentUserEmail');
    const currentUser = users.find(user => user.email === currentUserEmail);
    
    if (currentUser) {
      this.nombre = currentUser.nombre;
      this.correo = currentUser.email;
    } else {
      this.nombre = 'Usuario';
      this.correo = '';
    }
  }

  logout() {
    localStorage.removeItem('currentUserEmail');
    this.router.navigate(['/login']);
  }

  async escanearQR() {
    console.log('Escaneando código QR...');
    
    const horaActual = new Date().toLocaleString();
    
    const asistencias = JSON.parse(localStorage.getItem('asistencias') || '[]');
    asistencias.push({ nombre: this.nombre, correo: this.correo, hora: horaActual });
    localStorage.setItem('asistencias', JSON.stringify(asistencias));

    const toast = await this.toastController.create({
      message: 'Asistencia registrada con éxito',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }
}