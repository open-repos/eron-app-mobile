import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuPressePage } from './actu-presse.page';

const routes: Routes = [
  {
    path: '',
    component: ActuPressePage
  },
  {
    path: 'actu-presse-detail',
    loadChildren: () => import('./actu-presse-detail/actu-presse-detail.module').then( m => m.ActuPresseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuPressePageRoutingModule {}
