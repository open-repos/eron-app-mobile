import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfirmiersPageRoutingModule } from './infirmiers-routing.module';

import { InfirmiersPage } from './infirmiers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfirmiersPageRoutingModule
  ],
  declarations: [InfirmiersPage]
})
export class InfirmiersPageModule {}
