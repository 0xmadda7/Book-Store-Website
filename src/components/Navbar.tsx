
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, Heart, Menu, Book } from 'lucide-react';
import { useBookStore } from '@/hooks/useBookStore';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const location = useLocation();
  const { 
    cart, 
    searchTerm, 
    setSearchTerm, 
    setIsCartOpen,
    wishlist
  } = useBookStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-40 border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Book className="h-6 w-6 text-book-accent mr-2" />
              <span className="text-xl font-serif font-bold text-book-dark">Bookish</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={cn(
                "text-book-dark hover:text-book-accent font-medium",
                isActive("/") && "text-book-accent"
              )}
            >
              Home
            </Link>
            <Link 
              to="/books" 
              className={cn(
                "text-book-dark hover:text-book-accent font-medium",
                isActive("/books") && "text-book-accent"
              )}
            >
              Books
            </Link>
            <Link 
              to="/wishlist" 
              className={cn(
                "text-book-dark hover:text-book-accent font-medium",
                isActive("/wishlist") && "text-book-accent"
              )}
            >
              Wishlist
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-book-dark hover:text-book-accent font-medium",
                isActive("/about") && "text-book-accent"
              )}
            >
              About Us
            </Link>
            <Link 
              to="/faq" 
              className={cn(
                "text-book-dark hover:text-book-accent font-medium",
                isActive("/faq") && "text-book-accent"
              )}
            >
              FAQ
            </Link>
          </nav>

          {/* Search bar (desktop) */}
          <div className="hidden md:flex relative max-w-sm w-full">
            <Input
              type="search"
              placeholder="Search books or authors..."
              className="pr-10 bg-gray-50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-3">
            <Link 
              to="/wishlist" 
              className={cn(
                "p-2 rounded-full hover:bg-gray-100 relative",
                isActive("/wishlist") && "text-book-accent"
              )}
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-book-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            
            <Link
              to="/cart"
              className={cn(
                "p-2 rounded-full hover:bg-gray-100 relative",
                isActive("/cart") && "text-book-accent"
              )}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-book-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            
            <Button 
              variant="ghost" 
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5 text-book-dark" />
            </Button>
          </div>
        </div>

        {/* Mobile menu and search */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="relative mb-4">
              <Input
                type="search"
                placeholder="Search books or authors..."
                className="pr-10 bg-gray-50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={cn(
                  "text-book-dark hover:text-book-accent py-2",
                  isActive("/") && "text-book-accent"
                )}
              >
                Home
              </Link>
              <Link 
                to="/books" 
                className={cn(
                  "text-book-dark hover:text-book-accent py-2",
                  isActive("/books") && "text-book-accent"
                )}
              >
                Books
              </Link>
              <Link 
                to="/wishlist" 
                className={cn(
                  "text-book-dark hover:text-book-accent py-2",
                  isActive("/wishlist") && "text-book-accent"
                )}
              >
                Wishlist
              </Link>
              <Link 
                to="/about" 
                className={cn(
                  "text-book-dark hover:text-book-accent py-2",
                  isActive("/about") && "text-book-accent"
                )}
              >
                About Us
              </Link>
              <Link 
                to="/faq" 
                className={cn(
                  "text-book-dark hover:text-book-accent py-2",
                  isActive("/faq") && "text-book-accent"
                )}
              >
                FAQ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
