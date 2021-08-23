import { Component, Input, OnInit } from '@angular/core';
import { FormationsBoutique } from 'src/app/models/boutique-formations.model';

@Component({
  selector: 'app-card-item-boutique',
  templateUrl: './card-item-boutique.component.html',
  styleUrls: ['./card-item-boutique.component.scss'],
})
export class CardItemBoutiqueComponent implements OnInit {

  @Input() item: FormationsBoutique;

  @Input() cssCardType: string ='col-1';

  // @Input() isFormation: boolean = false;
  constructor() { }

  ngOnInit() {}
}
