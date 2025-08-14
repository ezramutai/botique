import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexLegend
} from 'ng-apexcharts';
import { products, Product } from '../../data/products_data'; // match file & export

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  responsive: ApexResponsive[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  imports: [CommonModule, NgApexchartsModule]
})
export class Products {
  public chartOptions: Partial<ChartOptions> = {
    series: [45, 25, 15, 15],
    chart: { type: 'donut' },
    labels: ['In Stock', 'Sold', 'Wishlisted', 'In Cart'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 280 },
          legend: { position: 'bottom' }
        }
      }
    ],
    legend: { position: 'right' }
  };

  products: Product[] = products; // from products_data.ts
  selectedProduct: Product | null = null;

  // simple toast state for UX feedback (optional)
  showToast = false;
  toastMessage = '';

  constructor(private cartService: CartService) {}

  /** Open modal with product details */
  openProductDetails(product: Product) {
    this.selectedProduct = product;
  }

  /** Close product details modal */
  closeProductDetails() {
    this.selectedProduct = null;
  }

  /** Check if product is in cart */
  isInCart(productId: number): boolean {
    return this.cartService.isInCart(productId);
  }

  /** Add product to cart (used by modal / buttons) */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.showTemporaryToast(`${product.name} added to cart`);
  }

  /** Remove product from cart (used by modal / buttons) */
  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product.id);
    this.showTemporaryToast(`${product.name} removed from cart`);
  }

  /** Toggle add/remove (helper for quick toggles on cards) */
  toggleCart(product: Product) {
    if (this.isInCart(product.id)) {
      this.removeFromCart(product);
    } else {
      this.addToCart(product);
    }
  }

  /** Calculate discount percentage from oldPrice / newPrice */
  getDiscount(product: Product): number {
    const { oldPrice, newPrice } = product as any;
    if (!oldPrice || !newPrice || oldPrice <= newPrice) return 0;
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  }

  /** Small helper to show toast for 2.2s */
  private showTemporaryToast(message: string) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => (this.showToast = false), 2200);
  }
}