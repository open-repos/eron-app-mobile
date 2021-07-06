import { MenuPageModule } from './pages/menu/menu.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

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

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    MenuPageModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
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
    );
  }
}
