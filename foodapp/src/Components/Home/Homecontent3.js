import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "../Home/Homecontent3.css";
import { useSelector, useDispatch } from "react-redux";
import { MenuList } from "../../features/MenuSlice";

const Homecontent3 = () => {
  const { items, isLoading, isError } = useSelector((state) => state.menuslice);
  const dispath = useDispatch();

  const navigate = useNavigate();

  const handlemealtype = (mealtype) => {
    navigate(`/menu?mealtype=${mealtype}`);
    console.log(mealtype);
  };

  useEffect(() => {
    dispath(MenuList());
  }, [dispath]);

  const BE_API = `https://amma-unavagam-7b7d19e4ba62.herokuapp.com/`;

  const mealTypeImages = {
    Breakfast: `${BE_API}assets/idly-img.jpg`,
    Lunch: `${BE_API}assets/full-meal-img.jpg`,
    Dinner: `${BE_API}assets/dosa-img.jpg`,
  };

  const uniqueMealTypes = [...new Set(items.data.map((item) => item.mealtype))];
  return (
    <div className="font-cursive">
      {isLoading && <p>Loading Mealtypes...</p>}
      {isError && <p>Error in Fetch Mealtypes</p>}
      <div className="mt-2 bg-black text-white p-5 text-center rounded-lg">
        <h1>Please Find Our Dishes With Mealtypes</h1>
      </div>
      <div className="w-full h-full p-5 md:flex flex-wrap">
        {uniqueMealTypes.map((mealtype, index) => (
          <div
            key={index}
            className="w-full h-80 px-20 py-5 bg-cover bg-no-repeat bg-center rounded-lg mt-5 md:w-2/5  md:mt-10 md:m-auto lg:w-1/4 "
            onClick={() => handlemealtype(mealtype)}
            style={{ backgroundImage: `url(${mealTypeImages[mealtype]})` }}
          >
            <div className="bg-white rounded-lg text-center border border-black mt-52 py-3 ">
              {mealtype} 💖
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homecontent3;
