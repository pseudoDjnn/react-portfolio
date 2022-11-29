import React from "react";
import PersonalImage from "../../assets/2018.jpg";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div
      name="about me"
      className="h-screen w-full bg-gradient-to-b from-slate-800 via-zinc-700 to-neutral-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" px-6 text-4xl sm:text-7xl font-bold text-orange-700">
            About Me
          </h2>
          <br />
          <p className="text-orange-100 py-4 max-w-md">
            I am enrolled in UNCC's bootcamp for full-stack development.
            Currently, I am working with React, Tailwind, and other packages for
            this project, already bundled or otherwise.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={900}
              className="group text-orange-800 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-br from-slate-800 to-orange-200 cursor-pointer"
            >
              <span className="group-hover:hue-rotate-180 duration-700">
                <MdOutlineSubdirectoryArrowRight size={27} className="ml-1" />
              </span>
            </Link>
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
