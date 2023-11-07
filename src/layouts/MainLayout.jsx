import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import useScrollTop from "../hooks/useScrollTop";
import Theme from "../components/Theme";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  useScrollTop();
  return (
    <div className="font-Montserrat dark:bg-gray-900 dark:text-gray-100">
      <Theme></Theme>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
