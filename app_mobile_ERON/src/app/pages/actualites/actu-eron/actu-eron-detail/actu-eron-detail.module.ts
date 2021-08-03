import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuEronDetailPageRoutingModule } from './actu-eron-detail-routing.module';

import { ActuEronDetailPage } from './actu-eron-detail.page';
import { SahredComponentsModule } from 'src/app/components/shared/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuEronDetailPageRoutingModule,
    SahredComponentsModule
  ],
  declarations: [ActuEronDetailPage]
})
export class ActuEronDetailPageModule {}
