import { SharedAccordionModule } from './../../components/shared/shared-accordion-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaqPageRoutingModule } from './faq-routing.module';
import { FaqPage } from './faq.page';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqPageRoutingModule,
    SharedComponentsModule,
    SharedAccordionModule
  ],
  declarations: [FaqPage]
})
export class FaqPageModule {}
