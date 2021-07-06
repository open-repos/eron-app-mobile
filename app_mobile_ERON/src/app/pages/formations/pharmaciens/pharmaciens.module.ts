import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmaciensPageRoutingModule } from './pharmaciens-routing.module';

import { PharmaciensPage } from './pharmaciens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmaciensPageRoutingModule
  ],
  declarations: [PharmaciensPage]
})
export class PharmaciensPageModule {}
