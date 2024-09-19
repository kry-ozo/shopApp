import { Injectable, signal } from '@angular/core';
import { cartItem } from './cart-item.model';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<cartItem[]>([]);
  cartPrice= signal<number>(0);
  getCartProducts(){
    return this.cartItems();
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
      if(this.cartItems().length<=4){
        const oldCartItems = this.cartItems();
        oldCartItems.push(newCartItem)
        this.cartItems.set(oldCartItems);
        this.cartPrice.update(price=>price+newCartItem.productPrice);
        console.log(this.cartItems())
      }
      
    }
  }

  deleteFromCart(productId: string){
    const deletedCartItem = this.cartItems().find(cartItem=>cartItem.productId ==productId)
    console.log(deletedCartItem)
    if(deletedCartItem){
      this.cartPrice.update(price=>price-deletedCartItem.productPrice);

      const cartItems = this.cartItems();
      const indexOfDeletedItem = cartItems.indexOf(deletedCartItem);
      cartItems.splice(indexOfDeletedItem, 1);
      this.cartItems.set(cartItems);
      console.log(this.cartItems())
    }

    
    
    // this.cartItems.set(newCartItems);
    
  }
  constructor() { }
}
