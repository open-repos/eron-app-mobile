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

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {

  @Input() item: Item;

  @Input() cssCardType: string ='col-1';
  constructor() { }

  ngOnInit() {}

}
