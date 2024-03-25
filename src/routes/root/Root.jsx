import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Root = () => {
  return (
    <div className="lg:container mx-auto lg:max-w-6xl lg:px-3">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
