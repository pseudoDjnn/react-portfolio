import React from "react";

function Header() {
  return (
    <div className="flex pb-5">
      <div className="flex flex-col w-full flex-grow">
        <div className="container mx-auto flex flex-col flex-grow">
          <div className="flex w-full p-4 border-b border-neutral-500 dark:border-indigo-800">
            <h2 className="text-2xl font-bold text-neutral-500 dark:text-indigo-800">
              HEADER
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
