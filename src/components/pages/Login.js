import React, { useState } from "react";
import "./index.css";

const Login = () => {
  const [showInputFields, setShowInputFields] = useState(false);

  const handleSignInClick = () => {
    setShowInputFields(true);
  };

  return (
    <div className="w-full h-[100vh] flex ">
      <div className="h-[100%] bg-[#c7c4cc] flex flex-col justify-center items-center w-full sm:w-[50%]">
        {!showInputFields && (
          <>
            <p className="font-bold text-[25px] my-3">GET STARTED NOW</p>
            <p>Sign in to unlock the full experience.</p>
            <input type="text" placeholder="Username" className="userbtn" />
            <input
              type="password"
              placeholder="Password"
              className="passwordbtn"
            />
            <div className="flex flex-col items-center justify-center my-3 w-[100%]">
              <button className=" h-[50px] rounded-xl border border-bg-[#f0edff] md:w-[45%] w-[70%] my-5">
                Login with <span className="font-bold">google</span>
              </button>
              <button className=" h-[50px] rounded-xl border border-bg-[#f0edff] md:w-[45%] w-[70%]">
                Login with <span className="font-bold">Facebook</span>
              </button>
            </div>
            <button className="w-[120px] h-[45px] bg-gradient-to-r from-[#9181f4] to-[#5038bd] rounded-xl text-[#fff] text-[14px] font-bold">
              SIGNUP
            </button>
          </>
        )}
        {showInputFields && (
          <div className="flex flex-col items-center justify-center my-3 w-[100%]">
            <p className="font-bold text-[25px] my-3">LOGIN</p>
            <input type="text" placeholder="Username" className="userbtn" />
            <input
              type="password"
              placeholder="Password"
              className="passwordbtn"
            />
            <button className="w-[120px] h-[45px] bg-gradient-to-r from-[#9181f4] to-[#5038bd] rounded-xl text-[#fff] text-[14px] font-bold">
              LOGIN
            </button>
          </div>
        )}
        <p className="mt-4">
          Have an Account?
          <span
            className="text-blue-500 hover:border-b hover:border-blue-500"
            onClick={handleSignInClick}
          >
            Sign In
          </span>
        </p>
      </div>
      <div className="h-[100%] w-[50%] bg-gradient-to-l from-[#7566d6] to-[#533ee0] hidden sm:block">
        <img
          src="./images/loginpic.svg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
