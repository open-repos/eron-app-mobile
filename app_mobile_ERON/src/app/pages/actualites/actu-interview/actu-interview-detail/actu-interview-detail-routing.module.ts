import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuInterviewDetailPage } from './actu-interview-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ActuInterviewDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuInterviewDetailPageRoutingModule {}
