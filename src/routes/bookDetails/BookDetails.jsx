import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addLocalBook, hasLocalBook } from "../../utils/localBook";
import { useContext } from "react";
import { BooksContext } from "../../routes/root/Root";

const BookDetails = () => {
  const books = useContext(BooksContext);
  const { bookId } = useParams();
  const book = books.find((book) => book.bookId === +bookId);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  const handleWishlist = () => {
    if (hasLocalBook("read", bookId)) {
      toast.error("You have already read this book!");
    } else if (hasLocalBook("wishlist", bookId)) {
      toast.error("You have already added in wishlist this book!");
    } else {
      toast.success("Book added to wish list");
      addLocalBook("wishlist", bookId);
    }
  };
  const handleRead = () => {
    if (hasLocalBook("read", bookId)) {
      toast.error("You have already read this book!");
    } else {
      toast.success("Book added to read list");
      addLocalBook("read", bookId);
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 mx-4 mb-6 lg:mt-4 lg:mb-16">
      <img
        src={image}
        alt={`image of ${bookName}`}
        className="bg-gray-300 rounded-lg p-3 h-full"
      />
      <div>
        <h2 className="font-playfair text-2xl lg:text-4xl font-bold">
          {bookName}
        </h2>
        <p className="font-semibold mt-1 mb-3 lg:mt-3">By: {author}</p>
        <p className="border-y-2 border-gray-200 border-dashed py-2">
          {category}
        </p>
        <p className="my-3">
          <b>Review : </b>
          {review}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="font-semibold mr-2">Tag</span>
          {tags.map((tag, idx) => (
            <div
              className="bg-green-100 text-sm text-green-500 font-semibold rounded-lg py-1 px-2 inline-block"
              key={idx}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="border-t-2 border-gray-200 border-dashed mt-4 pt-3">
          <div className="overflow-x-auto">
            <table className="table book-details">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td>Number of Pages:</td>
                  <td>{totalPages}</td>
                </tr>
                <tr className="border-none">
                  <td>Publisher:</td>
                  <td>{publisher}</td>
                </tr>
                <tr className="border-none">
                  <td>Year of Publishing:</td>
                  <td>{yearOfPublishing}</td>
                </tr>
                <tr className="border-none">
                  <td>Rating:</td>
                  <td>{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <button
            onClick={handleRead}
            className="btn px-6 py-0 bg-white border-black"
          >
            Read
          </button>
          <button
            onClick={handleWishlist}
            className="btn px-6 py-0 text-white bg-cyan-400 border-cyan-400"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
