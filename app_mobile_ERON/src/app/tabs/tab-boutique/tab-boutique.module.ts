import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabBoutiquePageRoutingModule } from './tab-boutique-routing.module';

import { TabBoutiquePage } from './tab-boutique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabBoutiquePageRoutingModule
  ],
  declarations: [TabBoutiquePage]
})
export class TabBoutiquePageModule {}
