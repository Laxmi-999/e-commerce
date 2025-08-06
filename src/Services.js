import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const Services = () => {
  return (
    <section className="bg-gray-50 mt-[10rem] py-[10rem] sm:py-[5rem] lg:py-[10rem] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
       <h1 className="text-center text-[3rem] mb-[2rem] mt-[1rem]">Our Services</h1>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {/* Service 1: Super Fast and Free Delivery */}
          <div className="services bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in">
            <TbTruckDelivery className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 mb-4 transition-transform duration-300 hover:scale-110" />
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 font-serif capitalize">
              Super Fast & Free Delivery
            </h3>
          </div>

          {/* Service 2 & 3: Non-Contact Shipping and Money Back Guarantee */}
          <div className="services flex flex-col gap-6 sm:gap-8">
            <div className="service-data-2 bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in">
              <MdSecurity className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 mb-4 transition-transform duration-300 hover:scale-110" />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 font-serif capitalize">
                Non-Contact Shipping
              </h3>
            </div>
            <div className="service-data-2 bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in">
              <GiReceiveMoney className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 mb-4 transition-transform duration-300 hover:scale-110" />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 font-serif capitalize">
                Money Back Guarantee
              </h3>
            </div>
          </div>

          {/* Service 4: Super Fast and Free Delivery (Repeated in Original) */}
          <div className="services bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in">
            <TbTruckDelivery className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 mb-4 transition-transform duration-300 hover:scale-110" />
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 font-serif capitalize">
              Super Fast & Free Delivery
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;