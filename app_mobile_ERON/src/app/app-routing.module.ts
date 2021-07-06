import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  // {
  //   path: 'medecins',
  //   loadChildren: () => import('./pages/formations/medecins/medecins.module').then( m => m.MedecinsPageModule)
  // },
  // {
  //   path: 'dentistes',
  //   loadChildren: () => import('./pages/formations/dentistes/dentistes.module').then( m => m.DentistesPageModule)
  // },
  // {
  //   path: 'kine',
  //   loadChildren: () => import('./pages/formations/kine/kine.module').then( m => m.KinePageModule)
  // },
  // {
  //   path: 'infirmiers',
  //   loadChildren: () => import('./pages/formations/infirmiers/infirmiers.module').then( m => m.InfirmiersPageModule)
  // },
  // {
  //   path: 'pharmaciens',
  //   loadChildren: () => import('./pages/formations/pharmaciens/pharmaciens.module').then( m => m.PharmaciensPageModule)
  // },
  // {
  //   path: 'contacts',
  //   loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  // },
  // {
  //   path: 'faq',
  //   loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  // },
  // {
  //   path: 'actu-presse',
  //   loadChildren: () => import('./pages/actualites/actu-presse/actu-presse.module').then( m => m.ActuPressePageModule)
  // },
  // {
  //   path: 'actu-eron',
  //   loadChildren: () => import('./pages/actualites/actu-eron/actu-eron.module').then( m => m.ActuEronPageModule)
  // },
  // {
  //   path: 'actu-interview',
  //   loadChildren: () => import('./pages/actualites/actu-interview/actu-interview.module').then( m => m.ActuInterviewPageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
