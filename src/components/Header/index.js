import React from "react";
import PersonalImage from "../../assets/2018.jpg";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Header = () => {
  return (
    <div
      name="header"
      className="h-screen w-full bg-gradient-to-b from-slate-800 via-slate-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" px-6 text-4xl sm:text-7xl font-bold text-orange-700">
            Full Stack Developer
          </h2>
          <p className="text-orange-800 py-4 max-w-md">
            Full Stack Developer with a penache for coding to make mobile
            friendly websites using back end and front end techniques. Learning
            the likes of HTML5, CSS, Javascript, Node, SQL, NoSQL, MongoDB,
            React, etc... gives me the ability to work under many disciplines,
            styles, and practices focusing on the personal user experience and
            web performance overall.
          </p>
          <div>
            <button>
              Portfolio
              <span>
                <MdOutlineSubdirectoryArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={PersonalImage}
            alt="my profile avatar"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
