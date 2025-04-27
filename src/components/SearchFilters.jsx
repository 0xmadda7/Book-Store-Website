import { useBookStore } from '@/hooks/useBookStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const SearchFilters = () => {
  const { 
    searchTerm, 
    setSearchTerm, 
    selectedGenre, 
    setSelectedGenre, 
    allGenres 
  } = useBookStore();

  return (
    <div className="bg-book-light rounded-lg p-4 md:p-6">
      <div className="space-y-6">
        {/* Search bar */}
        <div className="space-y-2">
          <h3 className="font-serif text-lg font-medium text-book-dark">Search</h3>
          <div className="relative">
            <Input
              type="search"
              placeholder="Search by title or author..."
              className="pr-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>

        {/* Genre filters */}
        <div className="space-y-3">
          <h3 className="font-serif text-lg font-medium text-book-dark">Genres</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedGenre === null ? "secondary" : "outline"}
              size="sm"
              className={selectedGenre === null ? "bg-book-secondary text-book-dark" : ""}
              onClick={() => setSelectedGenre(null)}
            >
              All
            </Button>
            
            {allGenres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? "secondary" : "outline"}
                size="sm"
                className={selectedGenre === genre ? "bg-book-secondary text-book-dark" : ""}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;