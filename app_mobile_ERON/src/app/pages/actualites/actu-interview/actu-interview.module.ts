import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuInterviewPageRoutingModule } from './actu-interview-routing.module';

import { ActuInterviewPage } from './actu-interview.page';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuInterviewPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ActuInterviewPage]
})
export class ActuInterviewPageModule {}
