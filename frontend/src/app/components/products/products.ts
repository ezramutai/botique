import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {
  products = [
    {
      id: 1,
      name: 'Dress 1',
      description: 'Floral summer dress',
      oldPrice: 3000,
      newPrice: 2500,
      image: 'assets/images/dress1.jpg'
    },
    {
      id: 2,
      name: 'Dress 2',
      description: 'Elegant party wear',
      oldPrice: 4000,
      newPrice: 3500,
      image: 'assets/images/dress2.jpg'
    },
    {
      id: 3,
      name: 'Dress 3',
      description: 'Casual everyday wear',
      newPrice: 2000,
      image: 'assets/images/dress3.jpg'
    },

   {
      id: 1,
      name: 'Dress 1',
      description: 'Floral summer dress',
      oldPrice: 3000,
      newPrice: 2500,
      image: 'assets/images/dress1.jpg'
    },
    {
      id: 2,
      name: 'Dress 2',
      description: 'Elegant party wear',
      oldPrice: 4000,
      newPrice: 3500,
      image: 'assets/images/dress2.jpg'
    },
    {
      id: 3,
      name: 'Dress 3',
      description: 'Casual everyday wear',
      newPrice: 2000,
      image: 'assets/images/dress3.jpg'
    }

  ];

  cart: { product: any; quantity: number }[] = [];
  totalItems = 0;
  totalPrice = 0;

  ngOnInit() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
      this.updateTotals();
    }
  }

  addToCart(product: any) {
    const existing = this.cart.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
    this.saveCart();
  }

  increaseQuantity(item: any) {
    item.quantity++;
    this.saveCart();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.cart = this.cart.filter(i => i !== item);
    }
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateTotals();
  }

  updateTotals() {
    this.totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    this.totalPrice = this.cart.reduce((sum, item) => sum + item.product.newPrice * item.quantity, 0);
  }
}