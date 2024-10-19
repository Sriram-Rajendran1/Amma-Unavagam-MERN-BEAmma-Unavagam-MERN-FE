import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const { user, isLoggedIn } = useSelector((state) => state.authslice);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-black text-white flex justify-evenly w-full p-5 lg:p-10 lg:text-xl 2xl:text-2xl">
        <div className="w-3/4 md:w-1/2 lg:w-3/12 lg:p-2 m-auto font-cursive">
          <div className="text-2xl text-center md:text-3xl lg:text-2xl">
            Amma's-Unavagam
          </div>
        </div>
        <div className="w-1/4 md:w-1/2 lg:w-9/12 lg:p-2 m-auto font-sans text-center">
          <button
            type="button"
            className="md:text-3xl lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 md:w-12 md:h-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <ul className="hidden lg:flex justify-evenly items-center lg:text-1xl">
            <li className="nav-li">
              <Link className="nav-li" to="/">
                Home
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-li" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-li" to="/orders">
                Orders
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-li" to="/contactus">
                Contactus
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-li" to="/profile">
                {isLoggedIn && user
                  ? `${user.data.username}'s Profile`
                  : `Signup/Login`}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`lg:hidden bg-black text-white text-1xl  ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className=" w-full mx-5 p-4 md:mx-10 md:p-10 lin">
          <li className="p-2">
            <Link className="p-2" to="/">
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link className="p-2" to="/menu">
              Menu
            </Link>
          </li>
          <li className="p-2">
            <Link className="p-2" to="/orders">
              Orders
            </Link>
          </li>
          <li className="p-2">
            <Link className="p-2" to="/contactus">
              Contactus
            </Link>
          </li>
          <li className="p-2">
            <Link className="p-2" to="/profile">
              {isLoggedIn && user
                ? `${user.data.username}'s Profile`
                : `Signup/Login`}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
