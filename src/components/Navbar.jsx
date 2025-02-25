import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const burgerMenuHandler = () => {
    setIsMenuClicked(!isMenuClicked);
    setBurgerClass(
      isMenuClicked ? "burger-bar unclicked" : "burger-bar clicked"
    );
  };

  return (
    <section className="fixed w-full">
      <div className="flex justify-between items-center px-4 py-2 md:py-4 md:px-0 container mx-auto">
        <div className="uppercase font-semibold text-sm md:text-xl">
          htet aung lwin
        </div>
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
            <NavLink className="hover:text-mblue cursor-pointer flex items-center gap-2">
              ABOUT ME
              <GoArrowUpRight className="text-xl" />
            </NavLink>
            <NavLink className="hover:text-mblue cursor-pointer flex items-center gap-2">
              WORKS <GoArrowUpRight className="text-xl" />
            </NavLink>
            <NavLink className="hover:text-mblue cursor-pointer flex items-center gap-2">
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
          {" "}
          <NavLink className="py-2 active:text-mblue">ABOUT ME</NavLink>
          <NavLink className="py-2 active:text-mblue">WORKS</NavLink>
          <NavLink className="py-2 active:text-mblue">CONTACT</NavLink>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
