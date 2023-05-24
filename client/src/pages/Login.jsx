import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../context/User.context";

const LoginPage = () => {
  // Delcaration variables
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigator = useNavigate();
  const { setUser, setToken } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/login", { email, password })
      .then((response) => {
        console.log("response ", response);
        if (response.data.status === "success") {
          setUser(response.data.data.user);
          setToken(response.data.data.token);
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.data.user));
          toast.success("Logged in done successfully.");
          setTimeout(() => navigator("/"), 2500);
        } else {
          toast.error("Email Or Password is Wrong try again.");
        }
      })
      .catch((err) => {
        console.log("error  :", err);
        toast.error("Email Or Password is Wrong try again.");
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="grow flex items-center justify-around">
        <div className="my-auto">
          <h1 className="text-4xl text-center mb-4">Login</h1>
          <form className="max-w-md mx-auto" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button className="primary">Login</button>
            <div className="text-center py-2 text-gray-500">
              Dont't have an account yet?{" "}
              <Link to="/register" className="underline text-black">
                Register Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
