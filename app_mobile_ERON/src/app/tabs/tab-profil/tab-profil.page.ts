import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-profil',
  templateUrl: './tab-profil.page.html',
  styleUrls: ['./tab-profil.page.scss'],
})
export class TabProfilPage implements OnInit {

  iconList=faChevronRight;
  constructor() { }

  ngOnInit() {
  }

}
