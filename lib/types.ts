export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  images: string[];
  description: string;
  colors: number;
  tag?: string;
}

export interface Category {
  name: string;
  count?: number;
}
