import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuPressePage } from './actu-presse.page';

const routes: Routes = [
  {
    path: '',
    component: ActuPressePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuPressePageRoutingModule {}
