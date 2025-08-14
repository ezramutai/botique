// src/app/data/products_data.ts

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  oldPrice: number;
  newPrice: number;
  color: string;
  availableAmount: number;
  deliveryTime: string;
  discount: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Floral Summer Dress",
    description: "Lightweight chiffon dress with pastel floral prints.",
    image: "assets/images/dress1.jpg",
    oldPrice: 4500,
    newPrice: 3500,
    color: "Pastel Pink",
    availableAmount: 12,
    deliveryTime: "2-4 days",
    discount: 22
  },
  {
    id: 2,
    name: "Men's Slim Fit Blazer",
    description: "Tailored navy blue blazer with a modern cut.",
    image: "assets/images/blazer1.jpg",
    oldPrice: 8500,
    newPrice: 6999,
    color: "Navy Blue",
    availableAmount: 7,
    deliveryTime: "3-5 days",
    discount: 18
  },
  {
    id: 3,
    name: "Leather Handbag",
    description: "Premium leather handbag with gold-tone hardware.",
    image: "assets/images/handbag1.jpg",
    oldPrice: 6500,
    newPrice: 5200,
    color: "Tan Brown",
    availableAmount: 10,
    deliveryTime: "1-3 days",
    discount: 20
  },
  {
    id: 4,
    name: "Casual Men's Sneakers",
    description: "Comfortable low-top sneakers for everyday wear.",
    image: "assets/images/sneakers1.jpg",
    oldPrice: 4200,
    newPrice: 3600,
    color: "White",
    availableAmount: 15,
    deliveryTime: "2-4 days",
    discount: 14
  },
  {
    id: 5,
    name: "Women's High Heels",
    description: "Elegant stiletto heels with a glossy finish.",
    image: "assets/images/heels1.jpg",
    oldPrice: 5000,
    newPrice: 4250,
    color: "Red",
    availableAmount: 8,
    deliveryTime: "2-4 days",
    discount: 15
  },
  {
    id: 6,
    name: "Denim Jacket",
    description: "Classic blue denim jacket with button closure.",
    image: "assets/images/denim1.jpg",
    oldPrice: 4000,
    newPrice: 3200,
    color: "Blue",
    availableAmount: 9,
    deliveryTime: "3-6 days",
    discount: 20
  },
  {
    id: 7,
    name: "Maxi Evening Gown",
    description: "Floor-length satin gown perfect for formal occasions.",
    image: "assets/images/gown1.jpg",
    oldPrice: 12000,
    newPrice: 9800,
    color: "Emerald Green",
    availableAmount: 4,
    deliveryTime: "4-7 days",
    discount: 18
  },
  {
    id: 8,
    name: "Men's Leather Belt",
    description: "Durable leather belt with a steel buckle.",
    image: "assets/images/belt1.jpg",
    oldPrice: 1800,
    newPrice: 1500,
    color: "Black",
    availableAmount: 20,
    deliveryTime: "1-3 days",
    discount: 16
  },
  {
    id: 9,
    name: "Silk Scarf",
    description: "Lightweight silk scarf with vibrant prints.",
    image: "assets/images/scarf1.jpg",
    oldPrice: 2500,
    newPrice: 1900,
    color: "Multi-color",
    availableAmount: 18,
    deliveryTime: "2-4 days",
    discount: 24
  },
  {
    id: 10,
    name: "Women's Cardigan",
    description: "Soft knit cardigan with front buttons.",
    image: "assets/images/cardigan1.jpg",
    oldPrice: 3500,
    newPrice: 2800,
    color: "Cream",
    availableAmount: 13,
    deliveryTime: "2-5 days",
    discount: 20
  },
  {
    id: 11,
    name: "Men's Polo Shirt",
    description: "Cotton polo shirt with embroidered logo.",
    image: "assets/images/polo1.jpg",
    oldPrice: 3000,
    newPrice: 2500,
    color: "Burgundy",
    availableAmount: 14,
    deliveryTime: "1-3 days",
    discount: 17
  },
  {
    id: 12,
    name: "Women's Tote Bag",
    description: "Spacious canvas tote bag with inner compartments.",
    image: "assets/images/tote1.jpg",
    oldPrice: 2800,
    newPrice: 2200,
    color: "Beige",
    availableAmount: 11,
    deliveryTime: "2-4 days",
    discount: 21
  },
  {
    id: 13,
    name: "Men's Wool Sweater",
    description: "Warm wool sweater for the winter season.",
    image: "assets/images/sweater1.jpg",
    oldPrice: 5200,
    newPrice: 4400,
    color: "Charcoal Gray",
    availableAmount: 6,
    deliveryTime: "3-5 days",
    discount: 15
  },
  {
    id: 14,
    name: "Women's Jumpsuit",
    description: "Stylish sleeveless jumpsuit with waist tie.",
    image: "assets/images/jumpsuit1.jpg",
    oldPrice: 6000,
    newPrice: 5000,
    color: "Black",
    availableAmount: 7,
    deliveryTime: "3-5 days",
    discount: 17
  },
  {
    id: 15,
    name: "Men's Leather Wallet",
    description: "Compact wallet with multiple card slots.",
    image: "assets/images/wallet1.jpg",
    oldPrice: 2200,
    newPrice: 1800,
    color: "Dark Brown",
    availableAmount: 16,
    deliveryTime: "1-3 days",
    discount: 18
  },
  {
    id: 16,
    name: "Women's Blouse",
    description: "Lightweight chiffon blouse with lace details.",
    image: "assets/images/blouse1.jpg",
    oldPrice: 3200,
    newPrice: 2600,
    color: "White",
    availableAmount: 12,
    deliveryTime: "2-4 days",
    discount: 19
  },
  {
    id: 17,
    name: "Men's Cargo Pants",
    description: "Comfortable cargo pants with multiple pockets.",
    image: "assets/images/cargo1.jpg",
    oldPrice: 4500,
    newPrice: 3700,
    color: "Olive Green",
    availableAmount: 8,
    deliveryTime: "3-6 days",
    discount: 18
  },
  {
    id: 18,
    name: "Women's Pencil Skirt",
    description: "Fitted skirt for professional and casual wear.",
    image: "assets/images/skirt1.jpg",
    oldPrice: 3800,
    newPrice: 3000,
    color: "Navy Blue",
    availableAmount: 9,
    deliveryTime: "2-4 days",
    discount: 21
  },
  {
    id: 19,
    name: "Men's Formal Shirt",
    description: "Crisp cotton shirt for office or formal events.",
    image: "assets/images/shirt1.jpg",
    oldPrice: 3500,
    newPrice: 2800,
    color: "Light Blue",
    availableAmount: 10,
    deliveryTime: "2-4 days",
    discount: 20
  },
  {
    id: 20,
    name: "Women's Knit Sweater",
    description: "Cozy knit sweater with a loose fit.",
    image: "assets/images/knit1.jpg",
    oldPrice: 4000,
    newPrice: 3200,
    color: "Mustard Yellow",
    availableAmount: 6,
    deliveryTime: "3-5 days",
    discount: 20
  }
];