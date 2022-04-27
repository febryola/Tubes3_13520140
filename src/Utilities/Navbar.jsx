import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import FRS from "../images/FRS.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavItems = ["Home", "Prediction", "History", "Disease", "About"];

  return (
    <>
      <nav className="fixed z-10 flex w-full flex-wrap items-center justify-between bg-white bg-opacity-30 py-[0.8rem] px-[1.75rem] backdrop-blur-sm lg:py-[1.125rem] lg:px-[9.75rem]">
        <div className="container flex flex-wrap items-center justify-between">
          <div className="flex w-full items-center justify-between lg:block lg:w-auto lg:justify-start">
            <Link to="/">
              <img
                src={FRS}
                alt="Logo"
                className="w-[6.125rem] lg:w-[13rem] "
              />
            </Link>

            {/* BURGER BUTTON */}
            <button
              className="block rounded focus:outline-none lg:hidden"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen ? (
                <FontAwesomeIcon icon={faBars} />
              ) : (
                <FontAwesomeIcon icon={faX} />
              )}
            </button>
          </div>

          <div
            className={"items-center lg:flex" + (isOpen ? " flex" : " hidden")}
          >
            <ul className="flex list-none flex-col pt-[2.25rem] lg:ml-auto lg:flex-row lg:pt-0">
              {NavItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center pb-[1.5rem] lg:ml-[2.25rem] lg:pb-0"
                >
                  <Link
                    to={item === "Home" ? "/" : `/${item}`}
                    className="text-[1.125rem] font-normal transition duration-300  ease-in-out hover:text-turquoise lg:text-[1.5rem]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
