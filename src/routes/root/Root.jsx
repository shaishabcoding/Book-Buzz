import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/footer/Footer";
import { createContext } from "react";

export const BooksContext = createContext([]);
const Root = () => {
  const books = useLoaderData();
  return (
    <div>
      <div className="lg:container mx-auto lg:max-w-6xl lg:px-3">
        <Navbar />
        <ToastContainer />
        <BooksContext.Provider value={books}>
          <Outlet />
        </BooksContext.Provider>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
