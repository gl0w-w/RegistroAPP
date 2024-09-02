import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstuHomePage } from './estu-home.page';

const routes: Routes = [
  {
    path: '',
    component: EstuHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstuHomePageRoutingModule {}
