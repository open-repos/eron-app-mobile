import { MenuItem } from './menu.model';
import { Component, Input, OnInit } from '@angular/core';
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
import { Router } from '@angular/router';
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

  // @Input() formationItem: string;

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
          id:0,
          icon:undefined,
        },
        {
          title: 'ERON Santé',
          url: '/actu-eron',
          id:1,
          icon:undefined
        },
        {
          title: 'Interview',
          url: '/actu-interview',
          id:2,
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
          url: '/formations',
          id: 0,
          icon:faUserMd
        },
        {
          title: 'Dentistes',
          url: '/formations',
          id: 1,
          icon:faTeethOpen
        },        
        {
          title: 'Infirmiers',
          url: '/formations',
          id: 2,
          icon:faUserNurse
        },
        {
          title: 'Pharmaciens',
          url: '/formations',
          id: 3,
          icon:faPills
        },
        {
          title: 'Kinésitérapeuthes',
          url: '/formations',
          id: 4,
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


  constructor(private router: Router) {}

  ngOnInit() {
    // this.menu.enable(true,'menu-visitor')
  }

  isBoolean(val): boolean { return typeof val === 'boolean'; }
  onMenuClick(url:string, value:number){
    // this.router.navigateByUrl(url, {state:{example:value}})
    this.router.navigate([url],  { queryParams: { formation: value } })
  }
}
