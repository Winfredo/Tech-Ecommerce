import React from "react";
// import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";

const Header = () => {
  return (
    <div className="absolute w-full h-[88px] bg-white ">
      <div className=" h-full flex flex-1 xl:max-w-[1000px] mx-auto  items-center justify-start ">
                {/* <p>LOGOISLONGTHENTINS</p> */}
                <img src="./images/logo.png" className="mb-1"/>

            <div className="hidden lg:flex flex-1 h-full xl:max-w-[1000px]  w-full items-center ">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-[300px] h-[35px] rounded-md outline-0 border-0 pl-2 mr-5 bg-[#F5F5F5] "
                />
                <ul className="flex flex-1 items-center justify-start space-x-10 ">
                    <li className="text-[18px] text-[#b2b2b2] cursor-pointer ">Home</li>
                    <li className="text-[18px] text-[#b2b2b2] cursor-pointer ">
                    About
                    </li>
                    <li className="text-[18px] text-[#b2b2b2] cursor-pointer">
                    Contact Us
                    </li>
                    <li className="text-[18px] text-[#b2b2b2] cursor-pointer ">Blog</li>
                </ul>
                <div className=" flex h-full mr-[10px] items-center justify-evenly space-x-8 text-[16px]">
                    <AiOutlineHeart className="text-[25px]" />
                    <AiOutlineShoppingCart className="text-[25px]"/>
                    <RxPerson className="text-[25px]"/>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Header;
