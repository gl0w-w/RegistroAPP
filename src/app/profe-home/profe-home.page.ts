import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profe-home',
  templateUrl: './profe-home.page.html',
  styleUrls: ['./profe-home.page.scss'],
})
export class ProfeHomePage implements OnInit {
  correo: string = '';
  asistencias: { correo: string, hora: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.correo = localStorage.getItem('currentUser') || 'Profesor';
    this.cargarAsistencias();
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }

  generarCodigoQR() {
    console.log('Generando código QR...');
  }

  cargarAsistencias() {
    this.asistencias = JSON.parse(localStorage.getItem('asistencias') || '[]');
  }

  ionViewDidEnter() {
    this.cargarAsistencias();
  }
}