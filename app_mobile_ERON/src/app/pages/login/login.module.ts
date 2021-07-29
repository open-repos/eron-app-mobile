import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { SahredComponentsModule } from 'src/app/components/shared/shared-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    SahredComponentsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
