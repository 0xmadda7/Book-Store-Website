
import { useState, useEffect } from 'react';
// Removed Book type import
import { SAMPLE_BOOKS } from '@/data/sampleBooks';
import { useCart } from './useCart';
import { useWishlist } from './useWishlist';

export function useBookStore() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);

  const { cart, isCartOpen, setIsCartOpen, addToCart, removeFromCart, updateCartQuantity } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  // Initialize books data
  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    } else {
      setBooks(SAMPLE_BOOKS);
      localStorage.setItem('books', JSON.stringify(SAMPLE_BOOKS));
    }
  }, []);
  
  // Derived state calculations
  const filteredBooks = books.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesGenre = 
      !selectedGenre || 
      book.genre.includes(selectedGenre);
      
    return matchesSearch && matchesGenre;
  });

  const allGenres = Array.from(
    new Set(
      books.flatMap(book => book.genre)
    )
  ).sort();

  const wishlistBooks = wishlist.map(item => {
    return books.find(book => book.id === item.bookId);
  }).filter(Boolean); // Removed 'as Book[]'

  const cartItems = cart.map(item => {
    const book = books.find(book => book.id === item.bookId);
    return book ? { book, quantity: item.quantity } : null;
  }).filter(Boolean);

  const cartTotal = cart.reduce((total, item) => {
    const book = books.find(book => book.id === item.bookId);
    return total + (book ? book.price * item.quantity : 0);
  }, 0);

  // Book detail handlers
  const openBookDetails = (book) => {
    setSelectedBook(book);
    setIsDetailsOpen(true);
  };

  const closeBookDetails = () => {
    setIsDetailsOpen(false);
  };

  return {
    books,
    filteredBooks,
    cart,
    cartItems,
    wishlist,
    wishlistBooks,
    selectedBook,
    isDetailsOpen,
    isCartOpen,
    setIsCartOpen,
    searchTerm,
    setSearchTerm,
    selectedGenre,
    setSelectedGenre,
    allGenres,
    cartTotal,
    openBookDetails,
    closeBookDetails,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  };
}
