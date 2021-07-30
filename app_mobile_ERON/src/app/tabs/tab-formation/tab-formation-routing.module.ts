import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabFormationPage } from './tab-formation.page';

const routes: Routes = [
  {
    path: '',
    component: TabFormationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabFormationPageRoutingModule {}
