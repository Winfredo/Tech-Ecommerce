import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="md:sticky w-full fixed z-[999] h-[88px] bg-white">
      <div className=" h-full flex lg:max-w-[1250px] mx-auto">
        <div className=" flex flex-1 items-center justify-between">
          <Link to={"/"}>
            <img src="./images/Logo.png" alt="logo" className="mr-10 ml-5" />
          </Link>

          <div className="hidden lg:flex flex-1 items-center justify-between">
            <input
              type="text"
              placeholder="Search"
              className="w-[300px] h-[35px] rounded-md outline-0 border-0 pl-2 mr-4 bg-[#F5F5F5]"
            />
            <ul className="flex items-center justify-between px-10 flex-1 space-x-12">
              <li
                className="text-md text-[#b2b2b2] cursor-pointer"
                onClick={closeMobileMenu}
              >
                Home
              </li>
              <li
                className="text-md text-[#b2b2b2] cursor-pointer"
                onClick={closeMobileMenu}
              >
                About
              </li>
              <li
                className="text-md text-[#b2b2b2] cursor-pointer"
                onClick={closeMobileMenu}
              >
                Contact
              </li>
              <li
                className="text-md text-[#b2b2b2] cursor-pointer"
                onClick={closeMobileMenu}
              >
                Blog
              </li>
            </ul>
            <div className="flex h-full ml-[1rem] items-center justify-end space-x-7 mr-5 text-[16px]">
              <AiOutlineHeart className="text-[25px]" />
              <AiOutlineShoppingCart className="text-[25px]" />
              <RxPerson className="text-[25px] " />
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <div className="mr-3">
              {mobileMenuOpen ? (
                <MdClose
                  className="text-[25px] text-black cursor-pointer"
                  onClick={handleMobileMenuToggle}
                />
              ) : (
                <RxHamburgerMenu
                  className="text-[25px] cursor-pointer"
                  onClick={handleMobileMenuToggle}
                />
              )}
            </div>
          </div>
        </div>
       

        {/* the hamburger menu tab */}
        <div
          className={`lg:hidden fixed top-[88px]  left-0 w-full h-screen  bg-gradient-to-r from-[#211C24] to-[#27212b] pt-11 transition-transform duration-500 ${
            mobileMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          <ul className="  flex flex-col items-center">
            <li
              className="text-md text-[#fff] py-7 hover:bg-white hover:w-full hover:text-center hover:text-[#000]  cursor-pointer"
              onClick={closeMobileMenu}
            >
              Home
            </li>
            <li
              className="text-md text-[#fff] py-7 hover:bg-white hover:w-full hover:text-center hover:text-[#000]  cursor-pointer"
              onClick={closeMobileMenu}
            >
              About
            </li>
            <li
              className="text-md text-[#fff] py-7 hover:bg-white hover:w-full hover:text-center hover:text-[#000]  cursor-pointer"
              onClick={closeMobileMenu}
            >
              Contact
            </li>
            <li
              className="text-md text-[#fff] py-7 hover:bg-white hover:w-full hover:text-center hover:text-[#000]  cursor-pointer"
              onClick={closeMobileMenu}
            >
              Blog
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;



