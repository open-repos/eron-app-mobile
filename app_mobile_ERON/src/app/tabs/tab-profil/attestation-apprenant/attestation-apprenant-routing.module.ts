import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttestationApprenantPage } from './attestation-apprenant.page';

const routes: Routes = [
  {
    path: '',
    component: AttestationApprenantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttestationApprenantPageRoutingModule {}
