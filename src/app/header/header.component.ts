import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
