import { Link, useLocation } from "react-router-dom";

const Cards = ({ data, id }) => {
  const {
    authorName,
    bookTitle,
    date,
    description,
    imageUrl,
    rating,
    _id,
    quantity,
  } = data || {};

  const location = useLocation();

  return (
    <div className="">
      <div className="card shadow-xl dark:shadow-lg dark:shadow-gray-800">
        <figure>
          <img src={imageUrl} alt="Book Image" />
        </figure>
        <div className="p-5">
          <h2 className="text-lg font-semibold border-b-2">
            Book Name : {bookTitle}
          </h2>
          <div className="flex justify-between items-center mt-2">
            <p>{authorName}</p>
            <p className="badge badge-secondary font-medium">{date}</p>
          </div>

          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
          <Link
            to={`/${id}/${_id}`}
            state={location.pathname}
            className="btn w-full"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
