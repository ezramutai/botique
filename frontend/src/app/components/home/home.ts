import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { products, Product } from '../../data/products_data'; // ✅ correct path & import

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
  products: Product[] = products; // ✅ use imported data

  currentIndex = 0;
  private autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }
  
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // 3 seconds
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  getRightIndex(): number {
    return (this.currentIndex + 1) % this.products.length;
  }

  getLeftIndex(): number {
    return (this.currentIndex - 1 + this.products.length) % this.products.length;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
  }

  goToSlide(index: number): void {
    if (index >= 0 && index < this.products.length) {
      this.currentIndex = index;
    }
  }
}