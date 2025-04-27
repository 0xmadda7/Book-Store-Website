
import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

export function useCart() {
  const { toast } = useToast();
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (bookId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.bookId === bookId);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.bookId === bookId 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { bookId, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: "This book has been added to your cart",
    });
  };

  const removeFromCart = (bookId) => {
    setCart(prevCart => prevCart.filter(item => item.bookId !== bookId));
    
    toast({
      title: "Removed from cart",
      description: "This book has been removed from your cart",
    });
  };

  const updateCartQuantity = (bookId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(bookId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.bookId === bookId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  return {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateCartQuantity,
  };
}
