import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  // useState for navigation bar
  const [donut, setDonut] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "project",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-orange-700 bg-slate-800 px-4 fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Alexander Havers</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-orange-700 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setDonut(!donut)}
        className="cursor-pointer pr-4 z-10 text-orange-700"
      >
        {donut ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
};

export default NavBar;
