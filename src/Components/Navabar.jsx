import React, { useState } from "react";

import { NavLink } from "react-router";
export default function Navabar() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0  py-5 text-white z-10 bg-sec">
      <div className="container mx-auto px-6 lg:px-24 py-3 flex items-center justify-between">
        <NavLink className="text-3xl uppercase text-white font-bold" to={"/"}>
          Start Framework
        </NavLink>

        <button
          onClick={() => setisOpen(!isOpen)}
          className={`md:hidden text-white text-2xl ${isOpen ? "hidden" : ""}`}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      <div
        className={`w-full md:w-auto md:flex md:items-center transition-all duration-300  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:gap-x-6  mt-4 md:mt-0">
          <li className="text-center">
            <NavLink
              className={({ isActive }) =>
                `block px-4 py-2 rounded font-bold uppercase ${
                  isActive ? "bg-main text-white" : "text-white"
                }`
              }
                onClick={() => setisOpen(false)}

              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              className={({ isActive }) =>
                `block px-4 py-2 rounded font-bold uppercase ${
                  isActive ? "bg-main text-white" : "text-white"
                }`
              }
              onClick={() => setisOpen(false)}
              to={"/portofolio"}
            >
              Portofolio
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              className={({ isActive }) =>
                `block px-4 py-2 rounded font-bold uppercase ${
                  isActive ? "bg-main text-white" : "text-white"
                }`
              }
              onClick={() => setisOpen(false)}
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}
