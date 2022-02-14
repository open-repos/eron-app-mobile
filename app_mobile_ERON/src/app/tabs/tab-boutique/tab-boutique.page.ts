import {
  DataSnapshot,
  list,
  Database,
  ref,
  onValue,
  getDatabase,
  onChildChanged,
  onChildRemoved,
} from '@angular/fire/database';
import { ShoppingCartModalComponent } from './../../components/shared/shopping-cart-modal/shopping-cart-modal.component';
import { BoutiqueFormationsService } from './../../services/boutique-formations.service';
import { FormationsBoutique } from './../../models/boutique-formations.model';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab-boutique',
  templateUrl: './tab-boutique.page.html',
  styleUrls: ['./tab-boutique.page.scss'],
})
export class TabBoutiquePage implements OnInit {
  // @Input() isShop:boolean = false;
  // @Input() numberIcon:number;
  boutiqueFormation!: FormationsBoutique[];
  boutiqueFormationsSubscription!: Subscription;
  errorMsg: string;
  items: Observable<any[]>;

  constructor(
    private boutiqueFormationsSrvc: BoutiqueFormationsService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    const db = getDatabase();
    // this.boutiqueFormationsSubscription = this.boutiqueFormationsSrvc
    //   .getFormationBoutiqueFromServer()
    //   .subscribe({
    //     next: (boutiqueFormation) => {
    //       this.boutiqueFormation = boutiqueFormation;
    //     },
    //     error: (err) => (this.errorMsg = err),
    //   });
    console.log(ref(db, 'boutiqueFormations'));
    const starCountRef = ref(db, 'boutiqueFormations');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.boutiqueFormation = data
    });
  }

  gotoItem(e) {
    this.modalCtrl
      .create({
        component: ShoppingCartModalComponent,
        componentProps: { itemsCart: ['this.itemsCart'] },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('go to page achat!');
        } else if (resultData.role === 'empty') {
          console.log('Clear cartItems Component');
        }
      });
  }

  ngOnDestroy() {
    this.boutiqueFormationsSubscription.unsubscribe();
  }
}
