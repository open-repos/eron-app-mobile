import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titleHeader: string;
  @Input() detailPage: boolean = false;
  @Input() pageBack: string;
  constructor() { }

  ngOnInit() {}

}
