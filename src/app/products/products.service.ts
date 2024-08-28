import { Injectable } from '@angular/core';
import { products_placeholder } from './products_placeholder';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = products_placeholder;
  getProducts(filter:string){
    
      switch (filter) {
        case '1':
            return this.products.slice().sort((a, b) => a.name.localeCompare(b.name));
        case '2':
            return this.products.slice().sort((a, b) => b.price - a.price);
        case '3':
            return this.products.slice().sort((a, b) => a.price - b.price);
        case '4':
            return this.products.slice().sort((a, b) => b.dateAdded.getTime() - a.dateAdded.getTime());
        case '5':
            return this.products.slice().sort((a, b) => a.dateAdded.getTime() - b.dateAdded.getTime());
        default:
            return this.products;
    }
    
    
  }
  getProduct(id:string){
    const product = this.products.find(product=>{
        return product.id ===id
    })
    return product
  }
  getFilterName(filter: string){
    switch (filter) {
      case '1':
          return "name"
      case '2':
          return'highest price'
      case '3':
          return "lowest price"
      case '4':
          return 'newest'
      case '5':
          return "oldest"
      default:
          return "";
  }
  }
  deleteProduct(){

  }
  constructor() { }
}
