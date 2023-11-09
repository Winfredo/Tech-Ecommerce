import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#211C24] to-[#27212b]   w-screen h-screen ">
      <div className=" w-full h-full lg:max-w-[1250px] mx-auto flex lg:flex flex-1 items-center justify-between">
        <div className="flex flex-col">
          <p className="text-[#A5A3A6] ">Pro.Beyond.</p>
          <p className="text-[80px] text-white font-thin">
            IPhone 14 <span className="font-semibold">Pro</span>
          </p>
          <p className="text-[#A5A3A6] text-sm mb-4">
            Created to change everything for the better. For everyone
          </p>
          <button className=" w-[90px] h-[35px] text-[12px] text-white border-[1px]	rounded-md ">Shop Now</button>
        </div>

        <div>
          <img
            src="./images/iphone-image.png"
            alt="iphone"
            className="w-[400px] h-[400px] mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
