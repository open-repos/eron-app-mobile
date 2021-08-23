import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-apprenant',
  templateUrl: './header-apprenant.component.html',
  styleUrls: ['./header-apprenant.component.scss'],
})
export class HeaderApprenantComponent implements OnInit {

  @Input() titleHeader: string;
  @Input() detailPage: boolean = false;
  @Input() pageBack: string;

  @Input() isShop:boolean = false;
  @Input() numberIcon:number;
  
  @Output() onClickToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {}


  childEvent(event) {
    this.onClickToParent.emit()
  }


}
