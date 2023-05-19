import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isEmpty, isLength } from "../utils/validation";
import ErrorMessage from "../components/ErrorMessage";

const RegisterPage = () => {
  // Delcaration variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  // methods
  const registerUser = (e) => {
    e.preventDefault();
    setNameError(isEmpty(name));
    setEmailError(isEmpty(email));
    setPasswordError(isLength(password, 6));
  };
  return (
    <div className="grow flex items-center justify-around">
      <div className="my-auto">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Sallam Rady"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <ErrorMessage Msg="Name is Required!" />}
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <ErrorMessage Msg="Email is Required!" />}
          <input
            type="password"
            placeholder="your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <ErrorMessage Msg="Password must be more than 6 chars." />
          )}
          <button type="submit" className="primary">
            Register
          </button>
          <div className="text-center py-2 text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="underline text-black">
              Login Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
