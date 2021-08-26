import { MenuPageModule } from './pages/menu/menu.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SharedComponentsModule} from './components/shared/shared-components.module'

import { LOCALE_ID } from '@angular/core';
import localefr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localefr)

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

import {
  faTwitter,
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
// import { MenuController } from '@ionic/angular';

import {
  // menuIcon
  faHome,
  faNewspaper,
  faBookOpen,
  faQuestionCircle,
  faEnvelopeOpenText,
  faUser,
  //menuIcon +
  faAddressBook,
  faEnvelopeOpen,
  faEnvelope,
  faMailBulk,
  faUserCircle,
  //formationsIcon  et Medical
  faStethoscope,
  faUserMd,
  faBriefcaseMedical,
  faTeethOpen,
  faPills,
  faUserNurse,
  faHands,
  faSyringe,
  faClinicMedical,
  faTabletAlt,
  //tabBarIcon
  faBook,
  faBookMedical,
  faShoppingCart,
  //iconUX
  faArrowRight,
  faBell,
  faBellSlash,
  faCalendarAlt,
  faAngleDown,
  faAngleUp,
  faAngleRight,
  faAngleLeft,
  faAt,
  faClock,
  //icon Contacts
  faPhoneSquareAlt,
  faMapMarkerAlt,
  //icon formulaire,
  faEye,
  faLock,
  faChevronRight,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import {
  faBellSlash as farBellSlash,
  faCalendarAlt as farCalendarAlt,
  faNewspaper as farNewspaper,
  faQuestionCircle as farQuestionCircle,
  faAddressBook as farAddressBook,
  faEnvelope as farEnvelope,
} from '@fortawesome/free-regular-svg-icons';

import {
  IonicModule,
  IonicRouteStrategy,
  MenuController,
} from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AllowOverflowDirective } from './allow-overflow.directive';
import { TypeofPipe } from './pipes/typeof.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EnterTheViewportNotifierDirective } from './directives/enter-the-viewport-notifier.directive';

@NgModule({
  declarations: [AppComponent, AllowOverflowDirective, EnterTheViewportNotifierDirective],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MenuPageModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {
    provide: LOCALE_ID, 
    useValue: "fr"
  },],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // library.addIconPacks(fas, fab, far);
    library.addIcons(
      //icon Solid
      // menuIcon
      faHome,
      faNewspaper,
      faBookOpen,
      faQuestionCircle,
      faEnvelopeOpenText,
      faUser,
      //menuIcon +
      faAddressBook,
      faEnvelopeOpen,
      faEnvelope,
      faMailBulk,
      faUserCircle,
      //formationsIcon  et Medical
      faStethoscope,
      faUserMd,
      faBriefcaseMedical,
      faTeethOpen,
      faPills,
      faUserNurse,
      faHands,
      faSyringe,
      faClinicMedical,
      faTabletAlt,
      //tabBarIcon
      faBook,
      faBookMedical,
      faShoppingCart,
      //iconUX
      faArrowRight,
      faBell,
      faBellSlash,
      faCalendarAlt,
      faAngleDown,
      faAngleUp,
      faAngleRight,
      faAngleLeft,
      faAt,
      faChevronRight,
      faChevronUp,
      faClock,
      //iconRegular
      //
      farBellSlash,
      farCalendarAlt,
      farNewspaper,
      farQuestionCircle,
      farAddressBook,
      farEnvelope,
      //icon brands
      faTwitter,
      faFacebookSquare,
      faTwitterSquare,
      faLinkedin,
      faInstagramSquare,
      //icon Contacts
      faPhoneSquareAlt,
      faMapMarkerAlt,
        //icon formulaire,
      faEye,
      faLock,
    );
  }
}
