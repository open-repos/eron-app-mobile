import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsApprenantPageRoutingModule } from './notifications-apprenant-routing.module';

import { NotificationsApprenantPage } from './notifications-apprenant.page';
import { SahredComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsApprenantPageRoutingModule,
    SahredComponentsApprenantModule
  ],
  declarations: [NotificationsApprenantPage]
})
export class NotificationsApprenantPageModule {}
