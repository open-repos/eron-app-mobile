import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/menu/home',
    pathMatch:'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
