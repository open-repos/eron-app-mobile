import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title:'Accueil',
      url:'/home',
      icon:'home',
    },
    {
      title:'FAQ',
      url:'/faq',
      icon:'help'
    },
    {
      title:'Contacts',
      url:'/contacts',
      icon:'contacts'
    },
    {
      title:'Connexion',
      url:'/login',
      icon:'home'
    },
    {
      title:'Actualités',
      isOpen: false,
      children: [
    {
      title:'Presse',
      url:'/actu-presse',
      // icon:'home'
    },
    {
      title:'ERON Santé',
      url:'/actu-eron',
      // icon:'home'
    },
    {
      title:'Interview',
      url:'/actu-interview',
      // icon:'home'
    }
      ]
    }
  ]

  constructor(private menu:MenuController, private router: Router) { }
  
  ngOnInit() {
    // this.menu.enable(true,'menu-visitor')
  }

  // onMenuClick(id:string){
  //   // console.log(id + "clicked")
  //   this.router.navigate([id])
  //   // this.menu.close()
  // }
}
