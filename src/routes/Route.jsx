import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AddBook from "../pages/addBook/AddBook";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import BorrowedBooks from "../pages/borrowedBooks/BorrowedBooks";
import AllBooks from "../pages/allBooks/AllBooks";
import CategoryDetails from "../pages/home/components/categories/CategoryDetails";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../pages/home/components/details/BookDetails";
import ReadPage from "../pages/home/components/details/ReadPage";
import UpdateBook from "../pages/allBooks/UpdateBook";

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
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "allBooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "borrowedBooks",
        element: (
          <PrivateRoute>
            {" "}
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <CategoryDetails></CategoryDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5001/api/v1/read-book"),
      },
      {
        path: ":category/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5001/api/v1/read-book"),
      },
      {
        path: ":category/:title/:id",
        element: (
          <PrivateRoute>
            <ReadPage></ReadPage>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5001/api/v1/read-book"),
      },
      {
        path: ":category/:title/:id/update",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5001/api/v1/read-book"),
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
