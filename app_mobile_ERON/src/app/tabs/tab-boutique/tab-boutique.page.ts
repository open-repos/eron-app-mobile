import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-boutique',
  templateUrl: './tab-boutique.page.html',
  styleUrls: ['./tab-boutique.page.scss'],
})
export class TabBoutiquePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gotoItem(e) {
    console.log(e)
  }

}
