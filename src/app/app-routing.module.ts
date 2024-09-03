import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'rpass',
    loadChildren: () => import('./rpass/rpass.module').then( m => m.RpassPageModule)
  },
  {
    path: 'profe-home',
    loadChildren: () => import('./profe-home/profe-home.module').then( m => m.ProfeHomePageModule)
  },
  {
    path: 'estu-home',
    loadChildren: () => import('./estu-home/estu-home.module').then( m => m.EstuHomePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }