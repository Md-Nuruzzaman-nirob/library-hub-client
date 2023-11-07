/* eslint-disable react/prop-types */
// import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  // const { user, loader } = useAuth();
  // const location = useLocation();

  // if (loader) {
  //   return (
  //     <p className="h-screen flex justify-center items-center">
  //       <span>loading</span>
  //     </p>
  //   );
  // }
  // if (!user.email) {
  //   return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  // }

  return children;
};

export default PrivateRoute;
