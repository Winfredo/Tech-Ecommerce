import React from "react";
// import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";


const Header = () => {
  return (
    <div className="w-full h-[88px] bg-white ">
      <div className=" h-full justify-start flex xl:max-w-[1250px] xl:justify-center xl:items-center mx-auto  ">
        <div className="flex items-center  justify-start">
        <img
          src="./images/logo-no-background.png"
          alt="logo"
          className=" h-[50px] mr-2 mt-[7px] w-[170px]"
        />

        <div className="hidden  xl:flex flex-1 items-center ">
          <input
            type="text"
            placeholder="Search"
            className="w-[300px] h-[35px] rounded-md outline-0 border-0 pl-2 mr-4 bg-[#F5F5F5]"
          />
          <ul className="flex items-center justify-start space-x-10">
            <li className="text-md text-[#b2b2b2] cursor-pointer ">Home</li>
            <li className="text-md text-[#b2b2b2] cursor-pointer ">About</li>
            <li className="text-md text-[#b2b2b2]  cursor-pointer">
              Contact Us
            </li>
            <li className="text-md text-[#b2b2b2] cursor-pointer ">Blog</li>
          </ul>
          <div className=" flex  h-full ml-[1rem] items-center space-x-7 text-[16px]">
            <AiOutlineHeart className="text-[25px]" />
            <AiOutlineShoppingCart className="text-[25px]" />
            <RxPerson className="text-[25px]" />
          </div>
        </div>
        </div>
       
      </div>

    </div>
  );
};

export default Header;
