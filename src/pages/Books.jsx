
import Navbar from '@/components/Navbar';
import SearchFilters from '@/components/SearchFilters';
import BookCard from '@/components/BookCard';
import BookDetails from '@/components/BookDetails';
import Cart from '@/components/Cart';
import { useBookStore } from '@/hooks/useBookStore';

const Books = () => {
  const { filteredBooks } = useBookStore();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-book-dark">
            Browse Our Collection
          </h1>
          
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
                  <p className="text-xl font-medium mb-2">No books found</p>
                  <p className="text-gray-500">
                    Try adjusting your search criteria or browse our categories.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <BookDetails />
      <Cart />
    </div>
  );
};

export default Books;
