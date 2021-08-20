import { Component, Input, OnInit } from '@angular/core';
import { faCalendar, faBook, faClock, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../card-item/card-item.component';

@Component({
  selector: 'app-card-item-last-activity',
  templateUrl: './card-item-last-activity.component.html',
  styleUrls: ['./card-item-last-activity.component.scss'],
})
export class CardItemLastActivityComponent implements OnInit {

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
