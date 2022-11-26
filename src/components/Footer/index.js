import React from "react";

function Footer() {
  return (
    <footer className="text-stone-600 dark:text-stone-500 bg-stone-300 border-stone-200 px-2 sm:px-4 py-2.5 dark:bg-stone-800 p-3">
      <div className="container mx-auto align-middle">
        <div className="flex flex-col justify-center text-center">
          <div>
            <a href="https://github.com/pseudoDjnn" className="pr-2">
              <i class="text-2xl fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/alexanderhavers/"
              className="pl-2"
            >
              <i class="text-2xl fa-brancs fa-linkedin"></i>
            </a>
          </div>
          <p>
            My Portfolio
            <strong> &copy; Alexander Havers</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
