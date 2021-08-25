import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconBadgeComponent } from './icon-badge/icon-badge.component';
import { HeaderApprenantComponent } from './header-apprenant/header-apprenant.component';
import { ShoppingCartModalComponent } from './shopping-cart-modal/shopping-cart-modal.component';

@NgModule({
    imports: [CommonModule, IonicModule,FontAwesomeModule],
    declarations: [IconBadgeComponent,HeaderApprenantComponent,ShoppingCartModalComponent],
    exports:[IconBadgeComponent,HeaderApprenantComponent,ShoppingCartModalComponent]
})

export class SharedAllComponentsModule{}