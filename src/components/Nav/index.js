import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const NavBarIcons = ({ icons }) => <div className="navbar-icons">{icons}</div>;

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen w-16 flex flex-col shadow-lg bg-white dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto ">
        <a href="/" className="flex items-center">
          <i>
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-stone-500 text-gray-600">
              <NavBarIcons icons={<FaFire size="28" />} />
            </span>
          </i>
        </a>
      </div>
      <div className="container flex flex-wrap justify-between items-center mx-auto ">
        <a href="/" className="flex items-center">
          <i>
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-stone-500 text-gray-600">
              <NavBarIcons icons={<BsPlus size="32" />} />
            </span>
          </i>
        </a>
      </div>
      <div className="container flex flex-wrap justify-between items-center mx-auto ">
        <a href="/" className="flex items-center">
          <i>
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-stone-500 text-gray-600">
              <NavBarIcons icons={<BsFillLightningFill size="20" />} />
            </span>
          </i>
        </a>
      </div>
      <div className="container flex flex-wrap justify-between items-center mx-auto ">
        <a href="/" className="flex items-center">
          <i>
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-stone-500 text-gray-600">
              <NavBarIcons icons={<FaPoo size="20" />} />
            </span>
          </i>
        </a>
      </div>
      <div className="container flex flex-wrap justify-between items-center mx-auto ">
        <a href="/" className="flex items-center">
          <i>
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-stone-500 text-gray-600">
              <NavBarIcons icons={<BsGearFill size="28" />} />
            </span>
          </i>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
