import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "./Context/cart_context";

const Nav = () => {
  const [menuIcons, setMenuIcons] = useState(false);
  const { total_item } = useCartContext();

  const getComponentStyle = (isActive) =>
    isActive
      ? "text-orange-500 underline underline-offset-4 font-semibold"
      : "text-gray-800 hover:text-orange-500 transition-colors duration-300";

  return (
    <nav className=" max-w-7xl  justify-center align-center items-center  top-6 z-50 top-0">
      <div className=" mx-auto px-4 py-auto   sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {["Home", "About", "Contact", "Product"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `text-lg text-[1.7rem] ${getComponentStyle(isActive)}`
                    }
                    onClick={() => setMenuIcons(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `relative flex items-center text-[1.7rem] font-medium ${getComponentStyle(isActive)}`
                  }
                  onClick={() => setMenuIcons(false)}
                >
                  <FiShoppingCart className="h-9 w-9" />
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[1rem] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {total_item}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-800 hover:text-orange-500 focus:outline-none"
              onClick={() => setMenuIcons(!menuIcons)}
            >
              {menuIcons ? (
                <CgClose className="h-8 w-8" />
              ) : (
                <CgMenu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg ${
          menuIcons ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          {["Home", "About", "Contact", "Product"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg font-medium ${getComponentStyle(isActive)}`
                }
                onClick={() => setMenuIcons(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex items-center text-lg font-medium ${getComponentStyle(isActive)}`
              }
              onClick={() => setMenuIcons(false)}
            >
              <FiShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {total_item}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;