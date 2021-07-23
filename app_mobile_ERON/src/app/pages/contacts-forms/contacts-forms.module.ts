import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsFormsPageRoutingModule } from './contacts-forms-routing.module';

import { ContactsFormsPage } from './contacts-forms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsFormsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ContactsFormsPage]
})
export class ContactsFormsPageModule {}
