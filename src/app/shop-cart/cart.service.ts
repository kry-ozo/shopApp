import { Injectable, signal } from '@angular/core';
import { cartItem } from './cart-item.model';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: cartItem[] = [];
  cartPrice= signal<number>(0);
  getCartProducts(){
    return this.cartItems;
  }
  getCartPrice(){
    return this.cartPrice();
  }
  addToCart(product: Product| undefined){
    if(product){
      const newCartItem: cartItem = {
        productId: product.id,
        productName: product.name,
        productPrice: product.price
      };
      this.cartItems.push(newCartItem);
      this.cartPrice.update(price=>price+newCartItem.productPrice);
      console.log(this.cartPrice)
    }
  }

  deleteFromCart(productId: string){
    this.cartItems = this.cartItems.filter(cartItem=>{
      cartItem.productId !=productId
    })
    console.log(this.cartItems);
  }
  constructor() { }
}
