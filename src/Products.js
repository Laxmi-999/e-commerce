import React, { useState } from "react";
import { MdGridView } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import ProductList from "./ProductList";
import Sort from "./Sort";
import FilterSection from "./FilterSection";

const Product = () => {
  const [view, setView] = useState("grid");

  return (
      <div className="ml-auto   mr-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="mb-10  sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 animate-slide-in-up">
            Explore Our Products
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto animate-slide-in-up animation-delay-200">
            Discover a curated selection of premium items tailored to your needs.
          </p>
        </div>
        <div className="flex flex-col lg:grid-cols-[0.3fr_1fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 justify-items-center">
           <div className="flex flex-col ml-auto mr-auto  sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 md:mb-10">
              <Sort />
            </div>
            
            <div className="flex">
                <div className="filter-products w-full max-w-md mx-auto lg:mx-0">
                <FilterSection />
              </div>
                <div className="view-products w-full">
                  <ProductList view={view} />
                </div>
          </div>
        </div>
      </div>
  );
};

export default Product;