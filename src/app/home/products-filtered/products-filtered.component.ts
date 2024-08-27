import { Component } from '@angular/core';
import { FilterComponent } from "./filter/filter.component";

@Component({
  selector: 'app-products-filtered',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './products-filtered.component.html',
  styleUrl: './products-filtered.component.scss'
})
export class ProductsFilteredComponent {

}
