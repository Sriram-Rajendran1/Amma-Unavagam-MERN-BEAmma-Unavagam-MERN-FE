import React from "react";

const Contactus = () => {
  return (
    <div className="font-cursive">
      <div className="bg-black p-5 text-white text-center rounded-lg">
        Looking to Contact Us
      </div>
      <div className="">
        <form className="w-full h-screen mt-5 md:flex md:h-full">
          <div className="p-5 md:w-1/2">
            <div className="w-full flex">
              <label className="w-3/12 m-auto text-center" for="name">
                Name :
              </label>
              <input className="w-9/12 h-12 border border-black rounded-lg" />
            </div>
            <div className="w-full flex mt-3">
              <label className="w-3/12 m-auto text-center" for="name">
                Phone :
              </label>
              <input className="w-9/12 h-12 border border-black rounded-lg" />
            </div>
            <div className="w-full flex mt-3">
              <label className="w-3/12 m-auto text-center" for="name">
                E-mail :
              </label>
              <input className="w-9/12 h-12 border border-black rounded-lg" />
            </div>
          </div>
          <div className=" p-5 md:w-1/2">
            <div className="w-full">
              <label className="w-1/2 m-auto text-center">
                Leave your Message :
              </label>
              <textarea className="mt-2 w-full h-20 border border-black rounded-lg" />
            </div>
            <div className=" bg-black text-white w-20 p-2 text-center rounded-md m-auto mt-2">
              <button className="" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
