import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggled:boolean = false;
  toggleMenu(){
    this.toggled = !this.toggled
  }

  get menu(){
    if(this.toggled){
      return'showed-menu'
    }else{
      return 'hidden-menu'
    }
  }
}
