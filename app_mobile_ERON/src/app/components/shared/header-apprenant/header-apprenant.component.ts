import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-apprenant',
  templateUrl: './header-apprenant.component.html',
  styleUrls: ['./header-apprenant.component.scss'],
})
export class HeaderApprenantComponent implements OnInit {

  @Input() titleHeader: string;
  @Input() detailPage: boolean = false;
  @Input() pageBack: string;
  
  constructor() { }

  ngOnInit() {}

}
