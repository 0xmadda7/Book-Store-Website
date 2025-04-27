
import Navbar from '@/components/Navbar';
import { useBookStore } from '@/hooks/useBookStore';
import { Button } from '@/components/ui/button';
import { MinusCircle, PlusCircle, ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, cartTotal, removeFromCart, updateCartQuantity } = useBookStore();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-book-dark">
            Shopping Cart
          </h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ul className="divide-y">
                  {cartItems.map(item => (
                    <li key={item.book.id} className="py-6 flex gap-4">
                      {/* Book cover */}
                      <div className="w-24 aspect-[2/3] rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={item.book.coverImage} 
                          alt={item.book.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Book details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-book-dark">{item.book.title}</h4>
                        <p className="text-sm text-gray-500">{item.book.author}</p>
                        <p className="text-book-accent font-medium mt-1">
                          ${item.book.price.toFixed(2)}
                        </p>
                        
                        {/* Quantity controls */}
                        <div className="flex items-center mt-4">
                          <button 
                            onClick={() => updateCartQuantity(item.book.id, item.quantity - 1)}
                            className="text-gray-500 hover:text-book-primary"
                          >
                            <MinusCircle className="h-4 w-4" />
                          </button>
                          
                          <span className="w-8 text-center">{item.quantity}</span>
                          
                          <button 
                            onClick={() => updateCartQuantity(item.book.id, item.quantity + 1)}
                            className="text-gray-500 hover:text-book-primary"
                          >
                            <PlusCircle className="h-4 w-4" />
                          </button>
                          
                          <button 
                            onClick={() => removeFromCart(item.book.id)}
                            className="ml-auto text-gray-500 hover:text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Item total */}
                      <div className="text-right">
                        <p className="font-medium">
                          ${(item.book.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-book-light rounded-lg p-6">
                  <h2 className="font-serif text-xl font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span className="text-book-accent">Free</span>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-book-primary hover:bg-book-accent mt-4"
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center max-w-lg mx-auto">
              <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-book-secondary" />
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">
                Looks like you haven't added any books to your cart yet.
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
    </div>
  );
};

export default CartPage;
