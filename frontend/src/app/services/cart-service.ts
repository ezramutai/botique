import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cart$ = this.cartItems.asObservable();

  constructor() {}

  getCart() {
    return this.cartItems.getValue();
  }

  addToCart(product: any) {
    const current = this.getCart();
    const exists = current.find(p => p.id === product.id);
    if (!exists) {
      product.quantity = 1;
      this.cartItems.next([...current, product]);
    }
  }

  removeFromCart(productId: number) {
    const updated = this.getCart().filter(p => p.id !== productId);
    this.cartItems.next(updated);
  }

  updateQuantity(productId: number, change: number) {
    const updated = this.getCart().map(item => {
      if (item.id === productId) {
        const newQty = Math.max(item.quantity + change, 1);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    this.cartItems.next(updated);
  }

  getCartCount(): number {
    return this.getCart().reduce((acc, item) => acc + item.quantity, 0);
  }

  isInCart(productId: number): boolean {
    return this.getCart().some(p => p.id === productId);
  }
}