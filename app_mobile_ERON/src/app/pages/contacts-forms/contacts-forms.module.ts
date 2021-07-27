import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsFormsPageRoutingModule } from './contacts-forms-routing.module';

import { ContactsFormsPage } from './contacts-forms.page';
import { SahredComponentsModule } from 'src/app/components/shared/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsFormsPageRoutingModule,
    ReactiveFormsModule,
    SahredComponentsModule
  ],
  declarations: [ContactsFormsPage]
})
export class ContactsFormsPageModule {}
