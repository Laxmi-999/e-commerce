import React from "react";

const Contact = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-12 animate-fade-in font-serif">
        Contact Us
      </h2>

      {/* Map Section */}
      <div className="w-full mx-auto mb-12">
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466693.1287910362!2d84.23669836210262!3d27.589431919383987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb37e078d531%3A0x973f22922ea702f7!2sBharatpur%2044200!5e0!3m2!1sen!2snp!4v1697188825607!5m2!1sen!2snp"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Query Section */}
      <div className="w-full max-w-4xl mx-auto mt-[3rem] text-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 bg-gray-200 inline-block px-8 py-4 rounded-full mb-8 shadow-md font-serif">
          Have Any Query?
        </h3>

        {/* Form */}
        <form
          action="https://formspree.io/f/xoqoylll"
          method="POST"
          className="bg-gray-200 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg w-full grid gap-6 transition-all duration-300"
        >
          <input
            type="text"
            name="UserName"
            placeholder="Enter your name"
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition-all font-serif text-gray-700 placeholder-gray-400"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition-all font-serif text-gray-700 placeholder-gray-400"
            required
            autoComplete="off"
          />
          <textarea
            name="Message"
            placeholder="Type your message"
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none resize-y min-h-[150px] font-serif text-gray-700 placeholder-gray-400"
            cols="30"
            rows="6"
            required
            autoComplete="off"
          ></textarea>
          <button
            type="submit"
            className="w-full sm:w-auto sm:px-12 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-md font-serif"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;