import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon-badge',
  templateUrl: './icon-badge.component.html',
  styleUrls: ['./icon-badge.component.scss'],
})
export class IconBadgeComponent implements OnInit {


  // @Input() goToCardItems: function; 
  @Input() notifNumber: number=1;

  @Output() onClick = new EventEmitter();

  click() {
      // do something
      this.onClick.emit()
  }
  constructor() { }

  ngOnInit() {}

}
