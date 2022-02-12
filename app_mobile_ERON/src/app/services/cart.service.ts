import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  // setProduct(product: any) {
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }

  addToCart(product: any) {
    let productExists = false;

    for (let i in this.cartItemList){
      if (this.cartItemList[i].id === product.id){
        this.cartItemList[i].quantity++
        productExists = true
        break;
      }
    }

    if(!productExists){
      this.cartItemList.push({
        id: product.id,
        imageUrl: product.imageUrl,
        title:product.title,
        price:product.price,
        quantity: product.quantity,
      });
    }

    
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice() : number{
    let cartTtotal = 0;
    this.cartItemList.map((item: any) => {
      cartTtotal += (item.price * item.quantity);
    });
    return cartTtotal
  }

  removeCartItem(product:any){
    this.cartItemList.map((item:any,index:any) => {
      if (product.id === item.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList)
  }

}
