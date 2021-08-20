import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabBoutiquePageRoutingModule } from './tab-boutique-routing.module';

import { TabBoutiquePage } from './tab-boutique.page';
import { SharedComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';
import { SharedAllComponentsModule } from 'src/app/components/shared/shared-all-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabBoutiquePageRoutingModule,
    SharedComponentsApprenantModule,
    SharedAllComponentsModule,
  ],
  declarations: [TabBoutiquePage]
})
export class TabBoutiquePageModule {}
