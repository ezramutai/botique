import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service';
//import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  imports: [CommonModule,
  ]

})
export class Products {
  products = [
    {
      id: 1,
      name: 'Elegant Red Dress',
      description: 'A stunning red dress for evening occasions.',
      oldPrice: 3500,
      newPrice: 2500,
      image: 'assets/dress1.jpg'
    },
    {
      id: 2,
      name: 'Classic Black Gown',
      description: 'Timeless elegance in a black silhouette.',
      oldPrice: 4200,
      newPrice: 3100,
      image: 'assets/dress2.jpg'
    },
    {
      id: 3,
      name: 'Floral Summer Dress',
      description: 'Light and breezy for warm weather days.',
      oldPrice: 3000,
      newPrice: 2200,
      image: 'assets/dress3.jpg'
    },
    {
      id: 4,
      name: 'Sleeveless Red Gown',
      description: 'Ideal for formal dinners and galas.',
      oldPrice: 4800,
      newPrice: 3600,
      image: 'assets/dress1.jpg'
    },
    {
      id: 5,
      name: 'Velvet Black Dress',
      description: 'Soft velvet feel with premium fit.',
      oldPrice: 5200,
      newPrice: 3900,
      image: 'assets/dress2.jpg'
    },
    {
      id: 6,
      name: 'Pastel Print Dress',
      description: 'Sweet floral tones with a modern cut.',
      oldPrice: 2700,
      newPrice: 1999,
      image: 'assets/dress3.jpg'
    },
    {
      id: 7,
      name: 'Satin Red Dress',
      description: 'Glossy finish for a sleek appearance.',
      oldPrice: 4300,
      newPrice: 3200,
      image: 'assets/dress1.jpg'
    },
    {
      id: 8,
      name: 'Lace Black Dress',
      description: 'Elegant lace accents on a dark base.',
      oldPrice: 4600,
      newPrice: 3400,
      image: 'assets/dress2.jpg'
    },
    {
      id: 9,
      name: 'Sunshine Dress',
      description: 'Brighten up the day with vibrant patterns.',
      oldPrice: 3100,
      newPrice: 2100,
      image: 'assets/dress3.jpg'
    },
    {
      id: 10,
      name: 'Red Evening Fit',
      description: 'Perfect fit for a night out.',
      oldPrice: 3800,
      newPrice: 2800,
      image: 'assets/dress1.jpg'
    },
    {
      id: 11,
      name: 'Jet Black Slim Fit',
      description: 'Sharp curves and sleek look.',
      oldPrice: 4900,
      newPrice: 3700,
      image: 'assets/dress2.jpg'
    },
    {
      id: 12,
      name: 'Boho Chic Dress',
      description: 'Bohemian design for the fashion-forward.',
      oldPrice: 3300,
      newPrice: 2500,
      image: 'assets/dress3.jpg'
    },
    {
      id: 13,
      name: 'Red Charm Dress',
      description: 'Turn heads with bold style.',
      oldPrice: 4100,
      newPrice: 3000,
      image: 'assets/dress1.jpg'
    },
    {
      id: 14,
      name: 'Silk Black Elegance',
      description: 'Premium silk texture and comfort.',
      oldPrice: 5400,
      newPrice: 4200,
      image: 'assets/dress2.jpg'
    },
    {
      id: 15,
      name: 'Tropical Dress',
      description: 'Fresh look with a sunny vibe.',
      oldPrice: 2900,
      newPrice: 2000,
      image: 'assets/dress3.jpg'
    },
    {
      id: 16,
      name: 'Crimson Night Dress',
      description: 'Daring look for a dramatic effect.',
      oldPrice: 4700,
      newPrice: 3500,
      image: 'assets/dress1.jpg'
    },
    {
      id: 17,
      name: 'Midnight Magic Dress',
      description: 'Glamour meets mystery.',
      oldPrice: 5000,
      newPrice: 3800,
      image: 'assets/dress2.jpg'
    },
    {
      id: 18,
      name: 'Casual Printed Dress',
      description: 'Everyday comfort in style.',
      oldPrice: 2600,
      newPrice: 1800,
      image: 'assets/dress3.jpg'
    },
    {
      id: 19,
      name: 'Ruby Red Wrap',
      description: 'Wrap design for a flattering fit.',
      oldPrice: 3900,
      newPrice: 2900,
      image: 'assets/dress1.jpg'
    },
    {
      id: 20,
      name: 'Mystic Black Maxi',
      description: 'Long flowing style with allure.',
      oldPrice: 5500,
      newPrice: 4300,
      image: 'assets/dress2.jpg'
    }
  ];

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
}