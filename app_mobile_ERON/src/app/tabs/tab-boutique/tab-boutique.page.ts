import { ShoppingCartModalComponent } from './../../components/shared/shopping-cart-modal/shopping-cart-modal.component';
import { BoutiqueFormationsService } from './../../services/boutique-formations.service';
import { FormationsBoutique } from './../../models/boutique-formations.model';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalController, AlertController } from '@ionic/angular';

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
  
  constructor(private boutiqueFormationsSrvc: BoutiqueFormationsService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.boutiqueFormationsSubscription = 
    this.boutiqueFormationsSrvc.boutiqueFormationsSubject.subscribe((boutiqueFormation: any[])=>{
this.boutiqueFormation = boutiqueFormation;});
this.boutiqueFormationsSrvc.getFormationBoutiqueFromServer();
    //   console.log("returnHttp", returnGetFromServer)
    this.boutiqueFormationsSrvc.emitBoutiqueFormationSubject();
  }



  gotoItem(e) {
    this.modalCtrl.create({component: ShoppingCartModalComponent,
      componentProps: { itemsCart: ['this.itemsCart'] }})
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('go to page achat!');
      } else if(resultData.role === 'empty'){
        console.log('Clear cartItems Component');
      }
    });
}


}



