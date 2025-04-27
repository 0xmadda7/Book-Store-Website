import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useBookStore } from '@/hooks/useBookStore';
import { MinusCircle, PlusCircle, Trash2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export const Cart = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    cartTotal, 
    removeFromCart, 
    updateCartQuantity 
  } = useBookStore();
  
  const { toast } = useToast();
  
  const handleCheckout = () => {
    toast({
      title: "Order placed!",
      description: "Thank you for your order. This is a demo, so no actual purchase has been made.",
    });
    
    // Clear cart (in a real app, this would be done after successful checkout)
    cartItems.forEach(item => removeFromCart(item.book.id));
    
    // Close the cart
    setIsCartOpen(false);
  };
  
  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">Your Shopping Cart</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full py-6">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Looks like you haven't added any books to your cart yet.</p>
              <Button 
                onClick={() => setIsCartOpen(false)}
                className="bg-book-primary hover:bg-book-accent"
              >
                Browse Books
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-1">
                <ul className="space-y-6">
                  {cartItems.map(item => (
                    <li key={item.book.id} className="flex gap-4 pb-4 border-b">
                      {/* Book cover */}
                      <div className="w-16 aspect-[2/3] rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={item.book.coverImage} 
                          alt={item.book.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Book details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-book-dark line-clamp-1">{item.book.title}</h4>
                        <p className="text-sm text-gray-500">{item.book.author}</p>
                        <p className="text-book-accent font-medium mt-1">
                          ${item.book.price.toFixed(2)}
                        </p>
                        
                        {/* Quantity controls */}
                        <div className="flex items-center mt-2">
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
                    </li>
                  ))}
                </ul>
              </div>
              
              <SheetFooter className="border-t pt-4 mt-4">
                <div className="w-full space-y-4">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  
                  <Button 
                    onClick={handleCheckout}
                    className="w-full bg-book-primary hover:bg-book-accent"
                  >
                    Checkout
                  </Button>
                </div>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;