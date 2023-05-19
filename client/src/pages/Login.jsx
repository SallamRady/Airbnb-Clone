import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="grow flex items-center justify-around">
        <div className="my-auto">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className="max-w-md mx-auto">
                <input type="email" placeholder="your@email.com"/>
                <input type="password" placeholder="your password"/>
                <button className="primary">Login</button>
                <div className="text-center py-2 text-gray-500">
                    Dont't have an account yet? <Link to='/register' className="underline text-black">Register Now</Link>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LoginPage;
