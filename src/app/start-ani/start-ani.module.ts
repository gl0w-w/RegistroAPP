import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartAniPageRoutingModule } from './start-ani-routing.module';

import { StartAniPage } from './start-ani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartAniPageRoutingModule
  ],
  declarations: [StartAniPage]
})
export class StartAniPageModule {}
