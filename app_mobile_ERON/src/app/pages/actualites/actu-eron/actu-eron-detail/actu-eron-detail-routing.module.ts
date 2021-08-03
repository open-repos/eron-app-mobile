import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuEronDetailPage } from './actu-eron-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ActuEronDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuEronDetailPageRoutingModule {}
