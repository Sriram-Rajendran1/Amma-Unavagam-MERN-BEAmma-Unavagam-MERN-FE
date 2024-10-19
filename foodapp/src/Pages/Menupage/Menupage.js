import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Menucomponent1 from "../../Components/Menu/Menucomponent1";

const Menupage = () => {
  return (
    <div>
      <Header />
      <div className="font-cursive">
        <div className="m-2 p-3 text-center">
          <h1 className="menuheading1 text-2xl font-bold">Menu</h1>
        </div>
        <div className=" p-2 flex justify-center items-center md:flex-none md:px-40">
          <label className="hidden md:block m-2" for="Search">
            Search Dishes:
          </label>
          <input className="border border-black h-12 rounded-lg w-52 m-2" />
          <button
            className="hidden m-2 md:block bg-lime-300 p-3 rounded-lg"
            type="button"
          >
            Search
          </button>
          <button type="button" className="md:hidden">
            <svg
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <Menucomponent1 />
      </div>
      <Footer />
    </div>
  );
};

export default Menupage;
