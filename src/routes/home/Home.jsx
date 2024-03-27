import { useContext, useState } from "react";
import Banner from "../../components/banner/Banner";
import Book from "../../components/book/Book";
import { BooksContext } from "../root/Root";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Home = () => {
  const books = useContext(BooksContext);
  const [booksShowLength, setBooksShowLength] = useState(6);
  return (
    <div>
      <Banner />
      <h2 className="lg:text-5xl text-4xl font-bold text-center mb-6 lg:mb-16 font-playfair">
        Books
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-3 lg:mx-0 mb-4 lg:mb-8">
        {books.slice(0, booksShowLength).map((book) => (
          <Book {...{ book }} key={book.bookId} />
        ))}
      </div>
      <div className="flex justify-center mb-6 lg:mb-16">
        {booksShowLength !== books.length ? (
          <button
            className="btn bg-green-500 text-white animate-bounce"
            onClick={() => setBooksShowLength(books.length)}
          >
            Show more <AiOutlineArrowDown />
          </button>
        ) : (
          <button
            className="btn bg-green-500 text-white animate-bounce"
            onClick={() => setBooksShowLength(6)}
          >
            Show less <AiOutlineArrowUp />
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
