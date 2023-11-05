import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const MainLayout = () => {
  return (
    <div className="font-Montserrat">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
};

export default MainLayout;
