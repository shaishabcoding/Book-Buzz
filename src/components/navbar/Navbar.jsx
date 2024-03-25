import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listed-books">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/read-pages">Pages to Read</NavLink>
      </li>
    </>
  );
  return (
    <nav id="sidebar" className="navbar bg-base-100 lg:mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Buzz</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="lg:flex gap-4 hidden">
          <a className="btn px-6 py-0 text-white bg-green-400">Sign In</a>
          <a className="btn px-6 py-0 text-white bg-cyan-400">Sign up</a>
        </div>
        <a className="btn rounded-full text-2xl p-0 aspect-square mr-2 bg-green-400 lg:hidden">
          <FaRegUserCircle />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
