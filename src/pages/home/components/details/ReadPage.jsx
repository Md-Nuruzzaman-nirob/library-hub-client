import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import bg from "../../../../assets/bg4.jpg";

const ReadPage = () => {
  const { id } = useParams();
  const { title } = useParams();
  const categoryData = useLoaderData() || [];
  const location = useLocation();
  const navigate = useNavigate();
  console.log(title);

  const findCategoryData = categoryData.find((data) => data._id === id);
  console.log(findCategoryData);
  const {
    authorName,
    bookTitle,
    category,
    imageUrl,
    content,
    quantity,
    rating,
    _id,
    description,
    date,
  } = findCategoryData || {};
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
            Read / {title}
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
        <div
          key={_id}
          className="my-14 lg:my-20 flex flex-col-reverse md:flex-row gap-6 lg:gap-8"
        >
          <div className="flex-1 lg:flex-[7] xl:flex-[5]">
            <h3 className="border-b-2 font-PT font-bold text-xl pb-1 mb-2">
              Content :
            </h3>
            <h3 className="font-medium text-justify text-sm xl:text-base">
              {content}
            </h3>
          </div>

          <div className="flex-1 lg:flex-[6] xl:flex-[3]">
            <img className="rounded-xl" src={imageUrl} alt="" />
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-PT font-bold tracking-widest border-b pb-1 lg:pb-2 mt-3 mb-2 lg:mb-4">
              {bookTitle}
            </h3>
            <p className="my-2 text-sm lg:text-base font-mono text-justify">
              <span className=" underline font-bold underline-offset-4">
                Description
              </span>{" "}
              : {description}
            </p>

            <p className="text-sm lg:text-base font-mono">
              <span className=" underline font-bold underline-offset-4">
                Author
              </span>{" "}
              : <span className="">{authorName}</span>
            </p>
            <div className="flex justify-between items-center mb-2 text-sm lg:text-base">
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
            <div className="flex items-center justify-between font-mono mt-2 text-sm lg:text-base">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadPage;
