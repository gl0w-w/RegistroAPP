import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  nombre: string;
  email: string;
  password: string;
  role: string;
}

interface Asistencia {
  nombre: string;
  correo: string;
  hora: string;
}

@Component({
  selector: 'app-profe-home',
  templateUrl: './profe-home.page.html',
  styleUrls: ['./profe-home.page.scss'],
})
export class ProfeHomePage implements OnInit {
  nombre: string = '';
  correo: string = '';
  asistencias: Asistencia[] = [];

  constructor(private router: Router) {}

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