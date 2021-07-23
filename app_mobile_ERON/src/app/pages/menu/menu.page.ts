import { Component, OnInit } from '@angular/core';
import {
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
  faUser,
  faMailBulk,
  faUserMd,
  faTeethOpen,
  faPills,
  faUserNurse,
  faHands,
  faBookMedical,
} from '@fortawesome/free-solid-svg-icons';

import {
  faQuestionCircle as farQuestionCircle,
} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  socialMedia = [
    {icon:faFacebookSquare},
    {icon:faTwitterSquare},
    {icon:faInstagramSquare},
    {icon:faLinkedin},
  ]

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
      title: 'FAQ',
      url: '/menu/faq',
      icon: farQuestionCircle,
    },
    {
      title: 'Connexion',
      url: '/menu/login',
      icon: faUser,
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
