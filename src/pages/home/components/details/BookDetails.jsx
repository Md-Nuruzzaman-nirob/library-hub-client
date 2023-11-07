import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import bg from "../../../../assets/bg4.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../../hooks/useAuth";

const BookDetails = () => {
  const [borrowStart, setBorrowStart] = useState("");
  const [borrowEnd, setBorrowEnd] = useState("");

  const { user } = useAuth();
  const { id } = useParams();
  const { category } = useParams();
  const categoryData = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();

  const findCategoryData = categoryData.filter((data) => data._id === id);

  useEffect(() => {
    const currentDate = new Date();

    // Format the date as "MM-DD-YYYY"
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${month}-${day}-${year}`;

    setBorrowStart(formattedDate);
  }, []);

  const handleBorrow = async (e) => {
    e.preventDefault();
    const borrowData = {
      displayName: user?.displayName,
      email: user?.email,
      borrowStart,
      borrowEnd,
      data: findCategoryData[0],
    };
    try {
      await axios
        .post("http://localhost:5001/api/v1/borrow-book", borrowData)
        .then((data) => {
          console.log(data.data);
          if (data.data.acknowledged) {
            alert("book added successfully");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[25vh] md:h-[30vh] text-white"
      >
        <div className="h-full flex items-center justify-between max-w-7xl mx-5 md:mx-10 xl:mx-auto">
          <h3 className="md:text-2xl xl:text-3xl font-extrabold mt-16 bg-gradient-to-r from-orange-500 to-teal-800 bg-clip-text text-transparent  tracking-widest">
            {category} / {findCategoryData[0].bookTitle}
          </h3>
          <button
            onClick={() => navigate(location?.state ? location.state : "/")}
            className="mt-16 btn btn-sm"
          >
            Back
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        {findCategoryData?.map((data) => (
          <div key={data._id} className="my-20">
            <img
              className="rounded-xl h-full object-cover"
              src={data?.imageUrl}
              alt=""
            />
            <div className="w-1/2">
              <h3 className="text-4xl font-bold tracking-widest border-b pb-2 my-5">
                {data.bookTitle}
              </h3>
              <p className="mt-2 font-medium">{data.description}</p>
              <div className="flex justify-between items-center my-2">
                <p className="text-lg font-medium">
                  Author : {data.authorName}
                </p>
                <p className="badge badge-secondary">{data.date}</p>
              </div>
              <p>Category : {data.category}</p>
              <div className="flex items-center justify-between">
                <p>{data.quantity}</p>
                <p>{data.rating}</p>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className=" btn btn-sm md:btn-md  bg-orange-500 hover:bg-orange-600  text-white text-xs md:text-sm rounded-full border-none"
                >
                  Borrow
                </button>

                <dialog id="my_modal_3" className="modal ">
                  <div className="modal-box dark:text-black">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-teal-700 hover:bg-teal-800 text-white">
                        ✕
                      </button>
                    </form>

                    <img
                      className="w-full  rounded-xl"
                      src={data.imageUrl}
                      alt=""
                    />
                    <h3 className="text-lg font-semibold font-PT border-b-2 py-3">
                      {data.bookTitle}
                    </h3>
                    <form onSubmit={handleBorrow}>
                      <div className="flex justify-between items-center mt-3">
                        <div className="font-medium font-mono">
                          <p>
                            Author :{" "}
                            <span className="font-semibold">
                              {data.authorName}
                            </span>
                          </p>
                          <p>
                            from :{" "}
                            <span className="font-semibold">{borrowStart}</span>
                          </p>
                        </div>

                        <div>
                          <p className="font-medium font-mono">
                            Category :{" "}
                            <span className="font-semibold">
                              {data.category}
                            </span>
                          </p>
                          <div className="flex w-full font-mono">
                            <label htmlFor="date" className="block mr-2">
                              To :
                            </label>
                            <input
                              onBlur={(e) => setBorrowEnd(e.target.value)}
                              className="font-semibold outline-none border border-transparent text-black"
                              type="date"
                              name="date"
                              id="date"
                              placeholder="Publish date"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full btn btn-sm lg:btn-md rounded-full mt-5 lg:text-base font-bold font-Montserrat bg-teal-600 hover:bg-teal-700 border-transparent hover:border-transparent  text-white"
                      >
                        Borrow
                      </button>
                    </form>
                  </div>
                </dialog>
                <Link className=" btn btn-outline btn-sm md:btn-md hover:bg-transparent hover:text-black text-xs md:text-sm rounded-full dark:border-white dark:text-white">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
