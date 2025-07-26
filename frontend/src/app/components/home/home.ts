import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Product {
  name: string;
  detail: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  products: Product[] = [
    {
      name: 'Floral Summer Dress',
      detail: 'Light and breezy with floral prints.',
      price: 2500,
      image: 'assets/images/dress1.jpg'
    },
    {
      name: 'Denim Jacket',
      detail: 'Classic blue with a modern fit.',
      price: 4500,
      image: 'assets/images/dress2.jpg'
    },
    {
      name: 'Chic Handbag',
      detail: 'Compact, elegant, and colorful.',
      price: 3200,
      image: 'assets/images/dress3.jpg'
    },
    {
      name: 'Casual Sneakers',
      detail: 'Comfort for everyday wear.',
      price: 3900,
      image: 'assets/images/dress1.jpg'
    },
    {
      name: 'Ankara Maxi Dress',
      detail: 'Bold African patterns for standout events.',
      price: 5300,
      image: 'assets/images/dress2.jpg'
    }
  ];

  currentIndex = 0;
  visibleProducts: Product[] = [];
  autoplayInterval: any;

  constructor() {
    this.updateVisibleProducts();
    this.startAutoplay();
  }

  updateVisibleProducts(): void {
    const len = this.products.length;

    const left = this.products[(this.currentIndex - 1 + len) % len];
    const center = this.products[this.currentIndex % len];
    const right = this.products[(this.currentIndex + 1) % len];

    this.visibleProducts = [left, center, right];
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
    this.updateVisibleProducts();
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.products.length) % this.products.length;
    this.updateVisibleProducts();
  }

  goTo(index: number): void {
    this.currentIndex = index;
    this.updateVisibleProducts();
    this.resetAutoplay();
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, 4000);
  }

  stopAutoplay(): void {
    clearInterval(this.autoplayInterval);
  }

  resetAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }
}