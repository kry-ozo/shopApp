import { Component } from '@angular/core';
import { LandscapeComponent } from "./landscape/landscape.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandscapeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
