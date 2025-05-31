import React from "react";

const Trusted = () => {
  return (
    <section className="bg-gray-50  py-[10rem] mt-[15rem] sm:py-[8rem] lg:py-[12rem] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className=" mx-auto max-w-8xl">
        <h3 className="text-2xl sm:text-3xl md:text-4xl mb-[2rem] lg:text-5xl xl:text-5xl font-bold text-gray-800 font-serif capitalize text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          Trusted by 1000+ Companies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
          <div className="slide flex justify-center items-center">
            <img
              src="/images/brand-1.jpg"
              alt="first brand img"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain rounded-lg shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
            />
          </div>
          <div className="slide flex justify-center items-center">
            <img
              src="/images/brand-2.png"
              alt="second brand"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain rounded-lg shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
            />
          </div>
          <div className="slide flex justify-center items-center">
            <img
              src="/images/brand-3.jpg"
              alt="third brand"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain rounded-lg shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
            />
          </div>
          <div className="slide flex justify-center items-center">
            <img
              src="/images/brand-4.png"
              alt="fourth brand"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain rounded-lg shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
            />
          </div>
          <div className="slide flex justify-center items-center">
            <img
              src="/images/brand-5.jpg"
              alt="fifth brand"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain rounded-lg shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;