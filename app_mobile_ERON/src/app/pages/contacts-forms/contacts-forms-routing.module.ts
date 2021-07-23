import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsPage } from '../contacts/contacts.page';

import { ContactsFormsPage } from './contacts-forms.page';

const routes: Routes = [
      {
        path: '',
        component: ContactsFormsPage,
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsFormsPageRoutingModule {}
