import { BoutiqueFormationsService } from './../../services/boutique-formations.service';
import { FormationsBoutique } from './../../models/boutique-formations.model';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab-boutique',
  templateUrl: './tab-boutique.page.html',
  styleUrls: ['./tab-boutique.page.scss'],
})
export class TabBoutiquePage implements OnInit {


  // @Input() isShop:boolean = false;
  // @Input() numberIcon:number;
boutiqueFormation!: any[];
boutiqueFormationsSubscription!: Subscription;
  
  constructor(private boutiqueFormationsSrvc: BoutiqueFormationsService) { }

  ngOnInit() {
    this.boutiqueFormationsSubscription = 
    this.boutiqueFormationsSrvc.boutiqueFormationsSubject.subscribe((boutiqueFormation: any[])=>{
this.boutiqueFormation = boutiqueFormation;});
this.boutiqueFormationsSrvc.getFormationBoutiqueFromServer();
    //   console.log("returnHttp", returnGetFromServer)
    this.boutiqueFormationsSrvc.emitBoutiqueFormationSubject();
  }




  gotoItem(e) {
    console.log(e)
  }


}
