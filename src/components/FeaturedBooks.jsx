
import { useBookStore } from '@/hooks/useBookStore';
import BookCard from '@/components/BookCard';

export const FeaturedBooks = () => {
  const { books } = useBookStore();
  
  // Select a few books to feature (e.g., highest rated)
  const featuredBooks = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
    
  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-book-dark text-center">
          Featured Books
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
