import { Component } from '@angular/core';
import { FiltersComponent } from "./filters/filters.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FiltersComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
