import React from "react";
import { Link } from "react-router-dom";

const SubFooter = () => {
  return (
    <div className="w-full h-[500px] lg:h-full relative bg-gradient-to-r from-[#2E2E2E] to-[#000000]">
      <div className="lg:flex lg:items-center lg:justify-between">
        <img
          src="./images/Group1.png"
          alt="iphone"
          className="hidden lg:flex lg:w-[280px] lg:h-[500px]"
        />

        <div className="flex flex-col items-center justify-center absolute inset-0 lg:static lg:w-full">
          <div className="flex flex-col items-center justify-center">
            <p className=" text-[62px] text-white font-thin">
              Big Summer <span className="font-normal">Sale</span>
            </p>
            <p className="text-[16px] text-[#787878]">
              Commodo fames vitae vitae leo mauris in. Eu consequat
            </p>
            <Link to={"/products"}>
              <button className="w-[120px] h-[45px] text-sm text-white border-[1px] mt-7 rounded-md">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <img
          src="./images/Group2.png"
          alt="iphone"
          className="hidden lg:flex lg:w-[300px]  lg:h-[500px]"
        />
      </div>
      <div>
        <img
          src="./images/Group3.png"
          alt="corner"
          className="lg:hidden absolute top-0 right-0 w-[300px] h-[150px]"
        />
      </div>
      <div>
        <img
          src="./images/bottomright.png"
          alt="corner"
          className="lg:hidden absolute bottom-0 right-0 w-[120px] h-[150px]"
        />
      </div>
      <div>
        <img
          src="./images/bottomleft.png"
          alt="corner"
          className="lg:hidden absolute bottom-0 left-0 w-[120px] h-[150px]"
        />
      </div>
      <div>
        <img
          src="./images/topleft.png"
          alt="left corner "
          className="lg:hidden absolute top-0 left-0 w-[100px] h-[100px] "
        />
      </div>
    </div>
  );
};

export default SubFooter;
