import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsApprenantPage } from './notifications-apprenant.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsApprenantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsApprenantPageRoutingModule {}
