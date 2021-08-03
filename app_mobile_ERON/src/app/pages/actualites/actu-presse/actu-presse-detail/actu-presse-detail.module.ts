import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuPresseDetailPageRoutingModule } from './actu-presse-detail-routing.module';

import { ActuPresseDetailPage } from './actu-presse-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuPresseDetailPageRoutingModule
  ],
  declarations: [ActuPresseDetailPage]
})
export class ActuPresseDetailPageModule {}
