import React from "react";
import Header from "../../Components/Header/Header";
import Homecontent1 from "../../Components/Home/Homecontent1";
import Homecontent2 from "../../Components/Home/Homecontent2";
import Homecontent3 from "../../Components/Home/Homecontent3";
import Homecontent4 from "../../Components/Home/Homecontent4";
import Contactus from "../../Components/Contact/Contactus";
import Footer from "../../Components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Homecontent1 />
      <div className="bg-gray-500 w-full h-1 my-2 md:my-4"></div>
      <div className="bg-gray-500 w-full h-1 my-2 md:my-4"></div>
      <Homecontent2 />
      <div className="bg-gray-500 w-full h-1 my-2 md:my-4"></div>
      <div className="bg-gray-500 w-full h-1 my-2 md:my-4"></div>
      <Homecontent3 />
      <div className="bg-gray-500 w-full h-1 my-2 md:my-4"></div>
      <div className="bg-gray-500 w-full h-1 my-2 md:my-4"></div>
      <Homecontent4 />
      <div className="bg-gray-500 w-full h-1 my-2 md:my-4"></div>
      <div className="bg-gray-500 w-full h-1 my-2 md:my-4"></div>
      <Contactus />
      <div className="bg-gray-500 w-full h-1 my-2 md:my-4"></div>
      <div className="bg-gray-500 w-full h-1 my-2 md:my-4"></div>
      <Footer />
    </div>
  );
};

export default Homepage;
