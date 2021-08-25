import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss'],
})
export class ShoppingCartModalComponent implements OnInit {

  @Input() cartItems: string; // remplacer par l'objet de cartItems une fois que celui sera crée

  constructor(private modalCtrl: ModalController,
    private alertController: AlertController) { }

  ngOnInit() {}
  
  onCancel(){
    console.log("Cancelmodal")
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBuy(){
    this.modalCtrl.dismiss({ message: 'Vous allez être redigirigé vers la page de paiement' }, 'confirm');
    console.log("BuyFctnmodal")
  }

  emptyCart(){
    this.modalCtrl.dismiss({ message: 'Êtes-vous sur de vouloir vider votre panier?' }, 'empty');
  }




  async showOptions() {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "Êtes vous sur de vouloir vider votre panier ?",
      buttons: [
        {
          text: "Annuler",
          role: "cancel",
          handler: () => {
            console.log("Annuler");
          },
        },
        {
          text: "Confirmer",
          handler: () => {
            console.log("Accepted the offer");
            this.emptyCart();
          },
        },
      ],
    });
  
    await alert.present();
  }


}
