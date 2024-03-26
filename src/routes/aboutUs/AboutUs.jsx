function AboutUs() {
  return (
    <div className="mx-3 mt-2 lg:mt-6 mb-6 lg:mb-16">
      <h2 className="lg:text-5xl text-3xl font-bold text-center mb-4 lg:mb-10 font-playfair bg-gray-300 rounded-lg p-6 lg:p-8">
        About Us
      </h2>
      <p className="text-3xl font-semibold">
        Welcome to
        <span className="ml-2 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
          Book Buzz
        </span>
        !
      </p>
      <div className="font-semibold flex flex-col gap-4 mt-4 bg-gradient-to-b from-black to-gray-500 text-transparent bg-clip-text">
        <p>
          At Book Buzz, we are passionate about books and reading. Our mission
          is to provide readers with insightful reviews, recommendations, and
          literary discussions to help them discover their next great read.
        </p>
        <p>
          Our team of dedicated reviewers consists of avid readers and
          literature enthusiasts who are committed to delivering honest and
          unbiased assessments of a wide range of books across various genres.
        </p>
        <p>
          Whether you are a seasoned bookworm or just starting your reading
          journey, we hope Book Buzz becomes your go-to destination for all
          things related to books and literature.
        </p>
        <p>Thank you for visiting Book Buzz, and happy reading!</p>
      </div>
    </div>
  );
}

export default AboutUs;
