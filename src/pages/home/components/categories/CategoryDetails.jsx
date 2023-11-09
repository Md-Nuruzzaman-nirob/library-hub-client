import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Cards from "./Cards";
import bg from "../../../../assets/bg4.jpg";
import content from "../../../../assets/noData.png";

const CategoryDetails = () => {
  const { id } = useParams();
  const categoryData = useLoaderData() || [];

  const location = useLocation();
  const navigate = useNavigate();

  const filteredCategory = categoryData.filter((data) => data.category === id);

  return (
    <div className="">
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
            Category / {id}
          </h3>
          <button
            onClick={() => navigate(location?.state ? location.state : "/")}
            className="mt-16 btn btn-sm"
          >
            Back
          </button>
        </div>
      </div>

      {filteredCategory.length === 0 ? (
        <div className=" flex justify-center items-center">
          <img src={content} alt="" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-5 md:mx-10 xl:mx-auto my-20">
          {filteredCategory.length === 0 ? (
            <div className=" flex justify-center items-center border">
              <img src={content} alt="" />
            </div>
          ) : (
            filteredCategory?.map((data) => (
              <Cards key={data._id} id={id} data={data}></Cards>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryDetails;
