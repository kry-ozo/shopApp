import { Component } from '@angular/core';
import { NewestProductsComponent } from "../newest-products/newest-products.component";

@Component({
  selector: 'app-landscape',
  standalone: true,
  imports: [NewestProductsComponent],
  templateUrl: './landscape.component.html',
  styleUrl: './landscape.component.scss'
})
export class LandscapeComponent {

}
