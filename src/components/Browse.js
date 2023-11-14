import React from "react";
import {
  BsChevronLeft,
  BsChevronRight,
  BsPhone,
  BsSmartwatch,
} from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { CiHeadphones } from "react-icons/ci";
import { PiGameControllerDuotone } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";

const Browse = () => {
  const Box = ({ Icon, name }) => {
    return (
      <div  className="flex items-center justify-evenly">
<div className=" w-[120px] h-[120px] rounded-xl bg-[#ededed] mt-10 flex flex-col justify-evenly items-center">
        {Icon}
        <p className="text-[15px]">{name}</p>
      </div>
      </div>
      
    );
  };

  return (
    <div className="w-full bg-[#fafafa]">
      <div className="lg:max-w-[1250px] h-full flex-1 w-full mx-auto ">
        <div className="  w-full h-[60px]">
          {/* Div for the text */}
          <div className="flex justify-between pt-5">
            <div>
              <p className="font-light text-[22px] ml-3 md:ml-0 pl-3">
                Browse By Category
              </p>
            </div>

            <div className="flex mr-3 lg:mr-0">
              <BsChevronLeft size={30} />
              <BsChevronRight size={30} />
            </div>
          </div>
        </div>

        {/* div for the boxes */}

        <div className="">
          <div className="grid grid-cols-2 mx-auto md:flex md:items-center  pb-20 md:justify-evenly  lg:justify-between lg:px-3">
            <Box Icon={<BsPhone size={30} />} name={"Phone"} />
            <Box Icon={<BsSmartwatch size={30} />} name={"Smart Watches"} />
            <Box Icon={<AiOutlineCamera size={30} />} name={"Camera"} />
            <Box Icon={<CiHeadphones size={30} />} name={"Headphones"} />
            <Box Icon={<RiComputerLine size={30} />} name={"Computers"} />
            <Box Icon={<PiGameControllerDuotone size={30} />} name={"Gaming"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;

