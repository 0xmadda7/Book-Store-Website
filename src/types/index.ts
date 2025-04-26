
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  price: number;
  genre: string[];
  rating: number;
  published: string;
  pages: number;
  isbn: string;
}

export interface CartItem {
  bookId: string;
  quantity: number;
}

export interface WishlistItem {
  bookId: string;
  addedAt: string;
}
