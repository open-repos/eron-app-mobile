import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KinePage } from './kine.page';

const routes: Routes = [
  {
    path: '',
    component: KinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KinePageRoutingModule {}
