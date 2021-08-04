import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormationDetailPageRoutingModule } from './formation-detail-routing.module';

import { FormationDetailPage } from './formation-detail.page';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormationDetailPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FormationDetailPage]
})
export class FormationDetailPageModule {}
