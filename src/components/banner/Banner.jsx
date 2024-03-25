import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero px-3 lg:p-0 lg:mt-4 lg:mb-20 mb-8">
      <div className="hero-content flex-col lg:flex-row-reverse bg-base-200 rounded-2xl lg:px-16 lg:py-10 w-full">
        <img
          src="banner.png"
          className="lg:h-96 lg:w-auto w-full rounded-lg "
        />
        <div>
          <h1 className="lg:text-5xl text-3xl font-bold mb-4 lg:mb-8 lg:flex flex-col gap-6">
            <span> Explore Endless Worlds with</span>
            <span>Our Book Bazaar!</span>
          </h1>
          <Link
            to="/listed-books"
            className="btn px-6 py-0 text-white bg-green-400"
          >
            View The List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;