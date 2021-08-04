import { Component, Input, OnInit } from '@angular/core';



export interface Item {
  id:string;
  date: string;
  title: string;
  auteurs: string;
  categories: string;
  imageUrl: string;
  description: string;
}

export interface ItemFormation {
  id:string;
  title: string;
  imageUrl: string;
  duree: string;
  logo: string[] | string;
  description: string;
}

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {

  @Input() item: Item;
  @Input() itemFormation: ItemFormation;

  @Input() cssCardType: string ='col-1';

  @Input() isFormation: boolean = false;
  constructor() { }

  ngOnInit() {}

}
