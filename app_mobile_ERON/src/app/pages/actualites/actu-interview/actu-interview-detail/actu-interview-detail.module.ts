import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuInterviewDetailPageRoutingModule } from './actu-interview-detail-routing.module';

import { ActuInterviewDetailPage } from './actu-interview-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuInterviewDetailPageRoutingModule
  ],
  declarations: [ActuInterviewDetailPage]
})
export class ActuInterviewDetailPageModule {}
