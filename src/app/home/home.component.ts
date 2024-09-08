import { Component } from '@angular/core';
import { LandscapeComponent } from "./landscape/landscape.component";
import { NewestProductsComponent } from "./newest-products/newest-products.component";
import { WaveComponent } from "../styleElements/wave/wave.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandscapeComponent, NewestProductsComponent, WaveComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
