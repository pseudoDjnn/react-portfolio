import React from "react";

function Nav() {
  return (
    <nav className="bg-stone-300 border-stone-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <i>
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-stone-500 text-gray-600">
              Alexander
            </span>
          </i>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
