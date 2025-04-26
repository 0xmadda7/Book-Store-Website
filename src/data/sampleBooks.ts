import { Book } from '@/types';

export const SAMPLE_BOOKS: Book[] = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father, a crusading local lawyer, risks everything to defend a black man unjustly accused of a terrible crime.",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    price: 12.99,
    genre: ["Classic", "Fiction"],
    rating: 4.8,
    published: "1960",
    pages: 336,
    isbn: "978-0446310789"
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality.",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800",
    price: 10.99,
    genre: ["Dystopian", "Fiction"],
    rating: 4.7,
    published: "1949",
    pages: 328,
    isbn: "978-0451524935"
  },
  {
    id: "3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession for the beautiful former debutante Daisy Buchanan. The Great Gatsby explores themes of decadence, idealism, resistance to change, social upheaval, and excess.",
    coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    price: 9.99,
    genre: ["Classic", "Fiction"],
    rating: 4.5,
    published: "1925",
    pages: 180,
    isbn: "978-0743273565"
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.",
    coverImage: "https://images.unsplash.com/photo-1603162525937-96b7f461b476?auto=format&fit=crop&q=80&w=800",
    price: 8.99,
    genre: ["Romance", "Classic"],
    rating: 4.7,
    published: "1813",
    pages: 279,
    isbn: "978-0143105428"
  },
  {
    id: "5",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure.",
    coverImage: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?auto=format&fit=crop&q=80&w=800",
    price: 14.99,
    genre: ["Fantasy", "Adventure"],
    rating: 4.9,
    published: "1937",
    pages: 310,
    isbn: "978-0547928227"
  },
  {
    id: "6",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description: "Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility. All he knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley.",
    coverImage: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?auto=format&fit=crop&q=80&w=800",
    price: 15.99,
    genre: ["Fantasy", "Young Adult"],
    rating: 4.8,
    published: "1997",
    pages: 309,
    isbn: "978-0590353427"
  },
  {
    id: "7",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days.",
    coverImage: "https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?auto=format&fit=crop&q=80&w=800",
    price: 11.99,
    genre: ["Coming of Age", "Fiction"],
    rating: 4.3,
    published: "1951",
    pages: 277,
    isbn: "978-0316769488"
  },
  {
    id: "8",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    description: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them. In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.",
    coverImage: "https://images.unsplash.com/photo-1621707854626-9060557590ea?auto=format&fit=crop&q=80&w=800",
    price: 24.99,
    genre: ["Fantasy", "Epic"],
    rating: 4.9,
    published: "1954",
    pages: 1178,
    isbn: "978-0618640157"
  }
];
