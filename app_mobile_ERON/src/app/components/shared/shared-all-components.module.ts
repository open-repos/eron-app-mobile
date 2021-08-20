import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconBadgeComponent } from './icon-badge/icon-badge.component';
import { HeaderApprenantComponent } from './header-apprenant/header-apprenant.component';

@NgModule({
    imports: [CommonModule, IonicModule,FontAwesomeModule],
    declarations: [IconBadgeComponent,HeaderApprenantComponent],
    exports:[IconBadgeComponent,HeaderApprenantComponent]
})

export class SharedAllComponentsModule{}