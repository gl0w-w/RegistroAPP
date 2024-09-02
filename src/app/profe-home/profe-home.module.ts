import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfeHomePageRoutingModule } from './profe-home-routing.module';

import { ProfeHomePage } from './profe-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfeHomePageRoutingModule
  ],
  declarations: [ProfeHomePage]
})
export class ProfeHomePageModule {}
