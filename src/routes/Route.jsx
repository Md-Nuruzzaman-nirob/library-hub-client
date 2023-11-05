import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AddBook from "../pages/addBook/AddBook";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import BorrowedBooks from "../pages/borrowedBooks/BorrowedBooks";
import AllBooks from "../pages/allBooks/AllBooks";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "addBook",
        element: <AddBook></AddBook>,
      },
      {
        path: "allBooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "borrowedBooks",
        element: <BorrowedBooks></BorrowedBooks>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default Route;
