import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { cartItem } from './cart-item.model';

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.scss'
})
export class ShopCartComponent {
  private cartService = inject(CartService);
  cartItems:cartItem[] = this.cartService.getCartProducts();
  showCart: boolean = false;
  cartPrices = this.cartService.getCartPrice();
  cartPrice = this.cartService.cartPrice;
  cartOpened:boolean = false;

  deleteItemFromCart(id:string){
    this.cartService.deleteFromCart(id);
  }
  
  toggleCart(){
    this.showCart = !this.showCart;
    this.cartOpened = !this.cartOpened;
  }

  get getCartClass(){
    if(this.showCart){
      return 'show-cart';
    }else{
      return "hide-cart";
    }
    
  }

  get getIconCartClass(){
    if(this.showCart){
      return "closed";
    }else{
      return 'opened';
    }
    
  }

  get getIconXClass(){
    if(this.showCart){
      return "opened";
    }else{
      return 'closed';
    }
  }
  get getOpenCart(){
    if(this.showCart){
      return "opened";
    }else{
      return 'closed';
    }
  }
    
  }
  
    
  

