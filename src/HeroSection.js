import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = ({ myData }) => {
    
  const { name } = myData;

  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-6 animate-fade-in">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-600 font-serif uppercase tracking-wide">
              Welcome to
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-800 font-serif capitalize">
              {name}
            </h1>
            <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl text-gray-700 font-serif text-justify leading-relaxed">
              Welcome to our Electronics Store, where innovation meets excellence! Discover a curated collection of cutting-edge gadgets—from sleek smartphones and high-performance laptops to immersive audio systems and smart home devices—that are designed to transform your digital lifestyle. Whether you're upgrading your tech for work, play, or everyday convenience, our thoughtfully selected electronics empower you to stay connected, entertained, and ahead of the curve.
            </p>
            <NavLink to="/shop">
              <button className="mt-4 px-6 py-5 sm:px-8 sm:py-4 text-base sm:text-lg bg-blue-500 text-white font-semibold font-serif rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition-all duration-300">
                Shop Now
              </button>
            </NavLink>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-4xl  sm:h-[200px] md:h-[300px] lg:h-[300vh] xl:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://media.istockphoto.com/id/525491138/photo/man-shopping-at-a-tech-store.jpg?s=612x612&w=0&k=20&c=SS0N046l1pGQFqDH8pkBU99E1bpUJaxPhjBbaDJK16k="
                alt="hero-image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;