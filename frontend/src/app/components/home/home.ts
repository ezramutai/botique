import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  detail: string;
  price: number;
  image: string;
}

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
  products: Product[] = [
    {
      name: 'Elegant Dress',
      detail: 'Perfect for weddings and parties',
      price: 2999,
      image: 'assets/images/dress1.jpg'
    },
    {
      name: 'Classic Blazer',
      detail: 'Stay classy and warm',
      price: 4499,
      image: 'assets/images/dress2.jpg'
    },
    {
      name: 'African Kitenge',
      detail: 'Cultural meets modern fashion',
      price: 3499,
      image: 'assets/images/dress3.jpg'
    },
    {
      name: 'Denim Jacket',
      detail: 'Trendy casual wear',
      price: 2799,
      image: 'assets/images/dress1.jpg'
    },
    {
      name: 'Floral Skirt',
      detail: 'Light, breezy, and stylish',
      price: 1999,
      image: 'assets/images/dress2.jpg'
    },
    {
      name: 'Summer Maxi',
      detail: 'Comfortable and elegant',
      price: 2599,
      image: 'assets/images/dress3.jpg'
    },
    {
      name: 'Party Gown',
      detail: 'Shine at every event',
      price: 3999,
      image: 'assets/images/dress1.jpg'
    },
    {
      name: 'Office Suit',
      detail: 'Professional and chic',
      price: 4799,
      image: 'assets/images/dress2.jpg'
    }
  ];

  get visibleProducts(): Product[] {
    const total = this.products.length;
    const prev = (this.currentIndex - 1 + total) % total;
    const next = (this.currentIndex + 1) % total;
    return [this.products[prev], this.products[this.currentIndex], this.products[next]];
  }
  
  currentIndex = 0;
  autoScrollInterval: any;

  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoScrollInterval);
  }

  startAutoScroll(): void {
    this.autoScrollInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.products.length) % this.products.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }
}