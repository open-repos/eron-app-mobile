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
          children: [       
          {
            path:'',
            loadChildren: () => import('./tab-formation/tab-formation.module').then( m => m.TabFormationPageModule),
          },
            {
              path: ':formationApprenantId',
              loadChildren: () => import('./tab-formation/formation-apprenant-detail/formation-apprenant-detail.module').then( m => m.FormationApprenantDetailPageModule)
          
            }
          ]
        },
        {
          path: 'tab-boutique',
          children: [       
            {
              path:'',
              loadChildren: () => import('./tab-boutique/tab-boutique.module').then( m => m.TabBoutiquePageModule),
            },
              {
                path: ':boutiqueApprenantId',
                loadChildren: () => import('./tab-boutique/boutique-formations-detail/boutique-formations-detail.module').then( m => m.BoutiqueFormationsDetailPageModule)
            
              }
            ]
        },
        {
          path: 'tab-profil',        
          children: [       
            {
              path:'',
              loadChildren: () => import('./tab-profil/tab-profil.module').then( m => m.TabProfilPageModule),
            },
            {
              path: 'attestation-apprenant',
              loadChildren: () => import('./tab-profil/attestation-apprenant/attestation-apprenant.module').then( m => m.AttestationApprenantPageModule)
            },
            {
              path: 'notifications-apprenant',
              loadChildren: () => import('./tab-profil/notifications-apprenant/notifications-apprenant.module').then( m => m.NotificationsApprenantPageModule)
            },
            {
              path: 'contacts',
              children: [
                {
              path: '',
              loadChildren: () => import('./tab-profil/contacts/contacts.module').then( m => m.ContactsPageModule)
                },
                {
                  path: 'contacts-forms',
                  loadChildren: () => import('./tab-profil/contacts/contacts-forms/contacts-forms.module').then( m => m.ContactsFormsPageModule)
                }  
            ]
            },
            {
              path: 'faq',
              loadChildren: () => import('./tab-profil/faq/faq.module').then( m => m.FaqPageModule)
            }
          
            ]

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
