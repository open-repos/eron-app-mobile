import { CardItemLastActivityComponent } from './card-item-last-activity/card-item-last-activity.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardItemHComponent } from './card-item-h/card-item-h.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeaderApprenantComponent } from './header-apprenant/header-apprenant.component';
import { CardItemBoutiqueComponent } from './card-item-boutique/card-item-boutique.component';
import { ShoppingCartModalComponent } from './shopping-cart-modal/shopping-cart-modal.component';
@NgModule({
    imports: [CommonModule, IonicModule,FontAwesomeModule],
    declarations: [CardItemHComponent, CardItemLastActivityComponent,CardItemBoutiqueComponent],
    exports:[CardItemHComponent,CardItemLastActivityComponent,CardItemBoutiqueComponent]
})

export class SharedComponentsApprenantModule{}