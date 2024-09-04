import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartAniPage } from './start-ani.page';

const routes: Routes = [
  {
    path: '',
    component: StartAniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartAniPageRoutingModule {}
