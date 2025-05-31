import React from "react";
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaFacebook, FaSquareTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
            {/* Main Footer */}
            <footer className="relative bg-gray-800 mt-[30vh] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
                                <section className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                                    <div className="mx-auto max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl">
                                        <div className="bg-white rounded-xl shadow-lg shadow-gray-400/60 p-6 sm:p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center justify-between">
                                            <div className="flex flex-col gap-2 text-center sm:text-left">
                                                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold:text-gray-800 font-serif">
                                                    Ready to get started?
                                                </h3>
                                                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 font-serif">
                                                    Talk to us today
                                                </h3>
                                            </div>
                                            <div>
                                                <div className="btn flex justify-center sm:justify-end">
                                                    <NavLink to="/contact">
                                                        <button className="px-6 py-3 sm:px-8 sm:p-4 bg-blue-600 text-white text-sm sm:text-base md:text-lg font-semibold font-serif rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                                                            Get Started
                                                        </button>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className=" mx-auto max-w-10xl pt-24 sm:pt-32 lg:pt-40">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16 xl:gap-16">
                                        {/* About Section */}
                        <div className="footer-about text-white">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-serif mb-4 sm:mb-6">
                                Luxxy Store
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-sans leading-relaxed max-w-xs">
                                Lorem Ipsum is simply dummy text for the developers and designers.
                            </p>
                        </div>

                        {/* Subscribe Section */}
                        <div className="footer-subscribe text-white">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-serif mb-4 sm:mb-6">
                                Subscribe to get updates
                            </h3>
                            <div className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full max-w-md p-3 sm:p-4 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300"
                                />
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto px-6 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base md:text-lg font-semibold font-serif rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Follow Us Section */}
                        <div className="footer-follow text-white">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-serif mb-4 sm:mb-6">
                                Follow Us
                            </h3>
                            <div className="social-icons flex gap-x-3 sm:gap-x-3 mb-4 justify-left">
                                <FaDiscord className="text-2xl sm:text-3xl md:text-4xl text-white hover:text-blue-600 hover:scale-110 transition-all duration-300" />
                                <FaInstagram className="text-2xl md:text-3xl md:text-4xl text-white hover:text-blue-600 hover:scale-110 transition-all duration-300" />
                                <a href="https://youtu.be/Rtapgrl7A5Y?si=RuoeywWrjDK_2rgC" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube className="text-2xl sm:text-3xl md:text-4xl text-white hover:text-blue-600 hover:scale-110 transition-all duration-300" />
                                </a>
                            </div>
                            <div className="social-icons flex gap-x-2 sm:gap-x-3 mb-4 justify-left">
                                <FaLinkedin className="text-2xl sm:text-3xl md:text-4xl text-white hover:text-blue-600 hover:scale-110 transition-all duration-300" />
                                <FaSquareTwitter className="text-2xl sm:text-3xl md:text-4xl text-white hover:text-blue-600 hover:scale-110 transition-all duration-300" />
                                <FaFacebook className="text-2xl sm:text-3xl md:text-4xl text-white hover:text-blue-600 hover:scale-110 transition-all duration-300" />
                            </div>
                        </div>

                        {/* Contact Us Section */}
                        <div className="footer-contact text-white">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-serif mb-4 sm:mb-6">
                                Contact Us
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-sans">
                                9824543632
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-sans mt-2">
                                Bharatpur-10, Chitwan
                            </p>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="bottom-footer-section mt-12 sm:mt-16">
                        <hr className="border-gray-600" />
                        <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
                            <p className="text-sm sm:text-base text-gray-300 font-sans text-center sm:text-left">
                                @{new Date().getFullYear()} Luxxy Store. All Rights Reserved.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-end">
                                <p className="text-sm sm:text-base text-gray-300 font-sans text-center sm:text-right hover:text-blue-600 transition-colors duration-300">
                                    Privacy Policy
                                </p>
                                <p className="text-sm sm:text-base text-gray-300 font-sans text-center sm:text-right hover:text-blue-600 transition-colors duration-300">
                                    Terms and Conditions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;