import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../features/AuthSlice";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";

const Loginpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isError, message, user } = useSelector((state) => state.authslice);

  const [showmessage, setShowMessage] = useState(false);

  const [userLoginData, setUserLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleinp = (e) => {
    setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value });
  };

  const handleloginsubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userLoginData));
  };

  useEffect(() => {
    if (user && !isError) {
      setShowMessage(true);
      setUserLoginData({
        username: "",
        email: "",
        password: "",
      });
      // navigate("/");
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } else if (isError) {
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }, [isError, user, dispatch, navigate, location.state]);

  return (
    <div className=" text-center font-cursive">
      <Header />
      <div className="">
        <h2 className="p-5 md:text-2xl font-bold">Amma's Unavagam</h2>
      </div>
      <div className="">
        <h4 className="">Login</h4>
      </div>
      {showmessage && (
        <>
          {user && !isError ? (
            <p className="responsemessagesuccess">{message}</p>
          ) : (
            <p className="responsemessagefail">{message}</p>
          )}
        </>
      )}
      <form
        className="m-auto w-full md:w-1/2 xl:w-1/3 p-5"
        onSubmit={handleloginsubmit}
      >
        <input
          className="m-3 h-10 text-center rounded-lg border border-black"
          type="username"
          name="username"
          placeholder="Username"
          value={userLoginData.username}
          onChange={handleinp}
        />
        <input
          className="m-3 h-10 text-center rounded-lg border border-black"
          type="email"
          name="email"
          placeholder="Email ID"
          value={userLoginData.email}
          onChange={handleinp}
        />
        <input
          className="m-3 h-10 text-center rounded-lg border border-black"
          type="password"
          name="password"
          placeholder="Password"
          value={userLoginData.password}
          onChange={handleinp}
        />
        <div>
          <button
            className="bg-black text-white px-8 py-2 rounded-lg md:px-10"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Loginpage;
