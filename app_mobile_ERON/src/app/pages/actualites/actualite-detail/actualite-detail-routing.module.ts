import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualiteDetailPage } from './actualite-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ActualiteDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualiteDetailPageRoutingModule {}
