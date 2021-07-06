import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedecinsPage } from './medecins.page';

const routes: Routes = [
  {
    path: '',
    component: MedecinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedecinsPageRoutingModule {}
