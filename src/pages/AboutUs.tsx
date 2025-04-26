
import { Book, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-book-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-book-dark mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Welcome to Bookish, where every page turn is an adventure waiting to unfold.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-book-dark mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At Bookish, we believe that every book has the power to transport, transform, and inspire. 
                Our mission is simple: to create a peaceful, delightful space where book lovers can discover 
                their next literary adventure.
              </p>
              <p className="text-gray-700">
                We've crafted an experience that combines the warmth of a local bookstore with the convenience 
                of modern technology, making it easier than ever to find books that speak to your heart.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="book-cover large bg-book-secondary/20">
                  <Book className="absolute inset-0 m-auto h-12 w-12 text-book-primary" />
                </div>
                <div className="book-cover large bg-book-primary/20">
                  <Heart className="absolute inset-0 m-auto h-12 w-12 text-book-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-white to-book-light">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-book-dark text-center mb-12">Why Choose Bookish?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-book-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="h-8 w-8 text-book-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-book-dark mb-4 text-center">
                Curated Selection
              </h3>
              <p className="text-gray-700 text-center">
                Each book in our collection is carefully chosen to ensure quality and reader satisfaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-book-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-book-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-book-dark mb-4 text-center">
                Personal Touch
              </h3>
              <p className="text-gray-700 text-center">
                Experience a blend of AI-powered recommendations with a human touch that understands your reading preferences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-book-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="h-8 w-8 text-book-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-book-dark mb-4 text-center">
                Simple Elegance
              </h3>
              <p className="text-gray-700 text-center">
                Enjoy a clean, intuitive interface that lets you focus on what matters most – finding your next great read.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
