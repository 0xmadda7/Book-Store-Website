
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useBookStore } from '@/hooks/useBookStore';
import { cn } from '@/lib/utils';

export const BookDetails = () => {
  const { 
    selectedBook, 
    isDetailsOpen, 
    closeBookDetails, 
    addToCart, 
    addToWishlist, 
    removeFromWishlist,
    isInWishlist
  } = useBookStore();

  if (!selectedBook) {
    return null;
  }

  const isWishlisted = isInWishlist(selectedBook.id);

  return (
    <Dialog open={isDetailsOpen} onOpenChange={(open) => !open && closeBookDetails()}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-book-dark">{selectedBook.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          {/* Book cover image */}
          <div className="book-cover max-w-[250px] mx-auto">
            <img
              src={selectedBook.coverImage}
              alt={`${selectedBook.title} cover`}
              className="rounded-md shadow-lg"
            />
          </div>
          
          {/* Book details */}
          <div>
            <p className="text-lg text-gray-600 mb-3">by {selectedBook.author}</p>
            
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "h-4 w-4 mr-0.5", 
                      i < Math.floor(selectedBook.rating) 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-gray-300"
                    )} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">{selectedBook.rating.toFixed(1)}</span>
            </div>
            
            <p className="text-2xl font-semibold text-book-primary mb-4">
              ${selectedBook.price.toFixed(2)}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedBook.genre.map((genre) => (
                <Badge key={genre} variant="secondary" className="bg-book-secondary text-book-dark">
                  {genre}
                </Badge>
              ))}
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700">{selectedBook.description}</p>
            </div>
            
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <dt className="text-gray-500">Published</dt>
              <dd>{selectedBook.published}</dd>
              
              <dt className="text-gray-500">Pages</dt>
              <dd>{selectedBook.pages}</dd>
              
              <dt className="text-gray-500">ISBN</dt>
              <dd>{selectedBook.isbn}</dd>
            </dl>
          </div>
        </div>
        
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button 
            variant="outline"
            className="w-full sm:w-auto flex items-center gap-2"
            onClick={() => isWishlisted ? removeFromWishlist(selectedBook.id) : addToWishlist(selectedBook.id)}
          >
            <Heart className={cn(
              "h-4 w-4", 
              isWishlisted ? "fill-red-500 text-red-500" : ""
            )} />
            {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          </Button>
          
          <Button 
            className="w-full sm:w-auto bg-book-primary hover:bg-book-accent flex items-center gap-2"
            onClick={() => addToCart(selectedBook.id)}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
          
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="w-full sm:w-auto">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookDetails;
