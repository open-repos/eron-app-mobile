import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeaderApprenantComponent } from './header-apprenant/header-apprenant.component';
@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [HeaderApprenantComponent],
    exports:[HeaderApprenantComponent]
})

export class SahredComponentsApprenantModule{}