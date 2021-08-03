import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoutiqueFormationsDetailPage } from './boutique-formations-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BoutiqueFormationsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoutiqueFormationsDetailPageRoutingModule {}
