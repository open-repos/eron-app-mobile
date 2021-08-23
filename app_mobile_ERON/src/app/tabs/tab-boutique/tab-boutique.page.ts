import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-boutique',
  templateUrl: './tab-boutique.page.html',
  styleUrls: ['./tab-boutique.page.scss'],
})
export class TabBoutiquePage implements OnInit {


  // @Input() isShop:boolean = false;
  // @Input() numberIcon:number;

  
  constructor() { }

  ngOnInit() {
  }

  gotoItem(e) {
    console.log(e)
  }


}
