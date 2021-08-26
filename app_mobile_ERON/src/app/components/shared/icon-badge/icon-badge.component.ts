import { CartService } from './../../../services/cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { BoutiqueFormationsService } from 'src/app/services/boutique-formations.service';

@Component({
  selector: 'app-icon-badge',
  templateUrl: './icon-badge.component.html',
  styleUrls: ['./icon-badge.component.scss'],
})
export class IconBadgeComponent implements OnInit {

  // iconShopping = faShoppingCart;
  // @Input() goToCardItems: function; 
  @Input() notifNumber: number=0;

  @Output() onClick = new EventEmitter();

  click() {
      // do something
      this.onClick.emit()
  }
  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(products => {
      this.notifNumber = 0;
      products.map((item: any) => {
        this.notifNumber += (item.quantity);
        console.log(item.quantity)
      });
      // this.notifNumber=products.length;
    })
    // this.boutiqueSrvc.getProfileObs().subscribe(profile=> this.notifNumber = profile)
  }

}
