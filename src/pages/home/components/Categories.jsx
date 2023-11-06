/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div id="categories" className="max-w-7xl mx-5 md:mx-10 xl:mx-auto mb-20">
      <h3 className="text-center text-5xl font-bold mb-16">All Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  <h3 className="text-sm lg:text-lg font-semibold text-white uppercase">
                    {category.name}
                  </h3>

                  <Link
                    to={`/${category.name}`}
                    className="btn btn-sm text-white bg-cyan-700 hover:bg-cyan-800 border-none normal-case"
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
  );
};

export default Categories;
