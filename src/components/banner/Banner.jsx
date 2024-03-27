import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="hero px-3 lg:p-0 lg:mt-4 lg:mb-20 mb-8">
      <div className="hero-content flex-col lg:flex-row-reverse bg-base-200 rounded-2xl lg:px-16 lg:py-10 w-full">
        <img src="banner.png" className="lg:h-96 lg:w-auto w-2/3 rounded-lg " />
        <div>
          <h1 className="lg:text-5xl text-3xl font-bold mb-4 lg:mb-8 lg:flex flex-col gap-6 font-playfair">
            <span> Explore Endless Worlds with</span>
            <span className="flex gap-2 mr-2 lg:mr-0">
              Our
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Book Bazaar
              </span>
              !
            </span>
          </h1>
          <Link
            to="/listed-books"
            className="btn px-6 py-0 text-white bg-green-400"
          >
            View The List <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
