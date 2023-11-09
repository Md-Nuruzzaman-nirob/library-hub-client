import { useEffect, useState } from "react";
import bg from "../../assets/bg4.jpg";
import bg2 from "../../assets/gradient-bg.svg";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const [data, setData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(
        `https://library-hub-server.vercel.app/api/v1/borrow-book?email=${user.email}`,
        {
          withCredentials: true,
        }
      )
      .then((data) => setData(data.data));
  }, [user.email]);

  const handleDelete = (booksData, id) => {
    const bookData = booksData;
    console.log("bookData", bookData);
    Swal.fire({
      title: "Are you sure that you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://library-hub-server.vercel.app/api/v1/borrow-book/${id}`,
            { withCredentials: true }
          )
          .then((data) => {
            if (data.data.deletedCount > 0) {
              axios
                .patch(
                  `https://library-hub-server.vercel.app/api/v1/update-book/${bookData.data._id}`,
                  {
                    quantity: parseInt(bookData.data.quantity),
                  }
                )
                .then((data) => {
                  console.log(data.data);
                  Swal.fire(
                    "returned!",
                    "Your book has been returned successfully.",
                    "success"
                  );
                  location.reload();
                });
            }
          });
      }
    });
  };

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[25vh] md:h-[30vh] text-white"
      >
        <div className="h-full flex items-center max-w-7xl mx-5 md:mx-10 xl:mx-auto">
          <h3 className="md:text-2xl xl:text-3xl font-extrabold mt-16 bg-gradient-to-r from-orange-500 to-teal-800 bg-clip-text text-transparent  tracking-widest">
            Library Hub / Borrowed Books
          </h3>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="overflow-x-auto  max-w-7xl mx-5 md:mx-10 xl:mx-auto py-20 dark:text-white">
          <table className="table dark:text-white">
            {/* head */}
            <thead className="dark:text-gray-200">
              <tr>
                <th>Image</th>
                <th>Book Name</th>
                <th>Category</th>
                <th>Borrowed Date</th>
                <th>Return Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data?.map((data) => (
                <tr key={data._id} className="border-b-1">
                  <th>
                    <img
                      className="w-28 h-28 rounded-xl"
                      src={data?.data?.imageUrl}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </th>
                  <td>{data?.data?.bookTitle}</td>
                  <td>{data?.data?.category}</td>
                  <td>{data?.borrowStart}</td>
                  <td>{data?.borrowEnd}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(data, data._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Return
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot className="dark:text-gray-200">
              <tr>
                <th>Image</th>
                <th>Book Name</th>
                <th>Category</th>
                <th>Borrowed Date</th>
                <th>Return Date</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
export default BorrowedBooks;
