import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabProfilPageRoutingModule } from './tab-profil-routing.module';

import { TabProfilPage } from './tab-profil.page';
import { SharedComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedAllComponentsModule } from 'src/app/components/shared/shared-all-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabProfilPageRoutingModule,
    SharedComponentsApprenantModule,
    FontAwesomeModule,
    SharedAllComponentsModule
  ],
  declarations: [TabProfilPage]
})
export class TabProfilPageModule {}
