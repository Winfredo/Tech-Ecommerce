import React from "react";
import "./index.css";

const Login = () => {
  return (
    <div className="w-[100%] h-[100vh] flex ">
      <div className="h-[100%] w-[50%] bg-white flex flex-col justify-center items-center">
        <p className="font-bold text-[25px] my-3">LOGIN</p>
        <p>Sign in to unlock the full experience.</p>
        <div className="flex flex-col my-3">
          <input type="search" placeholder="Username" className="userbtn" />
          <input type="search" placeholder="Password" className="passwordbtn" />
        </div>
        
        <button className="w-[120px] h-[45px] bg-gradient-to-r from-[#9181f4] to-[#5038bd] rounded-xl text-[#fff] text-[14px] font-bold">
          Login Now
        </button>
      </div>

      <div className="h-[100%] w-[50%] bg-yellow-200"></div>
    </div>
  );
};

export default Login;
