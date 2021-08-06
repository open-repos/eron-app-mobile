import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardItemHComponent } from './card-item-h/card-item-h.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeaderApprenantComponent } from './header-apprenant/header-apprenant.component';
@NgModule({
    imports: [CommonModule, IonicModule,FontAwesomeModule],
    declarations: [HeaderApprenantComponent,CardItemHComponent],
    exports:[HeaderApprenantComponent,CardItemHComponent]
})

export class SharedComponentsApprenantModule{}