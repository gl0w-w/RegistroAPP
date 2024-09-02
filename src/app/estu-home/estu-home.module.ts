import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstuHomePageRoutingModule } from './estu-home-routing.module';

import { EstuHomePage } from './estu-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstuHomePageRoutingModule
  ],
  declarations: [EstuHomePage]
})
export class EstuHomePageModule {}
