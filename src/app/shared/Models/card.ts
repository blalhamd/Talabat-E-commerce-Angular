export interface Card {
  _id: string; // Unique ID for the card
  cartOwner: string; // ID of the cart owner
  products: ProductInCart[]; // Array of products in the cart
  totalCartPrice: number;
}

export interface ProductInCart {
  count: number; // Quantity of the product in the cart
  _id: string; // Unique ID for the product in the cart
  product: Product; // Product details
  price: number; // Price of the product
}

export interface Product {
  subcategory: Subcategory[]; // Array of subcategories the product belongs to
  _id: string; // Unique product ID
  title: string; // Product title
  quantity: number; // Quantity available in stock
  imageCover: string; // Cover image URL for the product
  category: Category; // Product's category details
  brand: Brand; // Product's brand details
  ratingsAverage: number; // Average product rating
  id: string; // Alternate product ID
}

export interface Subcategory {
  _id: string; // Unique subcategory ID
  name: string; // Subcategory name
  slug: string; // Subcategory slug
  category: string; // ID of the parent category
}

export interface Category {
  _id: string; // Unique category ID
  name: string; // Category name
  slug: string; // Category slug
  image: string; // Category image URL
}

export interface Brand {
  _id: string; // Unique brand ID
  name: string; // Brand name
  slug: string; // Brand slug
  image: string; // Brand image URL
}
