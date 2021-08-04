import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabFormationPageRoutingModule } from './tab-formation-routing.module';

import { TabFormationPage } from './tab-formation.page';
import { SharedComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabFormationPageRoutingModule,
    SharedComponentsApprenantModule
  ],
  declarations: [TabFormationPage]
})
export class TabFormationPageModule {}
