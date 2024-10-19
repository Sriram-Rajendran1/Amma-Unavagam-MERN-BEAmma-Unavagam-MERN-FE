import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addDishes } from "../../features/OrderSlice";
import { MenuList } from "../../features/MenuSlice";

const Menucomponent1 = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchparams = new URLSearchParams(location.search);
  const mealtype = searchparams.get("mealtype");

  const { isLoading, isError, items, message } = useSelector(
    (state) => state.menuslice
  );

  const dish = useSelector((state) => state.orderslice.dishes);

  const orderid = dish?.map((item) => item.id);

  const [currentMealtype, setCurrentMealtype] = useState("");

  useEffect(() => {
    if (mealtype) {
      setCurrentMealtype(mealtype);
    } else {
      setCurrentMealtype("all");
    }
    dispatch(MenuList());
  }, [mealtype, dispatch]);

  const breakFastDishes = items.data.filter(
    (item) => item.mealtype === "Breakfast"
  );

  const lunchDishes = items.data.filter((item) => item.mealtype === "Lunch");

  const dinnerDishes = items.data.filter((item) => item.mealtype === "Dinner");

  const handleorder = (id, dish, price, mealtype, image) => {
    const orderdish = {
      dish: dish,
      price: price,
      id: id,
      quantity: 1,
      totalprice: price,
      mealtype: mealtype,
      image: image,
    };
    dispatch(addDishes(orderdish));
  };

  const BackendENDPOINT = "https://amma-unavagam-7b7d19e4ba62.herokuapp.com";

  return (
    <div className="w-full h-full">
      {isLoading && <p>Loading Your Menu...</p>}
      {isError && <p>{message}</p>}
      {currentMealtype === "Breakfast" && (
        <div className="w-full h-auto">
          <div className="text-center text-2xl font-bold">
            <h2>Breakfast</h2>
          </div>
          <div className="md:flex flex-wrap">
            {breakFastDishes.map((item, index) => (
              <div
                className=" w-full h-screen text-center p-4 md:w-1/2 md:h-96 md:m-auto lg:w-1/4 lg:m-auto"
                key={index}
              >
                <div
                  className="w-full h-1/2 bg-cover bg-center rounded-lg m-auto mt-2"
                  style={{
                    backgroundImage: `url(${BackendENDPOINT}${item.image})`,
                  }}
                ></div>
                <div className="p-3">
                  <div className="p-3">{item.dish}</div>
                  <div className="p-3">Price : {item.price}</div>
                  <div className="">
                    <button
                      className="text-white bg-black rounded-lg p-5 m-auto mt-1 md:p-5"
                      type="button"
                      onClick={() =>
                        handleorder(
                          item._id,
                          item.dish,
                          item.price,
                          item.mealtype,
                          item.image
                        )
                      }
                      disabled={orderid.includes(item._id)}
                    >
                      {orderid.includes(item._id) ? `Ordered` : `Order-Now`}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <hr />
      {currentMealtype === "Lunch" && (
        <div className="w-full h-auto">
          <div className="text-center text-2xl font-bold">
            <h2>Lunch</h2>
          </div>
          <div className="md:flex flex-wrap">
            {lunchDishes.map((item, index) => (
              <div className=" w-full h-screen text-center p-4 md:w-1/2 md:h-96 md:m-auto lg:w-1/4 lg:m-auto">
                <div
                  className="w-full h-1/2 bg-cover bg-center rounded-lg m-auto mt-2"
                  style={{
                    backgroundImage: `url(${BackendENDPOINT}${item.image})`,
                  }}
                ></div>
                <div className="p-3">
                  <div className="p-3">{item.dish}</div>
                  <div className="p-3">Price : {item.price}</div>
                  <div className="">
                    <button
                      className="text-white bg-black rounded-lg p-5 m-auto mt-1 md:p-5"
                      type="button"
                      onClick={() =>
                        handleorder(
                          item._id,
                          item.dish,
                          item.price,
                          item.mealtype,
                          item.image
                        )
                      }
                      disabled={orderid.includes(item._id)}
                    >
                      {orderid.includes(item._id) ? `Ordered` : `Order-Now`}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {currentMealtype === "Dinner" && (
        <div className="w-full h-auto">
          <div className="text-center text-2xl font-bold">
            <h2>Dinner</h2>
          </div>
          <div className="md:flex flex-wrap">
            {dinnerDishes.map((item, index) => (
              <div className=" w-full h-screen text-center p-4 md:w-1/2 md:h-96 md:m-auto lg:w-1/4 lg:m-auto">
                <div
                  className="w-full h-1/2 bg-cover bg-center rounded-lg m-auto mt-2"
                  style={{
                    backgroundImage: `url(${BackendENDPOINT}${item.image})`,
                  }}
                ></div>
                <div className="p-3">
                  <div className="p-3">{item.dish}</div>
                  <div className="p-3">Price : {item.price}</div>
                  <div className="">
                    <button
                      className="text-white bg-black rounded-lg p-5 m-auto mt-1 md:p-5"
                      type="button"
                      onClick={() =>
                        handleorder(
                          item._id,
                          item.dish,
                          item.price,
                          item.mealtype,
                          item.image
                        )
                      }
                      disabled={orderid.includes(item._id)}
                    >
                      {orderid.includes(item._id) ? `Ordered` : `Order-Now`}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {currentMealtype === "all" && (
        <>
          <div className=" w-full h-auto">
            <div className="text-center text-2xl font-bold">
              <h2>Breakfast</h2>
            </div>
            <div className="md:flex flex-wrap">
              {breakFastDishes.map((item, index) => (
                <div
                  className=" w-full h-screen text-center p-4 md:w-1/2 md:h-96 md:m-auto lg:w-1/4 lg:m-auto"
                  key={index}
                >
                  <div
                    className="w-full h-1/2 bg-cover bg-center rounded-lg m-auto mt-2"
                    style={{
                      backgroundImage: `url(${BackendENDPOINT}${item.image})`,
                    }}
                  ></div>
                  <div className="p-3">
                    <div className="p-3">{item.dish}</div>
                    <div className="p-3">Price : {item.price}</div>
                    <div className="">
                      <button
                        key={item.index}
                        className="text-white bg-black rounded-lg p-5 m-auto mt-1 md:p-5"
                        type="button"
                        onClick={() =>
                          handleorder(
                            item._id,
                            item.dish,
                            item.price,
                            item.mealtype,
                            item.image
                          )
                        }
                        disabled={orderid.includes(item._id)}
                      >
                        {orderid.includes(item._id) ? `Ordered` : `Order-Now`}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="w-full h-auto">
            <div className="text-center text-2xl font-bold">
              <h2>Lunch</h2>
            </div>
            <div className="md:flex flex-wrap">
              {lunchDishes.map((item, index) => (
                <div
                  className=" w-full h-screen text-center p-4 md:w-1/2 md:h-96 md:m-auto lg:w-1/4 lg:m-auto"
                  key={index}
                >
                  <div
                    className="w-full h-1/2 bg-cover bg-center rounded-lg m-auto mt-2"
                    style={{
                      backgroundImage: `url(${BackendENDPOINT}${item.image})`,
                    }}
                  ></div>
                  <div className="p-3">
                    <div className="p-3">{item.dish}</div>
                    <div className="p-3">Price : {item.price}</div>
                    <div className="">
                      <button
                        className="text-white bg-black rounded-lg p-5 m-auto mt-1 md:p-5"
                        type="button"
                        onClick={() =>
                          handleorder(
                            item._id,
                            item.dish,
                            item.price,
                            item.mealtype,
                            item.image
                          )
                        }
                        disabled={orderid.includes(item._id)}
                      >
                        {orderid.includes(item._id) ? `Ordered` : `Order-Now`}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="w-full h-auto">
            <div className="text-center text-2xl font-bold">
              <h2>Dinner</h2>
            </div>
            <div className="md:flex flex-wrap">
              {dinnerDishes.map((item, index) => (
                <div
                  className=" w-full h-screen text-center p-4 md:w-1/2 md:h-96 md:m-auto lg:w-1/4 lg:m-auto"
                  key={index}
                >
                  <div
                    className="w-full h-1/2 bg-cover bg-center rounded-lg m-auto mt-2"
                    style={{
                      backgroundImage: `url(${BackendENDPOINT}${item.image})`,
                    }}
                  ></div>
                  <div className="p-3">
                    <div className="p-3">{item.dish}</div>
                    <div className="p-3">Price : {item.price}</div>
                    <div className="">
                      <button
                        className="text-white bg-black rounded-lg p-5 m-auto mt-1 md:p-5"
                        type="button"
                        onClick={() =>
                          handleorder(
                            item._id,
                            item.dish,
                            item.price,
                            item.mealtype,
                            item.image
                          )
                        }
                        disabled={orderid.includes(item._id)}
                      >
                        {orderid.includes(item._id) ? `Ordered` : `Order-Now`}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Menucomponent1;
