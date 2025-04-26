
import { Button } from '@/components/ui/button';
import { useBookStore } from '@/hooks/useBookStore';
import Navbar from '@/components/Navbar';
import BookCard from '@/components/BookCard';
import SearchFilters from '@/components/SearchFilters';
import BookDetails from '@/components/BookDetails';
import Cart from '@/components/Cart';
import FeaturedBooks from '@/components/FeaturedBooks';
import { ArrowRight, Book } from 'lucide-react';

const Index = () => {
  const { filteredBooks } = useBookStore();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero section */}
      <section className="bg-gradient-to-b from-book-light to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-book-dark mb-6 leading-tight">
              Discover Your Next Favorite Book
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Explore our curated collection of books from bestsellers to hidden gems.
              Your literary adventure starts here.
            </p>
            <Button className="bg-book-primary hover:bg-book-accent rounded-full text-lg px-8 py-6 h-auto">
              Browse Books
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured books section */}
      <FeaturedBooks />
      
      {/* Main books section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl font-semibold text-book-dark">All Books</h2>
            <Button variant="link" className="text-book-primary font-medium flex items-center">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <SearchFilters />
            </div>
            
            <div className="lg:col-span-3">
              {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <Book className="h-12 w-12 mx-auto mb-4 text-book-secondary" />
                  <h3 className="text-xl font-medium mb-2">No books found</h3>
                  <p className="text-gray-500 mb-6">
                    We couldn't find any books matching your search criteria.
                    Try adjusting your filters or search terms.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Advantages section */}
      <section className="py-12 md:py-16 bg-book-light">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-semibold text-book-dark text-center mb-12">
            Why Choose Bookish?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-book-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-book-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">Curated Selection</h3>
              <p className="text-gray-600">
                Every book in our collection is hand-picked for quality and reader satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-book-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-book-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">Personalized Recommendations</h3>
              <p className="text-gray-600">
                Discover new books that match your unique reading preferences and interests.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-book-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-book-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">Reader Community</h3>
              <p className="text-gray-600">
                Join discussions with fellow book lovers and share your literary discoveries.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-book-dark py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Book className="h-6 w-6 text-book-secondary mr-2" />
                <span className="text-xl font-serif font-bold">Bookish</span>
              </div>
              <p className="text-gray-300 text-sm">
                Your go-to destination for discovering and purchasing amazing books.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">All Books</a></li>
                <li><a href="#" className="hover:text-white">New Releases</a></li>
                <li><a href="#" className="hover:text-white">Featured</a></li>
                <li><a href="#" className="hover:text-white">Bestsellers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-4">About</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-4">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for the latest book releases and promotions.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 text-sm text-book-dark rounded-l-md w-full focus:outline-none"
                />
                <button className="bg-book-primary hover:bg-book-accent px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Bookish. All rights reserved. This is a demo website.</p>
          </div>
        </div>
      </footer>
      
      {/* Modals and overlays */}
      <BookDetails />
      <Cart />
    </div>
  );
};

export default Index;
