
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Browse our collection, add items to your cart, and proceed to checkout. Since this is a demo store, no actual purchases will be made, but you can experience the full shopping flow!"
    },
    {
      question: "Will my cart items be saved if I close my browser?",
      answer: "Yes! We use local storage to save your cart and wishlist items, so they'll still be there when you return to the site. However, remember this is client-side storage, so clearing your browser data will remove saved items."
    },
    {
      question: "How do I use the wishlist feature?",
      answer: "Click the heart icon on any book to add it to your wishlist. You can view your wishlist anytime by clicking the heart icon in the navigation bar. Your wishlist is saved locally and will persist between visits."
    },
    {
      question: "How can I find specific books?",
      answer: "Use the search bar at the top of the page to search by title or author. You can also use our filtering options to browse by genre and other categories to find exactly what you're looking for."
    },
    {
      question: "Do I need an account to make purchases?",
      answer: "For this demo version, no account is needed! You can browse books, add them to your cart, and try out the checkout process without signing in."
    },
    {
      question: "What payment methods do you accept?",
      answer: "Since this is a demo store, no real payments are processed. You can go through the checkout flow to experience how it works, but no actual charges will be made."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-book-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-book-dark mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700">
              Find answers to common questions about shopping with Bookish.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium text-lg text-book-dark">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
