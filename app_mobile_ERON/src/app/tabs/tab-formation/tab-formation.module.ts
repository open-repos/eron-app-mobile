import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabFormationPageRoutingModule } from './tab-formation-routing.module';

import { TabFormationPage } from './tab-formation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabFormationPageRoutingModule
  ],
  declarations: [TabFormationPage]
})
export class TabFormationPageModule {}
