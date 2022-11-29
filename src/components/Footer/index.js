import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  // Array for links to render conditionally
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={32} />
        </>
      ),
      href: "https://www.linkedin.com/in/alexanderhavers/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={32} />
        </>
      ),
      href: "https://github.com/pseudoDjnn",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={32} />
        </>
      ),
      href: "mailto:alexander.havers@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={32} />
        </>
      ),
      href: "/resume 22.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[75%] fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-700 bg-zinc-900" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-orange-600"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
