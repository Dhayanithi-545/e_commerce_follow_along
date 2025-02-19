/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/EasyShop.png'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Logo and Shop Name */}
          <div className="flex items-center">
            <img
              src={logo} // Update with your actual logo path
              alt="EasyShop Logo"
              className="h-10 w-10 mr-2"
            />
            <span className="text-white text-xl font-bold tracking-wide">
              EasyShop
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-center w-full">
            <ul className="flex space-x-6">
              {[
                { name: "Home", path: "/" },
                { name: "My Products", path: "/my-products" },
                { name: "Add Products", path: "/create-product" },
                { name: "Cart", path: "/cart" },
              ].map(({ name, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg text-sm transition duration-300 ${
                        isActive
                          ? "bg-white text-blue-600 font-semibold"
                          : "text-gray-200 hover:bg-blue-500 hover:text-white"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700" id="mobile-menu">
          <ul className="px-4 py-3 space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "My Products", path: "/my-products" },
              { name: "Add Products", path: "/create-product" },
              { name: "Cart", path: "/cart" },
            ].map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md text-base transition duration-300 ${
                      isActive
                        ? "bg-white text-blue-600 font-semibold"
                        : "text-gray-200 hover:bg-blue-500 hover:text-white"
                    }`
                  }
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
