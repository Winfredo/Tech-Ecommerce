import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#211C24] to-[#27212b]   w-screen pt-[70px] md:pt-[200px]">
      <div className=" w-full h-full flex flex-col  justify-evenly lg:max-w-[1250px] mx-auto lg:flex lg:flex-row flex-1 lg:items-center lg:justify-between">
        <div className="flex flex-col md:ml-5  items-center lg:items-start">
          <p className="text-[#A5A3A6] text-[23px] md:text-[17px] ">Pro.Beyond.</p>
          <p className="text-[80px] text-center  text-white font-thin">
            IPhone 14 <b>Pro</b>
          </p>
          <p className="text-[#A5A3A6] text-[17px] text-center md:text-sm mb-5">
            Created to change everything for the better. For everyone
          </p>
          <Link to={"/products"} className="w-[180px] h-[70px] md:w-[90px] md:h-[35px] text-[20px] md:text-[12px] text-white border-[1px] flex items-center justify-center	rounded-md mb-10 lg:mb-0">Shop Now</Link>
        </div>

        <div className="md:mr-5">
          <img
            src="./images/iphone-image.png"
            alt="iphone"
            className=" h-[450px] mx-auto  lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
