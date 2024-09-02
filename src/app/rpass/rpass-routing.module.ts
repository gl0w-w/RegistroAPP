import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RpassPage } from './rpass.page';

const routes: Routes = [
  {
    path: '',
    component: RpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RpassPageRoutingModule {}
