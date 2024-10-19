import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  finalPrice,
} from "../../features/OrderSlice";

const Ordercontent2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dishes, finalprice } = useSelector((state) => state.orderslice);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  useEffect(() => {
    const totalPrice = dishes.reduce(
      (acc, dish) => acc + dish.price * dish.quantity,
      0
    );
    dispatch(finalPrice(totalPrice));
  }, [dishes, dispatch]);

  const backendENDPOINT = `https://amma-unavagam-bc6a38ca8992.herokuapp.com`;

  return (
    <div className="">
      <div className="hidden md:flex bg-black text-white font-cursive justify-evenly p-6">
        <div className="">Ordered Items</div>
        <div className="">Quantity</div>
        <div className="">Price of Item</div>
        <div className="">Price with Quantity</div>
      </div>
      <div className="bg-black text-xs flex justify-evenly py-5 text-white md:hidden font-cursive">
        <div className="">Dishes</div>
        <div className="">Quantity</div>
        <div className="">Price/Item</div>
        <div className="">Total-Price</div>
      </div>
      <div className="font-cursive text-center">
        {!dishes || dishes.length <= 0 ? (
          <div className="m-5">
            <h3>No Dishes has been selected to place an Order</h3>
          </div>
        ) : (
          dishes.map((dish, index) => (
            <div
              className="flex justify-evenly text-xs p-3 md:text-lg md:py-5"
              key={index}
            >
              <div className="flex justify-evenly items-center mt-2">
                <div className="">{index + 1}.</div>
                <div
                  className="h-12 w-12 bg-cover bg-center rounded-lg ml-1"
                  style={{
                    backgroundImage: `url(${backendENDPOINT}${dish.image})`,
                  }}
                ></div>
                <div className="m-1">{dish.dish}</div>
              </div>
              <div className="flex justify-evenly items-center">
                <button
                  type="button"
                  className="p-3 text-xl"
                  onClick={() => handleIncrement(dish.id)}
                >
                  +
                </button>
                <div className="">{dish.quantity}</div>
                <button
                  type="button"
                  className="p-3 text-xl"
                  onClick={() => handleDecrement(dish.id)}
                >
                  -
                </button>
              </div>
              <div className="my-auto">{dish.price}</div>
              <div className="my-auto">
                {dish.price}*{dish.quantity} = {dish.price * dish.quantity}
              </div>
            </div>
          ))
        )}
        <hr />
        {dishes.length <= 0 ? (
          <div></div>
        ) : (
          <>
            <div className="text-center px-6 text-xs p-5 md:text-lg">
              <span className="">Total Price : </span>
              <span className="">{finalprice}</span>
            </div>
            <div className="bg-black text-white w-3/4 rounded-lg my-4 text-center mx-auto py-3 text-xs md:text-lg md:w-1/2 ">
              <button className="" onClick={handleCheckout} type="button">
                Procced to Check-out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Ordercontent2;
