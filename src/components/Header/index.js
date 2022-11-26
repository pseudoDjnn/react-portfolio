import React from "react";

function Header() {
  return (
    <div className="flex pb-5">
      <div className="flex flex-col w-full flex-grow">
        <div className="container mx-auto flex flex-col flex-grow">
          <div className="flex w-full p-4 border-b border-stone-800 dark:border-stone-500">
            <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-500">
              HEADER
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
