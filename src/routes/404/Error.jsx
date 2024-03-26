import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row bg-gray-100 items-center justify-center p-10">
      <div className="display__img">
        <img src="/error.webp" alt="404-Scarecrow" />
      </div>
      <div className="">
        <h2 className="text-3xl font-bold">I have bad news for you</h2>
        <p className="my-4">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <Link to="/" className="btn bg-sky-300">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
