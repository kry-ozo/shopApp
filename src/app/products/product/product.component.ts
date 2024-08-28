import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RatingModule, FormsModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    this.value = this.product.rating
  }
  
  @Input({required: true}) product!:Product
  value: number = 5
}
