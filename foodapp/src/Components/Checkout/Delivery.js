import React, { useState } from "react";
import { deliverydetails, orderDetailsData } from "../../features/OrderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearOrders } from "../../features/OrderSlice";
const Delivery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message } = useSelector((state) => state.orderslice);

  const [deliverydata, setDeliveryData] = useState({
    name: "",
    phone: "",
    landmark: "",
    address: "",
  });
  const [showform, setShowForm] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleDevInp = (e) => {
    setDeliveryData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handledevsubmit = () => {
    dispatch(deliverydetails(deliverydata));
    setDeliveryData({
      name: "",
      phone: "",
      landmark: "",
      address: "",
    });
    dispatch(orderDetailsData());
    setShowForm(false);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
      navigate("/");
      dispatch(clearOrders());
    }, 3000);
  };

  const isFormValid = () => {
    return (
      deliverydata.name.trim() !== "" &&
      deliverydata.phone.trim() !== "" &&
      deliverydata.landmark.trim() !== "" &&
      deliverydata.address.trim() !== ""
    );
  };

  return (
    <div>
      <div className="">
        <h2 className=" font-cursive text-center p-5 font-bold md:text-2xl">
          Delivery Details
        </h2>
      </div>
      {showMessage && (
        <div className="bg-green-600 text-black font-cursive p-3 text-center">
          {message}
        </div>
      )}
      {showform && (
        <div className="p-3 font-cursive w-full md:w-1/2 m-auto">
          <div className="flex justify-evenly items-center p-2 w-full ">
            <div className="w-2/6 text-center">
              <label type="name">Name : </label>
            </div>
            <div className=" w-4/6">
              <input
                className=" w-11/12 h-10 rounded-lg border border-black text-sm p-2"
                type="text"
                name="name"
                onChange={handleDevInp}
                value={deliverydata.name}
              />
            </div>
          </div>
          <div className="flex justify-evenly items-center p-2 w-full">
            <div className="w-2/6 text-center">
              <label type="name">Phone : </label>
            </div>
            <div className="w-4/6">
              <input
                className=" w-11/12 h-10 rounded-lg border border-black text-sm p-2"
                type="tel"
                name="phone"
                onChange={handleDevInp}
                value={deliverydata.phone}
              />
            </div>
          </div>
          <div className="flex justify-evenly items-center p-2 w-full">
            <div className="w-2/6 text-center">
              <label type="name">Landmark : </label>
            </div>
            <div className="w-4/6">
              <input
                className=" w-11/12 h-10 rounded-lg border border-black text-sm p-2"
                type="text"
                name="landmark"
                onChange={handleDevInp}
                value={deliverydata.landmark}
              />
            </div>
          </div>
          <div className="flex justify-evenly items-center p-2 w-full">
            <div className="w-2/6 text-center">
              <label type="name">Address : </label>
            </div>
            <div className="w-4/6">
              <input
                className=" w-11/12 h-10 rounded-lg border border-black text-sm p-2"
                type="text"
                name="address"
                onChange={handleDevInp}
                value={deliverydata.address}
              />
            </div>
          </div>
          <div className="text-center p-5">
            <button
              className="p-2 rounded-lg text-white"
              type="button"
              disabled={!isFormValid()}
              style={{
                backgroundColor: isFormValid() ? "black" : "grey",
                cursor: isFormValid() ? "pointer" : "not-allowed",
              }}
              onClick={handledevsubmit}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delivery;
