import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuPressePageRoutingModule } from './actu-presse-routing.module';

import { ActuPressePage } from './actu-presse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuPressePageRoutingModule
  ],
  declarations: [ActuPressePage]
})
export class ActuPressePageModule {}
