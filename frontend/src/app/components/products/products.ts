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
    chart: {
      type: 'donut'
    },
    labels: ['In Stock', 'Sold', 'Wishlisted', 'In Cart'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 280
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ],
    legend: {
      position: 'right'
    }
  };

  products = [
    {
      id: 1,
      name: 'Elegant Red Dress',
      description: 'A stunning red dress for evening occasions.',
      oldPrice: 3500,
      newPrice: 2500,
      image: 'https://source.unsplash.com/featured/?red,dress',
      color: 'Red',
      quantity: 12,
      location: 'Nairobi',
      terms: '7-day return policy'
    },
    {
      id: 2,
      name: 'Classic Black Gown',
      description: 'Timeless elegance in a black silhouette.',
      oldPrice: 4200,
      newPrice: 3100,
      image: 'https://source.unsplash.com/featured/?black,gown',
      color: 'Black',
      quantity: 6,
      location: 'Nakuru',
      terms: 'Pickup only'
    },
    {
      id: 3,
      name: 'Floral Summer Dress',
      description: 'Light and breezy for warm weather days.',
      oldPrice: 3000,
      newPrice: 2200,
      image: 'https://source.unsplash.com/featured/?floral,dress',
      color: 'Floral',
      quantity: 20,
      location: 'Eldoret',
      terms: 'Cash on delivery'
    },
    {
      id: 4,
      name: 'Velvet Black Dress',
      description: 'Soft velvet feel with premium fit.',
      oldPrice: 5200,
      newPrice: 3900,
      image: 'https://source.unsplash.com/featured/?velvet,dress',
      color: 'Black',
      quantity: 8,
      location: 'Kisumu',
      terms: 'Free returns within 5 days'
    },
    {
      id: 5,
      name: 'Pastel Print Dress',
      description: 'Sweet floral tones with a modern cut.',
      oldPrice: 2700,
      newPrice: 1999,
      image: 'https://source.unsplash.com/featured/?pastel,dress',
      color: 'Pastel Blue',
      quantity: 9,
      location: 'Kericho',
      terms: 'MPESA accepted'
    },
    {
      id: 6,
      name: 'Satin Red Dress',
      description: 'Glossy finish for a sleek appearance.',
      oldPrice: 4300,
      newPrice: 3200,
      image: 'https://source.unsplash.com/featured/?satin,red',
      color: 'Red',
      quantity: 14,
      location: 'Nanyuki',
      terms: 'Return within 3 days'
    },
    {
      id: 7,
      name: 'Lace Black Dress',
      description: 'Elegant lace accents on a dark base.',
      oldPrice: 4600,
      newPrice: 3400,
      image: 'https://source.unsplash.com/featured/?lace,black',
      color: 'Black',
      quantity: 5,
      location: 'Machakos',
      terms: 'Next day delivery'
    },
    {
      id: 8,
      name: 'Sunshine Dress',
      description: 'Brighten up the day with vibrant patterns.',
      oldPrice: 3100,
      newPrice: 2100,
      image: 'https://source.unsplash.com/featured/?yellow,dress',
      color: 'Yellow',
      quantity: 16,
      location: 'Thika',
      terms: 'No returns on sale items'
    },
    {
      id: 9,
      name: 'Jet Black Slim Fit',
      description: 'Sharp curves and sleek look.',
      oldPrice: 4900,
      newPrice: 3700,
      image: 'https://source.unsplash.com/featured/?black,slim,dress',
      color: 'Jet Black',
      quantity: 7,
      location: 'Kitale',
      terms: '48hr delivery'
    },
    {
      id: 10,
      name: 'Boho Chic Dress',
      description: 'Bohemian design for the fashion-forward.',
      oldPrice: 3300,
      newPrice: 2500,
      image: 'https://source.unsplash.com/featured/?boho,dress',
      color: 'Cream',
      quantity: 10,
      location: 'Naivasha',
      terms: 'No refunds'
    },
    {
      id: 11,
      name: 'Silk Black Elegance',
      description: 'Premium silk texture and comfort.',
      oldPrice: 5400,
      newPrice: 4200,
      image: 'https://source.unsplash.com/featured/?silk,dress',
      color: 'Silk Black',
      quantity: 4,
      location: 'Limuru',
      terms: 'Card and cash payment'
    },
    {
      id: 12,
      name: 'Tropical Dress',
      description: 'Fresh look with a sunny vibe.',
      oldPrice: 2900,
      newPrice: 2000,
      image: 'https://source.unsplash.com/featured/?tropical,dress',
      color: 'Tropical',
      quantity: 11,
      location: 'Malindi',
      terms: 'Delivery within 3 days'
    },
    {
      id: 13,
      name: 'Crimson Night Dress',
      description: 'Daring look for a dramatic effect.',
      oldPrice: 4700,
      newPrice: 3500,
      image: 'https://source.unsplash.com/featured/?crimson,dress',
      color: 'Crimson Red',
      quantity: 6,
      location: 'Voi',
      terms: 'Delivery available'
    },
    {
      id: 14,
      name: 'Midnight Magic Dress',
      description: 'Glamour meets mystery.',
      oldPrice: 5000,
      newPrice: 3800,
      image: 'https://source.unsplash.com/featured/?midnight,dress',
      color: 'Dark Blue',
      quantity: 5,
      location: 'Narok',
      terms: 'Free delivery above Ksh 3,000'
    },
    {
      id: 15,
      name: 'Casual Printed Dress',
      description: 'Everyday comfort in style.',
      oldPrice: 2600,
      newPrice: 1800,
      image: 'https://source.unsplash.com/featured/?printed,dress',
      color: 'Multicolor',
      quantity: 18,
      location: 'Kisii',
      terms: 'MPESA and Airtel Money accepted'
    },
    {
      id: 16,
      name: 'Ruby Red Wrap',
      description: 'Wrap design for a flattering fit.',
      oldPrice: 3900,
      newPrice: 2900,
      image: 'https://source.unsplash.com/featured/?wrap,dress',
      color: 'Ruby Red',
      quantity: 7,
      location: 'Nyeri',
      terms: 'Return within 2 days'
    },
    {
      id: 17,
      name: 'Mystic Black Maxi',
      description: 'Long flowing style with allure.',
      oldPrice: 5500,
      newPrice: 4300,
      image: 'https://source.unsplash.com/featured/?maxi,dress',
      color: 'Black',
      quantity: 4,
      location: 'Isiolo',
      terms: 'Next-day delivery'
    },
    {
      id: 18,
      name: 'Summer Breeze Dress',
      description: 'Feel the breeze with light layers.',
      oldPrice: 3400,
      newPrice: 2600,
      image: 'https://source.unsplash.com/featured/?summer,dress',
      color: 'Sky Blue',
      quantity: 13,
      location: 'Embu',
      terms: 'Delivery available'
    },
    {
      id: 19,
      name: 'Polka Dot Classic',
      description: 'Retro style with modern comfort.',
      oldPrice: 3700,
      newPrice: 2800,
      image: 'https://source.unsplash.com/featured/?polka,dot,dress',
      color: 'White/Black',
      quantity: 9,
      location: 'Meru',
      terms: 'Delivery + MPESA'
    },
    {
      id: 20,
      name: 'Nude Elegance Dress',
      description: 'Soft nude tones for any occasion.',
      oldPrice: 4500,
      newPrice: 3300,
      image: 'https://source.unsplash.com/featured/?nude,dress',
      color: 'Nude',
      quantity: 6,
      location: 'Busia',
      terms: 'Cash only'
    }
  ];

  selectedProduct: any = null;

  constructor(private cartService: CartService) {}

  toggleCart(product: any) {
    if (this.isInCart(product.id)) {
      this.cartService.removeFromCart(product.id);
    } else {
      this.cartService.addToCart(product);
    }
  }

  isInCart(productId: number): boolean {
    return this.cartService.isInCart(productId);
  }

  openDetails(product: any) {
    this.selectedProduct = product;
  }

  closeDetails() {
    this.selectedProduct = null;
  }

  getDiscount(product: any): number {
    const { oldPrice, newPrice } = product;
    if (!oldPrice || !newPrice || oldPrice <= newPrice) return 0;
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  }
}