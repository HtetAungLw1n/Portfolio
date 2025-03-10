import React, { useState } from "react";
import { Link, Links, NavLink } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import cv from "../assets/cv.pdf";

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const burgerMenuHandler = () => {
    setIsMenuClicked(!isMenuClicked);
    setBurgerClass(
      isMenuClicked ? "burger-bar unclicked" : "burger-bar clicked"
    );
  };

  const closeWhenClick = () => {
    setIsMenuClicked(false);
    setBurgerClass("burger-bar unclicked");
  };

  return (
    <section className="fixed w-full z-30">
      <div className="flex justify-between items-center px-4 py-2 md:py-4 md:px-0 container mx-auto">
        <Link to={"/"} className="uppercase font-semibold text-sm md:text-xl">
          htet aung lwin
        </Link>
        <div>
          {/* this is burger  */}
          <div
            className="burger-menu h-full flex flex-col items-start justify-between cursor-pointer w-4 gap-1 md:hidden"
            onClick={burgerMenuHandler}
          >
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div>
          {/* this is burger  */}

          {/* this is md nav  */}
          <div className="md:flex md:gap-4 md:font-medium hidden">
            <NavLink
              to={"/about-me"}
              className="hover:text-mblue cursor-pointer flex items-center gap-2"
            >
              ABOUT ME
              <GoArrowUpRight className="text-xl" />
            </NavLink>
            <NavLink
              to={"/works"}
              className="hover:text-mblue cursor-pointer flex items-center gap-2"
            >
              WORKS <GoArrowUpRight className="text-xl" />
            </NavLink>
            <NavLink
              to={"/contact"}
              className="hover:text-mblue cursor-pointer flex items-center gap-2"
            >
              CONTACT <GoArrowUpRight className="text-xl" />
            </NavLink>
          </div>
          {/* this is md nav  */}
        </div>
      </div>

      {/* Menu with transition effect */}
      <div
        className={`text-jet text-3xl bg-white-smoke h-[95vh] w-full p-4 absolute top-10 transform transition-all duration-700 ease-in-out 
        ${
          isMenuClicked
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-between mt-4">
          <NavLink
            to={""}
            onClick={closeWhenClick}
            className="py-2 active:text-mblue"
          >
            HOME
          </NavLink>
          <NavLink
            to={"/about-me"}
            onClick={closeWhenClick}
            className="py-2 active:text-mblue"
          >
            ABOUT ME
          </NavLink>
          <NavLink
            to={"/works"}
            onClick={closeWhenClick}
            className="py-2 active:text-mblue"
          >
            WORKS
          </NavLink>
          <a href={cv} download="FD_HAL" className="py-2 active:text-mblue">
            RESUME
          </a>
          <NavLink
            to={"/contact"}
            onClick={closeWhenClick}
            className="py-2 active:text-mblue"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
