import { CardItemComponent } from './card-item/card-item.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TypeofPipe } from 'src/app/pipes/typeof.pipe';

@NgModule({
    imports: [CommonModule, IonicModule,FontAwesomeModule],
    declarations: [HeaderComponent,CardItemComponent, TypeofPipe],
    exports:[HeaderComponent,CardItemComponent, TypeofPipe]
})

export class SharedComponentsModule{}