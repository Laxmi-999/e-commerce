import React from "react";
import { NavLink } from "react-router-dom";
import Nav from './Nav';
import { GlobalStyle } from "./GlobalStyle.js";

const Header = () => {
  return (
    <header className="px-12 h-40 flex bg-white shadow-lg justify-center align-center items-center  mb-[5rem] fixed justify-end items-center relative">
      <GlobalStyle />
      <figure>
        <img 
          className="absolute self-center bg-pink-500 h-20 w-auto left-[2%] top-6" 
          src="images/Luxxy.png" 
          alt="my-logo-img"
        />
      </figure>
      <Nav />
    </header>
  );
};

export default Header;