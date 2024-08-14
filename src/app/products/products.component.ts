import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FiltersComponent } from "./filters/filters.component";
import { ProductsService } from './products.service';
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FiltersComponent, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.products())
  }
  productsService = inject(ProductsService)
  filter= signal("0")
  filterName = signal("")


  getFilters(filter: string){
    this.filter.set(filter)
    this.filterName.set(this.productsService.getFilterName(filter))

  }
  products = computed(() => this.productsService.getProducts(this.filter()))
}
