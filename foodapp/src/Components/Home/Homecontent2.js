import React from "react";
import icecream from "../../assets/content-bg2.jpg";

const Homecontent2 = () => {
  return (
    <div className="w-full h-auto md:flex">
      <div className="w-full h-auto md:w-1/2 md:p-10 bg-[#dde3f1]">
        <img src={icecream} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="bg-[#dde3f1] w-full h-1/2 md:w-1/2 md:h-auto font-cursive py-12 px-7 text-center md:py-16 md:text-2xl lg:h-auto lg:py-40">
        We serve you all kinds of Dishes, you can Order the dishes for your
        choice and Enjoy, Kindly Please wait at your seat our person will Reach
        you, Thank you.....
      </div>
    </div>
  );
};

export default Homecontent2;
