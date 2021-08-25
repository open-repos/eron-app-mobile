import { MenuItem } from './menu.model';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
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
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  providers: [InAppBrowser, AppAvailability],
})
export class MenuPage implements OnInit {
  
  socialMedia = [
    {icon:faFacebookSquare,app:'FACEBOOK'},
    {icon:faTwitterSquare,app:'TWITTER'},
    {icon:faInstagramSquare,app:'INSTAGRAM'},
    {icon:faLinkedin,app:'LINKEDIN'},
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

app: string;

  constructor(private router: Router,
    private platform: Platform,
    private inAppBrowser: InAppBrowser,
    private appAvailability: AppAvailability
    ) {}

  ngOnInit() {
    // this.menu.enable(true,'menu-visitor')
  }

  isBoolean(val): boolean { return typeof val === 'boolean'; }
  onMenuClick(url:string, value:number){
    // this.router.navigateByUrl(url, {state:{example:value}})
    this.router.navigate([url],  { queryParams: { formation: value } })
  }

  socialMediaFct(type: string) {
    switch (type) {
      case 'FACEBOOK': {
        this.openFacebook('ERON.FormationSante', 'https://www.facebook.com/ERON.FormationSante/');
        break;
      }
      case 'INSTAGRAM': {
        this.openInstagram('eron_sante')
        break;
      }
      case 'TWITTER': {
        this.openTwitter('eron_sante');
        break;
      }
      case 'LINKEDIN':{
        this.openLinkedin('eron-sante');
        break;
      }
    }
  }


  openTwitter(name: string) {
    // let app;
    if (this.platform.is('ios')) {
      this.app = 'twitter://';
    } else if (this.platform.is('android')) {
      this.app = 'com.twitter.android';
    } else {
      this.openInApp('https://twitter.com/' + name);
      return;
    }
    this.appAvailability.check(this.app)
      .then((res) => {
        const data = 'twitter://user?screen_name=' + name;
        this.openInApp(data);
      }
      ).catch(err => {
        this.openInApp('https://twitter.com/' + name);
});
  }
  openFacebook(name: string, url:string) {
    // let app : string;
    if (this.platform.is('ios')) {
      this.app = 'fb://';
    } else if (this.platform.is('android')) {
      this.app = 'com.facebook.katana';
    } else {
      this.openInApp('https://www.facebook.com/' + name);
      return;
    }
    this.appAvailability.check(this.app)
      .then(res => {
        const fbUrl = 'fb://facewebmodal/f?href=' + url;
        this.openInApp(fbUrl);
      }
      ).catch(() => {
        this.openInApp('https://www.facebook.com/' + name);
      });
  }

  openInstagram(name: string) {
    // let app;
    if (this.platform.is('ios')) {
      this.app = 'instagram://';
    } else if (this.platform.is('android')) {
      this.app = 'com.instagram.android';
    } else {
      this.openInApp('https://www.instagram.com/' + name);
      return;
    }
    this.appAvailability.check(this.app)
      .then((res) => {
        this.openInApp('instagram://user?username=' + name);
      }
      ).catch(err => {
        this.openInApp('https://www.instagram.com/' + name);
      });
  }


  openLinkedin(name: string) {
    // let app;
    if (this.platform.is('ios')) {
      this.app = 'linkedin://';
    } else if (this.platform.is('android')) {
      this.app = 'com.linkedin.android';
    } else {
      this.openInApp('https://www.linkedin.com/company/' + name);
      return;
    }
    this.appAvailability.check(this.app)
      .then((res) => {
        this.openInApp('linkedin://user?username=' + name);
      }
      ).catch(err => {
        this.openInApp('https://www.linkedin.com/company/' + name);
      });
  }

  openInApp(url:string) {
    this.inAppBrowser.create(url, '_system')
  }

}
