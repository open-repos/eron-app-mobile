import { CardItemComponent } from './card-item/card-item.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
    imports: [CommonModule, IonicModule,FontAwesomeModule],
    declarations: [HeaderComponent, AccordionItemComponent,CardItemComponent],
    exports:[HeaderComponent,AccordionItemComponent,CardItemComponent]
})

export class SahredComponentsModule{}