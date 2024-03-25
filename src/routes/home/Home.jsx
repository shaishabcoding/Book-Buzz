import Banner from "../../components/banner/Banner";
import Book from "../../components/book/Book";
import { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <Banner />
      <h2 className="lg:text-5xl text-4xl font-bold text-center mb-6 lg:mb-16 font-playfair">
        Books
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-3 lg:mx-0 mb-6 lg:mb-16">
        {books.map((book) => (
          <Book {...{ book }} key={book.bookId} />
        ))}
      </div>
    </div>
  );
};

export default Home;
