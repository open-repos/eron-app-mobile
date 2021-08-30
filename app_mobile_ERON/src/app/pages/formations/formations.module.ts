import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormationsPageRoutingModule } from './formations-routing.module';

import { FormationsPage } from './formations.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormationsPageRoutingModule,
    FontAwesomeModule,
    SharedComponentsModule
  ],
  declarations: [FormationsPage]
})
export class FormationsPageModule {}
