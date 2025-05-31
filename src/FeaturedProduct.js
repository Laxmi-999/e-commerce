import React from "react";
import { useProductContext } from "./Context/ProductContext";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-2xl sm:text-3xl font-semibold text-gray-700 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      <div className="mx-auto w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-600 uppercase tracking-wider animate-slide-in-up">
            Discover Now
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mt-4 animate-slide-in-up animation-delay-200">
            Our Featured Products
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto animate-slide-in-up animation-delay-400">
            Explore our handpicked selection of premium products designed to elevate your experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
          {featureProducts.map((curElem) => (
            <div
              key={curElem.id}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Product {...curElem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;