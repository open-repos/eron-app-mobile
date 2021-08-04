import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuPressePageRoutingModule } from './actu-presse-routing.module';

import { ActuPressePage } from './actu-presse.page';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuPressePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ActuPressePage]
})
export class ActuPressePageModule {}
