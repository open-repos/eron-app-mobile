import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title:'Accueil',
      url:'/menu/home',
      icon:'home',
    },
    {
      title:'FAQ',
      url:'/menu/faq',
      icon:'help'
    },
    {
      title:'Contacts',
      url:'/menu/contacts',
      icon:'contacts'
    },
    {
      title:'Connexion',
      url:'/menu/login',
      icon:'home'
    },
    {
      title:'Actualités',
      isOpen: false,
      children: [
    {
      title:'Presse',
      url:'/menu/actu-presse',
      // icon:'home'
    },
    {
      title:'ERON Santé',
      url:'/menu/actu-eron',
      // icon:'home'
    },
    {
      title:'Interview',
      url:'/menu/actu-interview',
      // icon:'home'
    }
      ]
    }
  ]

  constructor() { }
  
  ngOnInit() {
  }

}
