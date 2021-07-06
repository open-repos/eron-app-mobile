import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KinePageRoutingModule } from './kine-routing.module';

import { KinePage } from './kine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KinePageRoutingModule
  ],
  declarations: [KinePage]
})
export class KinePageModule {}
