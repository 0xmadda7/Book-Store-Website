
import { Book } from '@/types';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useBookStore } from '@/hooks/useBookStore';
import { cn } from '@/lib/utils';

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const { openBookDetails, addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useBookStore();
  const isWishlisted = isInWishlist(book.id);

  return (
    <div className="book-card bg-white rounded-lg overflow-hidden shadow">
      <div 
        className="book-cover cursor-pointer"
        onClick={() => openBookDetails(book)}
      >
        <img 
          src={book.coverImage} 
          alt={`${book.title} cover`} 
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 
              className="text-lg font-serif font-medium text-book-dark line-clamp-1 hover:underline cursor-pointer" 
              onClick={() => openBookDetails(book)}
            >
              {book.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1">{book.author}</p>
          </div>
          
          <button
            onClick={() => isWishlisted ? removeFromWishlist(book.id) : addToWishlist(book.id)}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart 
              className={cn(
                "h-4 w-4 transition-colors", 
                isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
              )} 
            />
          </button>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <p className="text-book-accent font-semibold">${book.price.toFixed(2)}</p>
          
          <Button 
            onClick={() => addToCart(book.id)} 
            className="bg-book-primary hover:bg-book-accent text-white"
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
