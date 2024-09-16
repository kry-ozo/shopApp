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
  
  toggleCart(){
    this.showCart = !this.showCart;
  }

  get getCartClass(){
    if(this.showCart){
      return 'show-cart';
    }else{
      return "hide-cart";
    }
    
  }
}
