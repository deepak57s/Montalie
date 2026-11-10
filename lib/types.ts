export type CategorySlug =
  | 'breads'
  | 'cakes'
  | 'pastries'
  | 'croissants'
  | 'cookies'
  | 'savories'
  | 'festive-specials';

export interface Product {
  id: string;
  slug: string;
  name: string;
  unit?: string;
  price: number;
  image: string;
  category: CategorySlug;
  rating: number;
  reviewCount: number;
  tags: ('eggless' | 'vegan' | 'bestseller' | 'new' | 'seasonal')[];
  stock: 'in-stock' | 'low-stock' | 'sold-out';
  description: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
