import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoutiqueFormationsDetailPageRoutingModule } from './boutique-formations-detail-routing.module';

import { BoutiqueFormationsDetailPage } from './boutique-formations-detail.page';
import { SharedComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';
import { SharedAllComponentsModule } from 'src/app/components/shared/shared-all-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoutiqueFormationsDetailPageRoutingModule,
    SharedComponentsApprenantModule,
    SharedAllComponentsModule
  ],
  declarations: [BoutiqueFormationsDetailPage]
})
export class BoutiqueFormationsDetailPageModule {}
