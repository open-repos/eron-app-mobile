import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmaciensPage } from './pharmaciens.page';

const routes: Routes = [
  {
    path: '',
    component: PharmaciensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmaciensPageRoutingModule {}
