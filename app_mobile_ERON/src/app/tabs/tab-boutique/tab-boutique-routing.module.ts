import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBoutiquePage } from './tab-boutique.page';

const routes: Routes = [
  {
    path: '',
    component: TabBoutiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBoutiquePageRoutingModule {}
