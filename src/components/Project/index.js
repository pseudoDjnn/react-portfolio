import React from "react";
import JATE from "../../assets/portfolio/JATE.png";
import password from "../../assets/portfolio/password.png";
import quiz from "../../assets/portfolio/quiz.png";
import readme_generator from "../../assets/portfolio/readme_generator.png";
import wish from "../../assets/portfolio/wish.png";
import socialAPI from "../../assets/portfolio/socialAPI.png";

const Portfolio = () => {
  const projectPortfolio = [
    {
      id: 1,
      src: JATE,
    },
    {
      id: 2,
      src: password,
    },
    {
      id: 3,
      src: quiz,
    },
    {
      id: 4,
      src: readme_generator,
    },
    {
      id: 5,
      src: socialAPI,
    },
    {
      id: 6,
      src: wish,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-slate-800 to-gray-800 w-full text-orange-100 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-800">
            Portfolio Projects
          </p>
          <p className="py-8">
            A listing of all current projects for my 2022 portfolio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-slate-600 rounded-lg">
            <img
              src={JATE}
              alt="demo"
              className="rounded-md duration-700 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-2 m-4 duration-300 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-2 m-4 duration-300 hover:scale-105">
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
