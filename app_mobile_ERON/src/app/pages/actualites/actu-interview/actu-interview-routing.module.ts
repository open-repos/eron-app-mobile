import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuInterviewPage } from './actu-interview.page';

const routes: Routes = [
  {
    path: '',
    component: ActuInterviewPage
  },
  {
    path: 'actu-interview-detail',
    loadChildren: () => import('./actu-interview-detail/actu-interview-detail.module').then( m => m.ActuInterviewDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuInterviewPageRoutingModule {}
