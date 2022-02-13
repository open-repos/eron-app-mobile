import { CartService } from './../../../services/cart.service';
import { EnterTheViewportNotifierDirective } from 'src/app/directives/enter-the-viewport-notifier.directive';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss'],
})
export class ShoppingCartModalComponent implements OnInit {

  // @Input() cartItems: string; // remplacer par l'objet de cartItems une fois que celui sera crée
  @ViewChild('myDiv') myDiv: ElementRef;

  observer: any;
  isBtnBuyVisible : boolean



  public cartItems: any = [];
  public cartTtotal: number;



  constructor(private modalCtrl: ModalController,
    private alertController: AlertController,
    private cartService: CartService) { }

  ngOnInit() {
    this.intersectionObserver();

    this.cartService.getProducts()
    .subscribe(produits=>{
      this.cartItems = produits;
      this.cartTtotal = this.cartService.getTotalPrice();
    })
  }
  
  onCancel(){
    console.log("Cancelmodal")
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBuy(){
    this.modalCtrl.dismiss({ message: 'Vous allez être redigirigé vers la page de paiement' }, 'confirm');
    console.log("BuyFctnmodal")
  }

  emptyCart(){
    this.cartService.removeAllCart();
    this.modalCtrl.dismiss({ message: 'Êtes-vous sur de vouloir vider votre panier?' }, 'empty');
  }


  removeItem(item:any){
    this.cartService.removeCartItem(item);
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
            // console.log("Accepted the offer");
            this.emptyCart();
          },
        },
      ],
    });
  
    await alert.present();
  }


  ngAfterViewInit(){
    // console.log("ngAfterViewInit, mydiv.changes.subscribe(d)")
    // console.log(this.myDiv)
    if (this.myDiv){
    this.observer.observe(this.myDiv.nativeElement)}
  }


  intersectionObserver(){
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
    
    this.observer = new IntersectionObserver((entries)=>{
      console.log("entries[0]",entries[0])
      if(entries[0].isIntersecting){
        console.log('scroll more')
        this.isBtnBuyVisible = true
      } else{
        this.isBtnBuyVisible = false
      }
    }, options);
  }


}