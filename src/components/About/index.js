import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-neutral-900 via-gray-700 to-slate-800 text-orange-100"
    >
      <div className="max-w-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-800">
            About
          </p>
        </div>
        <p className="text-xl mt-16">
          Full Stack Developer (still studying and learning) with a penache for
          coding to make mobile friendly websites using back end and front end
          techniques. Learning the likes of HTML5, CSS, Javascript, Node, SQL,
          NoSQL, MongoDB, React, etc... gives me the ability to work under many
          disciplines, styles, and practices focusing on the personal user
          experience and web performance overall.
        </p>
        <br />
        <p className="text-xl">
          Personal projects include working on a 3D generative audio visual
          enviornment using Three.js or React 3 Fiber with either Max4Live
          (Ableton) intergration or using SuperCollider (C++) as an alternative
          to Javascript and a bundler.
        </p>
      </div>
    </div>
  );
};

export default About;
