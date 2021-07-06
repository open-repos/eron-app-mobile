import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  emptyIcon:IconProp;
  pages = [
    {
      title: 'Accueil',
      url: '/menu/home',
      icon: faHome,
    },
    {
      title: 'Actualités',
      isOpen: false,
      icon:faNewspaper,
      children: [
        {
          title: 'Presse',
          url: '/menu/actu-presse',
          icon:false
        },
        {
          title: 'ERON Santé',
          url: '/menu/actu-eron',
          icon:false
        },
        {
          title: 'Interview',
          url: '/menu/actu-interview',
          icon:false
        },
      ],
    },
    {
      title: 'Formations',
      isOpen: false,
      icon:faBookMedical,
      children: [
        {
          title: 'Médecins',
          url: '/menu/formations-medecins',
          icon:faUserMd
        },
        {
          title: 'Dentistes',
          url: '/menu/formations-dentistes',
          icon:faTeethOpen
        },        
        {
          title: 'Infirmiers',
          url: '/menu/formations-infirmiers',
          icon:faUserNurse
        },
        {
          title: 'Pharmaciens',
          url: '/menu/formations-pharmaciens',
          icon:faPills
        },
        {
          title: 'Kinésitérapeuthes',
          url: '/menu/formations-kine',
          icon:faHands
        },
      ],
    },
    {
      title: 'Contacts',
      url: '/menu/contacts',
      icon: faMailBulk,
    },
    {
      title: 'Connexion',
      url: '/menu/login',
      icon: faUser,
    },
    {
      title: 'FAQ',
      url: '/menu/faq',
      icon: farQuestionCircle,
    },
  ];

  constructor() {}

  ngOnInit() {
    // this.menu.enable(true,'menu-visitor')
  }

  isBoolean(val): boolean { return typeof val === 'boolean'; }
  // onMenuClick(id:string){
  //   // console.log(id + "clicked")
  //   this.router.navigate([id])
  //   // this.menu.close()
  // }
}
