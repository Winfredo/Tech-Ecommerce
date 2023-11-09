import React from "react";
import { MdPhoneIphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FiWatch } from "react-icons/fi";
import { AiOutlineCamera } from "react-icons/ai";
import { CiHeadphones } from "react-icons/ci";
import { PiGameControllerDuotone } from "react-icons/pi";

const SubHeader = () => {
  return (
    <div className="hidden lg:flex flex-1  bg-[#2e2e2e] w-full h-[42px]  text-[#969696]">
      <div className="hidden  lg:flex lg:items-center lg:justify-evenly h-full w-full xl:max-w-[1250px] mx-auto">
        <ul className="flex flex-1 items-center justify-between">
          <li className="  flex text-sm items-center justify-evenly">
            <MdPhoneIphone className="mr-2"/>
            <p>Phones</p>
          </li>
          <p>|</p>
          <li className="  flex text-sm items-center  ">
            <RiComputerLine className="mr-2"/>
            <p>Computer</p>
          </li>
          <p>|</p>
          <li className="  flex text-sm items-center ">
            <FiWatch className="mr-2"/>
            <p>Smart Watches</p>
          </li>
          <p>|</p>
          <li className="  flex text-sm items-center ">
            <AiOutlineCamera className="mr-2"/>
            <p>Cameras</p>
          </li>
          <p>|</p>
          <li className="  flex text-sm items-center ">
            <CiHeadphones className="mr-2"/>
            <p>Headphones</p>
          </li>
          <p>|</p>
          <li className="  flex text-sm items-center ">
            <PiGameControllerDuotone className="mr-2"/>
            <p>Gaming</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
