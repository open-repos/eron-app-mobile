import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedecinsPageRoutingModule } from './medecins-routing.module';

import { MedecinsPage } from './medecins.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SahredComponentsModule } from 'src/app/components/shared/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedecinsPageRoutingModule,
    FontAwesomeModule,
    SahredComponentsModule
  ],
  declarations: [MedecinsPage]
})
export class MedecinsPageModule {}
