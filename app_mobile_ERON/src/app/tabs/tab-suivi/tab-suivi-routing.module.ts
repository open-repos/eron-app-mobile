import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSuiviPage } from './tab-suivi.page';

const routes: Routes = [
  {
    path: '',
    component: TabSuiviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSuiviPageRoutingModule {}
