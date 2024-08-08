import { Injectable } from '@angular/core';
import { products_placeholder } from './products_placeholder';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = products_placeholder;
  getProducts(filter?:any){
    return this.products;
  }
  deleteProduct(){

  }
  constructor() { }
}
