import React from 'react'
import { MdPhoneIphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FiWatch } from "react-icons/fi";
import { AiOutlineCamera } from "react-icons/ai";
import { CiHeadphones } from "react-icons/ci";
import { PiGameControllerDuotone } from "react-icons/pi";

const SubHeader = () => {
  return (
   
    <div className="hidden xl:flex flex-1  bg-[#2e2e2e] w-full h-[42px]  text-[#969696]">
    <div className="hidden  xl:flex h-full w-full xl:max-w-[1250px] mx-auto">
        <ul className="flex flex-1 items-center justify-center  ">
            <li className="pr-7 border-r-[1px] flex text-sm items-center mr-7">
            <MdPhoneIphone className=" mx-2" />
            Phones
            </li>
            <li className="pr-7 border-r-[1px] flex text-sm items-center mr-7">
            <RiComputerLine className=" mx-2" />
            Computer{" "}
            </li>
            <li className="pr-7 border-r-[1px] flex text-sm items-center mr-7">
            <FiWatch className=" mx-2" />
            Smart Watches
            </li>
            <li className="pr-7 border-r-[1px] flex text-sm items-center mr-7">
            <AiOutlineCamera className=" mx-2" />
            Cameras
            </li>
            <li className="pr-7 border-r-[1px] flex text-sm items-center mr-7">
            <CiHeadphones className=" mx-2" />
            Headphones
            </li>
            <li className="pr-7  flex text-sm items-center mr-7">
            <PiGameControllerDuotone className=" mx-2" />
            Gaming
            </li>
        </ul>
    </div>
</div>
  )
}

export default SubHeader
