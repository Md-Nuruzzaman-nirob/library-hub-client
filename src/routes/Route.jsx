import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AddBook from "../pages/addBook/AddBook";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import BorrowedBooks from "../pages/borrowedBooks/BorrowedBooks";
import AllBooks from "../pages/allBooks/AllBooks";
import CategoryDetails from "../pages/home/components/CategoryDetails";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5001/api/v1/categories"),
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
      {
        path: ":id",
        element: <CategoryDetails></CategoryDetails>,
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
