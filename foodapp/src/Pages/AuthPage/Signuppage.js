import React, { useEffect, useState } from "react";
import { signupUser } from "../../features/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";

const Signuppage = () => {
  const { isError, isLoading, message, user } = useSelector(
    (state) => state.authslice
  );

  const [showmessage, setShowMessage] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleinput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlenavtologin = () => {
    console.log("login");
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(formData));
  };

  useEffect(() => {
    if (user && !isError) {
      setShowMessage(true);
      // setRedirect(true);
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      });

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } else if (isError) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }
  }, [user, isError, navigate, location.state]);

  // if (redirect) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div className=" text-center font-cursive">
      <Header />
      <div className="">
        <h2 className="p-5 md:text-2xl font-bold">Amma's Unavagam</h2>
      </div>
      <div className="">
        <h4 className="">Signup</h4>
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
        onSubmit={handleSubmit}
      >
        <input
          className="m-3 h-10 text-center rounded-lg border border-black"
          type="username"
          name="username"
          value={formData.username}
          placeholder="Username"
          onChange={handleinput}
        />
        <input
          className="m-3 h-10 text-center rounded-lg border border-black"
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleinput}
        />
        <input
          className="m-3 h-10 text-center rounded-lg border border-black"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleinput}
        />
        <input
          className="m-3 h-10 text-center rounded-lg border border-black"
          type="password"
          name="confirmpassword"
          placeholder="Confirm-Password"
          value={formData.confirmpassword}
          onChange={handleinput}
        />
        <div
          className="text-sm p-5 font-bold md:text-lg"
          onClick={handlenavtologin}
        >
          <h5 className="">
            Already a Existing User ? Please Click Here to Login
          </h5>
        </div>
        <button
          className="bg-black text-white px-4 py-2 rounded-lg md:px-10"
          type="submit"
        >
          {isLoading ? <p>Signing-Up</p> : <p>Sign Up</p>}
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default Signuppage;
