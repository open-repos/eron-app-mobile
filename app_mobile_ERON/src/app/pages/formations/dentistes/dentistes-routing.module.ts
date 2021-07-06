import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DentistesPage } from './dentistes.page';

const routes: Routes = [
  {
    path: '',
    component: DentistesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentistesPageRoutingModule {}
