import { Component, Input, OnInit } from '@angular/core';
import { faCalendar, faBook, faClock, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export interface Item {
  id:string;
  imageUrl: string;
  title: string;
  moduleSate: string;
  progressSate: string;
  deadline: string | Date;
  timeSpend: string;
}

@Component({
  selector: 'app-card-item-h',
  templateUrl: './card-item-h.component.html',
  styleUrls: ['./card-item-h.component.scss'],
})
export class CardItemHComponent implements OnInit {

  faCalendar = faCalendar;
  faBook = faBook;
  faClock = faClock;
  faArrowDown = faArrowDown;

  @Input() item: Item;
  
  @Input() cssCardType: string ='col-1';

  // @Input() isFormation: boolean = false;

  constructor() { }

  ngOnInit() {}

}
