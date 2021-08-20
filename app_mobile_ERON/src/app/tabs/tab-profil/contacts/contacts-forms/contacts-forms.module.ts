import { SharedComponentsApprenantModule } from './../../../../components/shared/shared-components-apprenant.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsFormsPageRoutingModule } from './contacts-forms-routing.module';

import { ContactsFormsPage } from './contacts-forms.page';
import { SharedAllComponentsModule } from 'src/app/components/shared/shared-all-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ContactsFormsPageRoutingModule,
    SharedComponentsApprenantModule,
    SharedAllComponentsModule
  ],
  declarations: [ContactsFormsPage]
})
export class ContactsFormsPageModule {}
