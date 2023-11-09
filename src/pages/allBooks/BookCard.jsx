/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";

const BookCard = ({ card }) => {
  console.log(card);
  const { authorName, bookTitle, category, imageUrl, quantity, rating, _id } =
    card || {};

  console.log(card);

  const location = useLocation();
  console.log(location);
  return (
    <div className="card shadow-xl dark:shadow-lg dark:shadow-gray-800">
      <figure className="w-full h-[250px]">
        <img className="w-full h-full" src={imageUrl} alt="Book Image" />
      </figure>

      <div className="px-5 pb-6">
        <h3 className="text-xl font-PT font-bold tracking-widest border-b pb-1 lg:pb-2 mt-3 mb-2 lg:mb-4 h-14 flex items-center overflow-hidden">
          {bookTitle}
        </h3>

        <div className="flex justify-between items-center mb-2 text-sm xl:text-base">
          <p className="text-sm xl:text-base font-mono">
            <span className=" underline font-bold underline-offset-4">
              Author
            </span>{" "}
            : <span className="">{authorName}</span>
          </p>
          <p className="font-mono">
            <span className=" underline font-bold underline-offset-4">
              Category
            </span>{" "}
            : <span className="">{category}</span>
          </p>
        </div>
        <div className="flex items-center justify-between font-mono mt-2 text-sm xl:text-base mb-5">
          <p>
            <span className="underline font-bold underline-offset-4">
              Quantity
            </span>{" "}
            :{" "}
            <span className="badge  badge-sm xl:badge-md badge-warning">
              {quantity}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="underline font-bold underline-offset-4">
              Rating :
            </span>
            <div className="rating rating-xs xl:rating-sm badge badge-ghost">
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
        <div className="flex items-center gap-5">
          <Link
            to={`/${category}/${bookTitle}/${_id}`}
            state={location.pathname}
            className="flex-1 btn btn-outline btn-sm hover:bg-transparent hover:text-black text-xs md:text-sm rounded-full dark:border-white dark:text-white"
          >
            Read More
          </Link>
          <Link
            to={`/${category}/${bookTitle}/${_id}/update`}
            state={location.pathname}
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="flex-1 btn btn-sm  bg-orange-500 hover:bg-orange-600  text-white text-xs md:text-sm rounded-full border-none"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
