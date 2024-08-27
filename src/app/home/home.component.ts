import { Component } from '@angular/core';
import { LandscapeComponent } from "./landscape/landscape.component";
import { ProductsFilteredComponent } from "./products-filtered/products-filtered.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandscapeComponent, ProductsFilteredComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
