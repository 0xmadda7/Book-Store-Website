import Navbar from '@/components/Navbar';
import BookCard from '@/components/BookCard';
import BookDetails from '@/components/BookDetails';
import Cart from '@/components/Cart';
import { useBookStore } from '@/hooks/useBookStore';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlistBooks } = useBookStore();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-book-dark">
            My Wishlist
          </h1>
          
          {wishlistBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center max-w-lg mx-auto">
              <Heart className="h-12 w-12 mx-auto mb-4 text-book-secondary" />
              <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-6">
                Start adding books you love to your wishlist and keep track of what you want to read next.
              </p>
              <Button asChild>
                <Link to="/books" className="bg-book-primary hover:bg-book-accent">
                  Browse Books
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <BookDetails />
      <Cart />
    </div>
  );
};

export default Wishlist;