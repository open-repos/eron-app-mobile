import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSuiviPageRoutingModule } from './tab-suivi-routing.module';

import { TabSuiviPage } from './tab-suivi.page';
import { SahredComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSuiviPageRoutingModule,
    SahredComponentsApprenantModule
  ],
  declarations: [TabSuiviPage]
})
export class TabSuiviPageModule {}
