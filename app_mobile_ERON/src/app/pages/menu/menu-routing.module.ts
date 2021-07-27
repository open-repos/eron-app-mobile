import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
        loadChildren: () =>
          import('../actualites/actu-presse/actu-presse.module').then(
            (m) => m.ActuPressePageModule
          ),
      },
      {
        path: 'actu-eron',
        loadChildren: () =>
          import('../actualites/actu-eron/actu-eron.module').then(
            (m) => m.ActuEronPageModule
          ),
      },
      {
        path: 'actu-interview',
        loadChildren: () =>
          import('../actualites/actu-interview/actu-interview.module').then(
            (m) => m.ActuInterviewPageModule
          ),
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
        loadChildren: () => import('../formations/medecins/medecins.module').then( m => m.MedecinsPageModule)
      },
      {
        path: ':formationId',
        loadChildren: () => import('../formations/formation-detail/formation-detail.module').then( m => m.FormationDetailPageModule)
      }]
    },
      {
        path: 'formations-kine',
        loadChildren: () => import('../formations/kine/kine.module').then( m => m.KinePageModule)
      },
      {
        path: 'formations-infirmiers',
        loadChildren: () => import('../formations/infirmiers/infirmiers.module').then( m => m.InfirmiersPageModule)
      },
      {
        path: 'formations-pharmaciens',
        loadChildren: () => import('../formations/pharmaciens/pharmaciens.module').then( m => m.PharmaciensPageModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
