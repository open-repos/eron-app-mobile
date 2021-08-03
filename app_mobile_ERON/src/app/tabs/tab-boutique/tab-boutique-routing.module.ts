import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBoutiquePage } from './tab-boutique.page';

const routes: Routes = [
  {
    path: '',
    component: TabBoutiquePage
  },
  // {
  //   path: 'boutique-formations-detail',
  //   loadChildren: () => import('./boutique-formations-detail/boutique-formations-detail.module').then( m => m.BoutiqueFormationsDetailPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBoutiquePageRoutingModule {}
