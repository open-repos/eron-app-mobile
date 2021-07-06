import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DentistesPageRoutingModule } from './dentistes-routing.module';

import { DentistesPage } from './dentistes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DentistesPageRoutingModule
  ],
  declarations: [DentistesPage]
})
export class DentistesPageModule {}
