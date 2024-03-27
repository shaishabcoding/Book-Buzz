import { useContext, useState } from "react";
import { getLocalBooks, removeLocalBook } from "../../utils/localBook";
import { BooksContext } from "../../routes/root/Root";
import { IoLocationOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { BsFileEarmarkMedical } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbListDetails, TbCategory2 } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";

const BookList = ({ mode, sort }) => {
  const [readBookIds, setReadBookIds] = useState(getLocalBooks(mode));
  const books = useContext(BooksContext);
  const readBooks = books.filter((book) => readBookIds.includes(book.bookId));
  const sortedBooks = [...readBooks].sort((a, b) =>
    sort === "bookName" ? b[sort].localeCompare(a[sort]) : b[sort] - a[sort]
  );
  const newBooks = sort ? sortedBooks : readBooks;
  const handleBookRemove = (bookId) => () => {
    removeLocalBook(mode, bookId);
    setReadBookIds(getLocalBooks(mode));
  };

  return (
    <div className="flex flex-col gap-4">
      {newBooks.map((book, idx) => {
        const {
          bookId,
          bookName,
          author,
          image,
          rating,
          category,
          tags,
          yearOfPublishing,
          publisher,
          totalPages,
        } = book;
        return (
          <div
            key={idx}
            className="border rounded-lg p-4 flex flex-col lg:flex-row lg:gap-6"
          >
            <img
              src={image}
              alt={`image of ${bookName}`}
              className="w-full rounded-lg bg-gray-100 p-4 drop-shadow-sm lg:w-52"
            />
            <div className="flex-grow">
              <div className="flex-grow">
                <h2 className="text-2xl font-bold font-playfair mt-2">
                  {bookName}
                </h2>
                <p className="font-semibold text-sm mt-2">By: {author}</p>
              </div>
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
                <span className="flex items-center gap-1 lg:ml-4">
                  <IoLocationOutline />
                  Year of Publishing: {yearOfPublishing}
                </span>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-4 lg:mt-2">
                <span className="flex items-center gap-1">
                  <FiUsers />
                  Publisher: {publisher}
                </span>
                <span className="flex items-center gap-1 lg:ml-4">
                  <BsFileEarmarkMedical />
                  Page: {totalPages}
                </span>
              </div>
              <div className="border-t border-dashed border-gray-300 mt-3 pt-2 flex flex-wrap lg:gap-3 gap-2 text-xs">
                <span className="px-4 py-1 bg-blue-100 text-blue-500 font-semibold  rounded-full flex items-center justify-center gap-1">
                  Category : {category} <TbCategory2 />
                </span>
                <span className="px-4 py-1 bg-yellow-100 text-yellow-500 font-semibold  rounded-full flex items-center justify-center gap-1">
                  Rating : {rating} <AiOutlineStar />
                </span>
                <Link
                  to={`/book/${bookId}`}
                  className="px-4 py-1 bg-green-400 text-white font-semibold  rounded-full hover:bg-green-200 transition hover:text-green-400 flex items-center justify-center gap-1"
                >
                  View Details <TbListDetails />
                </Link>
                <button
                  onClick={handleBookRemove(bookId)}
                  className="px-4 py-1 bg-red-400 text-white font-semibold  rounded-full hover:bg-red-200 transition hover:text-red-400 flex items-center justify-center gap-1"
                >
                  Remove <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
BookList.propTypes = {
  mode: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};
export default BookList;
