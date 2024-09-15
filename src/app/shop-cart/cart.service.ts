import { Injectable } from '@angular/core';
import { cartItem } from './cart-item.model';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: cartItem[] = [];
  getCartProducts(){
    return this.cartItems;
  }
  addToCart(product: Product| undefined){
    if(product){
      const newCartItem: cartItem = {
        productId: product.id,
        productName: product.name,
        productPrice: product.price
      };
      this.cartItems.push(newCartItem);
      console.log(this.cartItems);
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
