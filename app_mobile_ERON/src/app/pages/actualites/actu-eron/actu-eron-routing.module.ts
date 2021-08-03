import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuEronPage } from './actu-eron.page';

const routes: Routes = [
  {
    path: '',
    component: ActuEronPage,
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuEronPageRoutingModule {}
