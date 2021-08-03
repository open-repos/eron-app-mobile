import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormationApprenantDetailPage } from './formation-apprenant-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FormationApprenantDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormationApprenantDetailPageRoutingModule {}
