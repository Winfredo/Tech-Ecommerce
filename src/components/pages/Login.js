import { useNavigate } from "react-router-dom";
import app from "../../firebase";
import React, { useState } from "react";
import "./index.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth();

const Login = () => {
  const navigate = useNavigate();

  const signUp = (app) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user>>>", user);
        alert("Successfully Created the Account!");
        setShowInputFields(true);
        navigate("");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user>>>", user);
        alert("Successfully Signed In.");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showInputFields, setShowInputFields] = useState(false);
  const [signInText, setSignInText] = useState("Sign In")
  const [ReadText, setReadText] = useState(" Have An Account?")

  const handleSignInClick = () => {
    if (showInputFields) {
      setShowInputFields(false);
      setSignInText("Sign In")
      setReadText(" Have An Account?")
    } else {
      setShowInputFields(true);
      setSignInText("Sign Up")
      setReadText("Create An Account?")

    }
  };
  return (
    <div className="w-full h-[100vh] flex ">
      <div className="h-[100%] bg-[#c7c4cc] flex flex-col justify-center items-center w-full sm:w-[50%]">
        {!showInputFields && (
          <>
            <p className="font-bold text-[25px] my-3">GET STARTED NOW</p>
            <p>Sign in to unlock the full experience.</p>
            <input
              type="email"
              placeholder="Email"
              className="userbtn"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="passwordbtn"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={signUp}
              className="w-[120px] h-[45px] bg-gradient-to-r from-[#9181f4] to-[#5038bd] rounded-xl text-[#fff] text-[14px] font-bold"
            >
              SIGNUP
            </button>
            <div className="flex flex-col items-center justify-center my-3 w-[100%]">
              <button className=" h-[50px] rounded-xl border border-bg-[#f0edff] md:w-[45%] w-[70%] my-5">
                Login with <span className="font-bold">google</span>
              </button>
              <button className=" h-[50px] rounded-xl border border-bg-[#f0edff] md:w-[45%] w-[70%]">
                Login with <span className="font-bold">Facebook</span>
              </button>
            </div>
          </>
        )}
        {showInputFields && (
          <div className="flex flex-col items-center justify-center my-3 w-[100%]">
            <p className="font-bold text-[25px] my-3">LOGIN</p>
            <input
              type="email"
              placeholder="Email"
              className="userbtn"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="passwordbtn"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={signIn}
              className="w-[120px] h-[45px] bg-gradient-to-r from-[#9181f4] to-[#5038bd] rounded-xl text-[#fff] text-[14px] font-bold"
            >
              LOGIN
            </button>
          </div>
        )}
        <p className="mt-4 ">
          {ReadText}
          <button className="pl-2 text-blue-500" onClick={handleSignInClick}>
          {signInText}
          </button>
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
