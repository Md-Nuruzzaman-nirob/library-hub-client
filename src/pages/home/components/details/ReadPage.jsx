import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import bg from "../../../../assets/bg4.jpg";

const ReadPage = () => {
  const { id } = useParams();
  const { title } = useParams();
  const categoryData = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(title);

  const findCategoryData = categoryData.filter((data) => data._id === id);
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

                <Link
                  to={`/${data.category}/${data.bookTitle}/${data._id}`}
                  state={location.pathname}
                  className=" btn btn-outline btn-sm md:btn-md hover:bg-transparent hover:text-black text-xs md:text-sm rounded-full dark:border-white dark:text-white"
                >
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

export default ReadPage;
