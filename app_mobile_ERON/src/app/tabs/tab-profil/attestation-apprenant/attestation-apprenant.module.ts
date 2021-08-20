import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttestationApprenantPageRoutingModule } from './attestation-apprenant-routing.module';

import { AttestationApprenantPage } from './attestation-apprenant.page';
import { SharedComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';
import { SharedAllComponentsModule } from 'src/app/components/shared/shared-all-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttestationApprenantPageRoutingModule,
    SharedComponentsApprenantModule,
    SharedAllComponentsModule
  ],
  declarations: [AttestationApprenantPage]
})
export class AttestationApprenantPageModule {}
