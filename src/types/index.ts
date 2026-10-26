export interface Product {
  id: string;
  name: string;
  tagline?: string;
  category: 'skincare' | 'makeup' | 'haircare' | 'bathbody' | 'fragrances' | 'tools';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: {
    text: string;
    variant: 'bestseller' | 'new' | 'discount' | 'popular';
  };
  description: string;
  benefits: string[];
  keyIngredients: string[];
  howToUse: string;
  volumeOrSize: string;
  inStock: boolean;
  isBestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}
