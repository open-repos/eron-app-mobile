import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttestationApprenantPageRoutingModule } from './attestation-apprenant-routing.module';

import { AttestationApprenantPage } from './attestation-apprenant.page';
import { SahredComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttestationApprenantPageRoutingModule,
    SahredComponentsApprenantModule
  ],
  declarations: [AttestationApprenantPage]
})
export class AttestationApprenantPageModule {}
