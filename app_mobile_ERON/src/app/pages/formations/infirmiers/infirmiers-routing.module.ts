import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfirmiersPage } from './infirmiers.page';

const routes: Routes = [
  {
    path: '',
    component: InfirmiersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfirmiersPageRoutingModule {}
