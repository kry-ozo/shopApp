import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { WaveComponent } from "../../styleElements/wave/wave.component";
@Component({
  selector: 'app-newest-products',
  standalone: true,
  imports: [CommonModule, WaveComponent],
  templateUrl: './newest-products.component.html',
  styleUrl: './newest-products.component.scss'
})
export class NewestProductsComponent {
  private productService = inject(ProductsService);
  products = this.productService.getProducts("4");

  currentIndex = 0;
  itemsPerSlide = 1; // Jeden produkt na slajd
  translateX = 0; // Przesunięcie w poziomie

  nextSlide() {
    if (this.currentIndex < this.products.length - this.itemsPerSlide) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Przejdź na początek, jeśli jesteśmy na końcu
    }
    this.updateTranslateX();
  }

  previousSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.products.length - this.itemsPerSlide; // Przejdź na koniec
    }
    this.updateTranslateX();
  }

  updateTranslateX() {
    this.translateX = -this.currentIndex * 100; // Przesuń o 100% szerokości slajdu
  }
}
