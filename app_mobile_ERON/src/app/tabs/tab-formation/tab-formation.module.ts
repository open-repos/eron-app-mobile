import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabFormationPageRoutingModule } from './tab-formation-routing.module';

import { TabFormationPage } from './tab-formation.page';
import { SahredComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabFormationPageRoutingModule,
    SahredComponentsApprenantModule
  ],
  declarations: [TabFormationPage]
})
export class TabFormationPageModule {}
