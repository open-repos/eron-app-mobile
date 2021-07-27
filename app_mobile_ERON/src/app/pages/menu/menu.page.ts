import { MenuItem } from './menu.model';
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

  pages: MenuItem[] = [
      {
      title: 'Accueil',
      isOpen: undefined,
      // url: '/menu/home',
       url: '/',
      icon: faHome,
      children: undefined,
    },
    {
      title: 'Actualités',
      isOpen: false,
      url: undefined,
      icon:faNewspaper,
      children: [
        {
          title: 'Presse',
          url: '/actu-presse',
          icon:undefined,
        },
        {
          title: 'ERON Santé',
          url: '/actu-eron',
          icon:undefined
        },
        {
          title: 'Interview',
          url: '/actu-interview',
          icon:undefined
        },
      ],
    },
    {
      title: 'Formations',
      isOpen: false,
      url: undefined,
      icon:faBookMedical,
      children: [
        {
          title: 'Médecins',
          url: '/formations-medecins',
          icon:faUserMd
        },
        {
          title: 'Dentistes',
          url: '/formations-dentistes',
          icon:faTeethOpen
        },        
        {
          title: 'Infirmiers',
          url: '/formations-infirmiers',
          icon:faUserNurse
        },
        {
          title: 'Pharmaciens',
          url: '/formations-pharmaciens',
          icon:faPills
        },
        {
          title: 'Kinésitérapeuthes',
          url: '/formations-kine',
          icon:faHands
        },
      ],
    },
    {
      title: 'Contacts',
      isOpen: undefined,
      url: '/contacts',
      icon: faMailBulk,
      children: undefined,
    },
    {
      title: 'FAQ',
      isOpen: undefined,
      url: '/faq',
      icon: farQuestionCircle,
      children: undefined,
    },
    {
      title: 'Connexion',
      isOpen: undefined,
      url: '/login',
      icon: faUser,
      children: undefined,
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
