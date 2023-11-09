/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="">
      <div>
        <div
          id="categories"
          className="max-w-7xl mx-5 md:mx-10 xl:mx-auto pb-20"
        >
          <h3 className="text-center text-4xl font-bold pt-40 pb-14 tracking-widest">
            All Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
            {categories.map((category, index) => (
              <div
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
                key={category._id}
                className="relative"
              >
                <img className="rounded-xl" src={category.image} alt="" />
                {hoveredCategory == index && (
                  <div className="absolute inset-0 hover:bg-opacity-60 rounded-xl hover:rounded-xl flex items-center justify-center bg-black transition duration-500 ease-linear">
                    <div className="text-center">
                      <h3 className="text-sm lg:text-lg font-semibold text-white uppercase my-2 lg:my-3 tracking-widest">
                        {category.name}
                      </h3>

                      <Link
                        to={`/${category.name}`}
                        className=" btn btn-xs md:btn-sm text-white bg-cyan-700 hover:bg-cyan-800 border-none normal-case rounded-md w-20 lg:w-32"
                      >
                        Click
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
