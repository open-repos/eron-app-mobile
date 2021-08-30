import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

import { MenuPage } from './menu.page';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'/home',
  //   pathMatch:'full'
  // },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('../contacts/contacts.module').then(
            (m) => m.ContactsPageModule
          ),
      },
      {
        path: 'contacts-forms',
        loadChildren: () =>
          import('../contacts-forms/contacts-forms.module').then(
            (m) => m.ContactsFormsPageModule
          ),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('../faq/faq.module').then((m) => m.FaqPageModule),
      },
      {
        path: 'actu-presse',
        children: [
          {
            path:'',
            loadChildren: () =>
            import('../actualites/actu-presse/actu-presse.module').then(
              (m) => m.ActuPressePageModule
            ),
          },
            {
              path: ':actualiteId',
              loadChildren: () => import('../actualites/actu-presse/actu-presse-detail/actu-presse-detail.module').then( m => m.ActuPresseDetailPageModule)
            }
        ]
      },
      {
        path: 'actu-eron',
          children: [
            {
              path:'',
              loadChildren: () =>
              import('../actualites/actu-eron/actu-eron.module').then(
                (m) => m.ActuEronPageModule
              ),
            },
              {
                path: ':actualiteId',
                loadChildren: () => import('../actualites/actu-eron/actu-eron-detail/actu-eron-detail.module').then( m => m.ActuEronDetailPageModule)
              }
          ]
      },
      {
        path: 'actu-interview',
        children: [
          {
            path:'',
            loadChildren: () =>
            import('../actualites/actu-interview/actu-interview.module').then(
              (m) => m.ActuInterviewPageModule
            ),
          },
            {
              path: ':actualiteId',
              loadChildren: () => import('../actualites/actu-interview/actu-interview-detail/actu-interview-detail.module').then( m => m.ActuInterviewDetailPageModule)
            }
        ]

        },
      {
        path: 'login',
        loadChildren: () =>
          import('../login/login.module').then((m) => m.LoginPageModule),
      },
      {
        path: 'formations',
       children: [
      {
        path: '',
        loadChildren: () => import('../formations/formations.module').then( m => m.FormationsPageModule)
      },
      {
        path: ':formationId',
        loadChildren: () => import('../formations/formation-detail/formation-detail.module').then( m => m.FormationDetailPageModule)
      }]
    },
    {
      path:'tabs',
      loadChildren: () => import('../../tabs/tabs.module').then(m => m.TabsPageModule),
      canLoad: [AuthGuard]
    }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
