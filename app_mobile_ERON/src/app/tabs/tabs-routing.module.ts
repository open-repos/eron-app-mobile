import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
          path: 'tab-suivi',
          loadChildren: () => import('./tab-suivi/tab-suivi.module').then( m => m.TabSuiviPageModule)
        },
        {
          path: 'tab-formation',
          loadChildren: () => import('./tab-formation/tab-formation.module').then( m => m.TabFormationPageModule)
        },
        {
          path: 'tab-boutique',
          loadChildren: () => import('./tab-boutique/tab-boutique.module').then( m => m.TabBoutiquePageModule)
        },
        {
          path: 'tab-profil',
          loadChildren: () => import('./tab-profil/tab-profil.module').then( m => m.TabProfilPageModule)
        },
      {
        path: '',
        redirectTo: '/tabs/tab-suivi',
        pathMatch: 'full'
      }
    ]
  }
];
  // {
  //   path: '',
  //   component: TabsPage
  // },
  // {
  //   path: 'tab-suivi',
  //   loadChildren: () => import('./tab-suivi/tab-suivi.module').then( m => m.TabSuiviPageModule)
  // },
  // {
  //   path: 'tab-formation',
  //   loadChildren: () => import('./tab-formation/tab-formation.module').then( m => m.TabFormationPageModule)
  // },
  // {
  //   path: 'tab-boutique',
  //   loadChildren: () => import('./tab-boutique/tab-boutique.module').then( m => m.TabBoutiquePageModule)
  // },
  // {
  //   path: 'tab-profil',
  //   loadChildren: () => import('./tab-profil/tab-profil.module').then( m => m.TabProfilPageModule)
  // }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
