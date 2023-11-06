import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import useScrollTop from "../hooks/useScrollTop";

const MainLayout = () => {
  useScrollTop();
  return (
    <div className="font-Montserrat dark:bg-gray-900 dark:text-gray-100">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
