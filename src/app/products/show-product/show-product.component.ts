import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';
import { WaveComponent } from "../../styleElements/wave/wave.component";

@Component({
  selector: 'app-show-product',
  standalone: true,
  imports: [WaveComponent],
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.scss'
})
export class ShowProductComponent implements OnInit {
  
  private activatedRoute = inject(ActivatedRoute)
  private productsService = inject(ProductsService)
  private destroyRef = inject(DestroyRef)
  productId!: string
  product!: Product | undefined
  
  ngOnInit(): void {
   const paramMap = this.activatedRoute.paramMap.subscribe(params=>{
    this.productId = params.get('id') || '0'
   }) 
   this.product = this.productsService.getProduct(this.productId)
   console.log(this.product)
   this.destroyRef.onDestroy(()=>{
    paramMap.unsubscribe()
   }) 
  }
  

}
