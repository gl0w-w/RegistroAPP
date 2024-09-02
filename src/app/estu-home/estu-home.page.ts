import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-estu-home',
  templateUrl: './estu-home.page.html',
  styleUrls: ['./estu-home.page.scss'],
})
export class EstuHomePage implements OnInit {
  correo: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.correo = localStorage.getItem('currentUser') || 'Alumno';
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }

  async escanearQR() {
    console.log('Escaneando código QR...');
    
    const horaActual = new Date().toLocaleString();
    
    const asistencia = JSON.parse(localStorage.getItem('asistencias') || '[]');
    asistencia.push({ correo: this.correo, hora: horaActual });
    localStorage.setItem('asistencias', JSON.stringify(asistencia));

    const toast = await this.toastController.create({
      message: 'Asistencia registrada con éxito',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }
}