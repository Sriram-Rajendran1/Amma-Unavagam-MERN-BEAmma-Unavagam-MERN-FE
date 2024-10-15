import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Home/Homecontent3.css";
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
    <div className="content3-maindiv">
      {isLoading && <p>Loading Mealtypes...</p>}
      {isError && <p>Error in Fetch Mealtypes</p>}
      <div className="content3-heading">
        <h1>Please Find Our Dishes and Mealtypes</h1>
      </div>
      <div className="content3-menudisplay">
        {uniqueMealTypes.map((mealtype, index) => (
          <div
            key={index}
            className="content3-meal"
            onClick={() => handlemealtype(mealtype)}
            style={{ backgroundImage: `url(${mealTypeImages[mealtype]})` }}
          >
            <div className="text">{mealtype} 💖</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homecontent3;
