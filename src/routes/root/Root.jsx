import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/footer/Footer";
const Root = () => {
  return (
    <div>
      <div className="lg:container mx-auto lg:max-w-6xl lg:px-3">
        <Navbar />
        <ToastContainer />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
