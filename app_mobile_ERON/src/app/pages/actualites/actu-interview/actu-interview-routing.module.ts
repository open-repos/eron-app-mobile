import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuInterviewPage } from './actu-interview.page';

const routes: Routes = [
  {
    path: '',
    component: ActuInterviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuInterviewPageRoutingModule {}
