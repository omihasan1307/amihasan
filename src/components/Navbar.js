import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="mt-3 lg:px-32">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul tabIndex={0} className=" menu-compact dropdown-content w-52">
              <li className="my-2 p-1 pl-3 hover:bg-btnColor hover:text-white">
                <Link
                  to="header"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="my-2 p-1 pl-3 hover:bg-btnColor hover:text-white">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  Services
                </Link>
              </li>
              <li className="my-2 p-1 pl-3 hover:bg-btnColor hover:text-white">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="my-2 p-1 pl-3 hover:bg-btnColor hover:text-white">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="my-2 p-1 pl-3 hover:bg-btnColor hover:text-white">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link className="text-xl sm:text-3xl font-semibold special-color">
            Ami Hasan
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 ">
            <li className="mr-6 text-xl hover:text-textColor cursor-pointer hover:font-bold hover:scale-105 duration-300 hover:duration-300">
              <Link
                to="header"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="mr-6 text-xl hover:text-textColor cursor-pointer hover:font-bold hover:scale-105 duration-300 hover:duration-300">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className="mr-6 text-xl hover:text-textColor cursor-pointer hover:font-bold hover:scale-105 duration-300 hover:duration-300">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="mr-6 text-xl hover:text-textColor cursor-pointer hover:font-bold hover:scale-105 duration-300 hover:duration-300">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="mr-6 text-xl hover:text-textColor cursor-pointer hover:font-bold hover:scale-105 duration-300 hover:duration-300">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <button className="bg-btnColor px-4 py-3 rounded text-white  gap-2  hover:scale-110 hover:bg-purple-600 duration-300 flex items-center">
            <span className="font-semibold ">Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
