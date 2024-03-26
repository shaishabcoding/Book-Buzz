import { useState } from "react";
import BookList from "../../components/selectedBooks/BookList";

const ListedBooks = () => {
  const [sort, setSort] = useState("");
  return (
    <div className="lg:mt-10 mt-4 mx-3 lg:mx-0">
      <h2 className="lg:text-5xl text-3xl font-bold text-center mb-6 lg:mb-16 font-playfair bg-gray-300 rounded-lg p-6 lg:p-8">
        Books
      </h2>
      <div className="flex items-center justify-center">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="bg-green-400 p-4 rounded-lg  outline-none text-white"
        >
          <option hidden>Sort</option>
          <option value="rating">Rating</option>
          <option value="pages">Number of pages</option>
          <option value="publishedYear"> Published year</option>
        </select>
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-6 lg:mt-16">
        <input
          type="radio"
          name="tab"
          role="tab"
          className="tab text-nowrap"
          aria-label="Read Books"
          checked
          readOnly
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <BookList mode="read" sort={sort} />
        </div>

        <input
          type="radio"
          name="tab"
          role="tab"
          className="tab text-nowrap"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <BookList mode="wishlist" sort={sort} />
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
