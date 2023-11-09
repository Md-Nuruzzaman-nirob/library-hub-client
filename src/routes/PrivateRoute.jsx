/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();
  console.log(user);

  if (loader) {
    return (
      <p className="dark:bg-gray-900 h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </p>
    );
  }
  if (!user?.email) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
