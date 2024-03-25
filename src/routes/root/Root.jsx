import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Root = () => {
  return (
    <div className="lg:container mx-auto lg:max-w-6xl lg:px-3">
      <Navbar />
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default Root;
