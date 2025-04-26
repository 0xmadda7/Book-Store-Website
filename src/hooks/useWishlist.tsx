
import { useState, useEffect } from 'react';
import { WishlistItem } from '@/types';
import { useToast } from "@/components/ui/use-toast";

export function useWishlist() {
  const { toast } = useToast();
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (bookId: string) => {
    const existingItem = wishlist.find(item => item.bookId === bookId);
    
    if (!existingItem) {
      setWishlist(prevWishlist => [
        ...prevWishlist, 
        { bookId, addedAt: new Date().toISOString() }
      ]);
      
      toast({
        title: "Added to wishlist",
        description: "This book has been added to your wishlist",
      });
    }
  };

  const removeFromWishlist = (bookId: string) => {
    setWishlist(prevWishlist => 
      prevWishlist.filter(item => item.bookId !== bookId)
    );
    
    toast({
      title: "Removed from wishlist",
      description: "This book has been removed from your wishlist",
    });
  };

  const isInWishlist = (bookId: string) => {
    return wishlist.some(item => item.bookId === bookId);
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };
}
