import { useSelector, useDispatch } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { logout } from "../../features/AuthSlice";
import { useNavigate } from "react-router-dom";
import { clearOrders } from "../../features/OrderSlice";

const Profilepage = () => {
  const user = useSelector((state) => state.authslice.user);
  const orderHistory = useSelector((state) => state.orderslice.orderHistory);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogout = () => {
    dispatch(clearOrders());
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="font-cursive">
        <div className="p-5 text-center font-bold">
          <h2 className="font-bold bg-black text-white rounded-lg p-5">
            Please Find Your Profile Here
          </h2>
        </div>
        <div className="m-auto text-center p-3">
          <div className="p-2">{user.data.username}</div>
          <div className="p-2">{user.data.email}</div>
          <button
            className="p-2 bg-red-200 px-5 rounded-lg border border-black"
            onClick={handlelogout}
          >
            Logout
          </button>
        </div>
      </div>

      {orderHistory && orderHistory.length > 0 ? (
        <div className="m-auto text-center font-cursive p-5">
          <div className="">
            <h1 className="font-bold bg-black text-white rounded-lg p-5">
              Please Find Your Recent Orders Below
            </h1>
          </div>
          <div>
            <div className="">
              {orderHistory.map((order) => (
                <div>
                  <div>
                    <h2 className="p-3 bg-emerald-300 font-bold m-4 rounded-lg">
                      Ordered Dish Details
                    </h2>
                    {order.dishes.map((dish, sn) => (
                      <div>
                        <div className="" key={sn}>
                          <p className="p-2">
                            <strong>Dish :</strong> {dish.dish}
                          </p>
                          <p className="p-2">
                            <strong>Quantity :</strong> {dish.quantity}
                          </p>
                          <p className="p-2">
                            <strong>Price :</strong> {dish.price}
                          </p>
                          <p className="p-2">
                            <strong>Mealtype :</strong> {dish.mealtype}
                          </p>
                          <hr />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    {
                      <div
                        style={{
                          textAlign: "center",
                          fontFamily: "cursive",
                          padding: "2rem",
                        }}
                      >
                        <h2 className="bg-yellow-300 p-5 rounded-lg w-full font-bold">
                          Total Price : <span>{order.finalprice}</span>
                        </h2>
                        <hr />
                      </div>
                    }
                  </div>
                  <div>
                    <div>
                      <h2
                        className="p-3 bg-emerald-300 font-bold m-4 rounded-lg"
                        style={{ padding: "1rem" }}
                      >
                        Ordered Delivery Details
                      </h2>
                      <p className="del">
                        <strong>Ordered Placed to :</strong>{" "}
                        {order.deliverydetails.name}
                      </p>
                      <p className="del">
                        <strong>Phone :</strong> {order.deliverydetails.phone}
                      </p>
                      <p className="del">
                        <strong>Landmark :</strong>{" "}
                        {order.deliverydetails.landmark}
                      </p>
                      <p className="del">
                        <strong>Delivery Address : </strong>
                        {order.deliverydetails.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <Footer />
    </div>
  );
};

export default Profilepage;
