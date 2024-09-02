import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfeHomePage } from './profe-home.page';

const routes: Routes = [
  {
    path: '',
    component: ProfeHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfeHomePageRoutingModule {}
