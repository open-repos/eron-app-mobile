import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsApprenantPageRoutingModule } from './notifications-apprenant-routing.module';

import { NotificationsApprenantPage } from './notifications-apprenant.page';
import { SharedComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsApprenantPageRoutingModule,
    SharedComponentsApprenantModule,
    ReactiveFormsModule
  ],
  declarations: [NotificationsApprenantPage]
})
export class NotificationsApprenantPageModule {}
