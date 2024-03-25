import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link
      to={`/book/${bookId}`}
      className="border rounded-lg p-4 hover:scale-95 flex flex-col"
    >
      <img
        src={image}
        alt={`image of ${bookName}`}
        className="w-full rounded-lg bg-gray-100 p-4 drop-shadow-sm"
      />
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, idx) => (
          <div
            className="bg-green-100 text-sm text-green-500 font-semibold rounded-lg py-1 px-2 inline-block"
            key={idx}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="flex-grow">
        <h2 className="text-2xl font-bold font-playfair mt-2">{bookName}</h2>
        <p className="font-semibold text-sm mt-2">By: {author}</p>
      </div>
      <div className="border-t border-dashed border-gray-300 mt-3 pt-2 flex items-center justify-between gap-2">
        <span>{category}</span>
        <span className="flex gap-1 items-center justify-center">
          {rating} <AiOutlineStar />
        </span>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
