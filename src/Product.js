import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "./Helpers/FormatPrice";

const Product = ({ id, name, img, category, price }) => {
  return (
    <NavLink to={`/singleproduct/${id}`} className="group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <figure className="relative">
          <img
            src={img}
            alt={name}
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] object-cover"
          />
          <figcaption className="absolute top-4 left-4 bg-indigo-600 text-white text-xs sm:text-sm md:text-base font-semibold uppercase px-3 py-1 rounded-full group-hover:bg-indigo-700 transition-colors duration-300">
            {category}
          </figcaption>
        </figure>
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 truncate">
              {name}
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-blue-500">
              <FormatPrice price={price} />
            </p>
          </div>
          <button className="mt-4 mx-auto block px-4 py-2 bg-blue-500 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;