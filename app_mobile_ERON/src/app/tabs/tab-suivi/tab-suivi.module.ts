import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSuiviPageRoutingModule } from './tab-suivi-routing.module';

import { TabSuiviPage } from './tab-suivi.page';
import { SharedComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';
import { SharedAllComponentsModule } from 'src/app/components/shared/shared-all-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSuiviPageRoutingModule,
    SharedComponentsApprenantModule,
    SharedAllComponentsModule
  ],
  declarations: [TabSuiviPage]
})
export class TabSuiviPageModule {}
