import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#211C24] to-[#27212b]   w-screen pt-[253px]">
      <div className=" w-full h-full flex flex-col  justify-evenly lg:max-w-[1250px] mx-auto lg:flex lg:flex-row flex-1 lg:items-center lg:justify-between">
        <div className="flex flex-col ml-5  items-center lg:items-start">
          <p className="text-[#A5A3A6] ">Pro.Beyond.</p>
          <p className="text-[80px] text-white font-thin">
            IPhone 14 <span className="font-semibold">Pro</span>
          </p>
          <p className="text-[#A5A3A6] text-sm mb-4">
            Created to change everything for the better. For everyone
          </p>
          <Link to={"/products"} className=" w-[90px] h-[35px] text-[12px] text-white border-[1px] flex items-center justify-center	rounded-md mb-10 lg:mb-0">Shop Now</Link>
        </div>

        <div className="mr-5">
          <img
            src="./images/iphone-image.png"
            alt="iphone"
            className="w-[400px] h-[450px] mx-auto  lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
