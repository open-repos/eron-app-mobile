import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabProfilPageRoutingModule } from './tab-profil-routing.module';

import { TabProfilPage } from './tab-profil.page';
import { SahredComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabProfilPageRoutingModule,
    SahredComponentsApprenantModule
  ],
  declarations: [TabProfilPage]
})
export class TabProfilPageModule {}
