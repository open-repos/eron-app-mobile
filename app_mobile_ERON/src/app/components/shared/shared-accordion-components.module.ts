import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [CommonModule, IonicModule,FontAwesomeModule],
    declarations: [AccordionItemComponent],
    exports:[AccordionItemComponent]
})

export class SharedAccordionModule{}