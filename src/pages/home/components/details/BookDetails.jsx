import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import bg from "../../../../assets/bg4.jpg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";

const BookDetails = () => {
  const [borrowStart, setBorrowStart] = useState("");
  const [borrowEnd, setBorrowEnd] = useState("");

  const { user } = useAuth();
  const { id } = useParams();
  const categoryParams = useParams();
  const categoryP = [...categoryParams.category];
  const categoryData = useLoaderData() || [];
  const location = useLocation();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const findCategoryData = categoryData.find((data) => data._id === id);

  const {
    authorName,
    bookTitle,
    category,
    imageUrl,
    quantity,
    rating,
    _id,
    description,
    date,
  } = findCategoryData || {};

  useEffect(() => {
    const currentDate = new Date();

    // Format the date as "MM-DD-YYYY"
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    setBorrowStart(formattedDate);
  }, []);

  const handleBorrow = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Borrowing in Progress");
    const borrowData = {
      displayName: user?.displayName,
      email: user?.email,
      borrowStart,
      borrowEnd,
      data: findCategoryData,
    };
    try {
      await axios
        .post(
          "https://library-hub-server.vercel.app/api/v1/borrow-book",
          borrowData
        )
        .then((data) => {
          if (data.data.acknowledged) {
            toast.success("Borrow Successful", { id: toastId });
          }
        });

      await axios
        .patch(
          `https://library-hub-server.vercel.app/api/v1/update-book/${_id}`,
          {
            quantity: parseInt(quantity) - 1,
          }
        )
        .then(() => {
          formRef.current.reset();
          navigate(location.pathname);
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
            {categoryP} / {bookTitle}
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
        <div className="my-14 lg:my-20 flex flex-col-reverse md:flex-row gap-6 lg:gap-8">
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-PT font-bold tracking-widest border-b pb-1 lg:pb-2 mb-2 lg:mb-4">
              {bookTitle}
            </h3>
            <p className="my-2 text-sm lg:text-lg font-mono text-justify">
              <span className=" underline font-bold underline-offset-4">
                Description
              </span>{" "}
              : {description}
            </p>

            <p className="text-sm lg:text-lg font-mono">
              <span className=" underline font-bold underline-offset-4">
                Author
              </span>{" "}
              : <span className="">{authorName}</span>
            </p>
            <div className="flex justify-between items-center mb-2 text-sm lg:text-lg">
              <p className="font-mono mt-2">
                <span className=" underline font-bold underline-offset-4">
                  Category
                </span>{" "}
                : <span className="">{category}</span>
              </p>
              <p className="font-mono">
                <span className=" underline font-bold underline-offset-4">
                  Publish Date
                </span>{" "}
                :{" "}
                <span className="badge badge-sm lg:badge-md badge-ghost">
                  {date}
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between font-mono mt-2 text-sm lg:text-lg">
              <p>
                <span className="underline font-bold underline-offset-4">
                  Quantity
                </span>{" "}
                :{" "}
                <span className="badge  badge-sm lg:badge-md badge-warning">
                  {quantity}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="underline font-bold underline-offset-4">
                  Rating :
                </span>
                <div className="rating rating-xs lg:rating-sm badge badge-ghost">
                  <input
                    type="radio"
                    className="mask mask-star-2 bg-green-400"
                    disabled
                    defaultChecked={rating === "1"}
                  />
                  <input
                    type="radio"
                    className="mask mask-star-2 bg-green-400"
                    disabled
                    defaultChecked={rating === "2"}
                  />
                  <input
                    type="radio"
                    className="mask mask-star-2 bg-green-500"
                    disabled
                    defaultChecked={rating === "3"}
                  />
                  <input
                    type="radio"
                    className="mask mask-star-2 bg-green-600"
                    disabled
                    defaultChecked={rating === "4"}
                  />
                  <input
                    type="radio"
                    className="mask mask-star-2 bg-green-600"
                    disabled
                    defaultChecked={rating === "5"}
                  />
                </div>
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-8">
              <Link
                to={`/${category}/${bookTitle}/${_id}`}
                state={location.pathname}
                className="flex-1 btn btn-outline btn-sm hover:bg-transparent hover:text-black text-xs md:text-sm rounded-full dark:border-white dark:text-white"
              >
                Read More
              </Link>
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="flex-1 btn btn-sm  bg-orange-500 hover:bg-orange-600  text-white text-xs md:text-sm rounded-full border-none"
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

                  <img className="w-full  rounded-xl" src={imageUrl} alt="" />
                  <h3 className="text-lg font-semibold font-PT border-b-2 py-3">
                    {bookTitle}
                  </h3>
                  <form ref={formRef} onSubmit={handleBorrow}>
                    <div className="flex flex-col md:flex-row justify-between md:items-center mt-3">
                      <div className="font-medium font-mono">
                        <p>
                          Author :{" "}
                          <span className="font-semibold">{authorName}</span>
                        </p>
                        <p className="hidden md:block">
                          from :{" "}
                          <span className="font-semibold">{borrowStart}</span>
                        </p>
                        <p className="font-medium font-mono block md:hidden">
                          Quantity :{" "}
                          <span className="font-semibold">{quantity}</span>
                        </p>
                      </div>

                      <div>
                        <p className="font-medium font-mono hidden md:block">
                          Quantity :{" "}
                          <span className="font-semibold">{quantity}</span>
                        </p>
                        <p className="block md:hidden font-medium font-mono ">
                          from :{" "}
                          <span className="font-semibold">{borrowStart}</span>
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
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      disabled={quantity === 0}
                      type="submit"
                      className="w-full btn btn-sm lg:btn-md rounded-full mt-5 lg:text-lg font-bold font-Montserrat bg-teal-600 hover:bg-teal-700 border-transparent hover:border-transparent  text-white"
                    >
                      Borrow
                    </button>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
          <div className="flex-1 ">
            <img
              className="rounded-xl object-cover w-full"
              src={imageUrl}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
