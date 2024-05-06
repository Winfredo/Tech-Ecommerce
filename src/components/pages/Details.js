import React from "react";
import Header from "../Header";
import SubHeader from "../SubHeader";
import { Link } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { useState } from "react";
import { FaCamera } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import { GiBattery75 } from "react-icons/gi";
import { FiCpu } from "react-icons/fi";
import { FaCameraRotate } from "react-icons/fa6";
import { TbCpu2 } from "react-icons/tb";
import { PiTruck } from "react-icons/pi";
import { BsHouseCheck } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Details = () => {
  const Features = ({ icon, text1, text2 }) => {
    return (
      <div className="h-[60px] w-[45%] lg:w-[170px] rounded-md bg-[#f4f4f4] flex items-center pl-5 mb-3">
        {icon}
        <div className="ml-3 flex flex-col lg:text-sm text-[12px]">
          <p className="text-[#a7a7a7]">{text1}</p>
          <p className="text-[#4e4e4e]">{text2}</p>
        </div>
      </div>
    );
  };

  const Assurance = ({ icon, text1, text2 }) => {
    return (
      <div className="h-[80px] md:h-[60px] w-[170px] rounded-md  flex items-center flex-col md:flex-row pl-5 mb-3">
        <button className="w-[30%] h-[70%]  rounded-[10%] bg-[#f6f6f6] flex justify-center items-center">
          {icon}
        </button>
        <div className="ml-3 flex flex-col text-sm">
          <p className="text-[#717171] text-[12px]">{text1}</p>
          <p className="text-[#000] text-[12px]">{text2}</p>
        </div>
      </div>
    );
  };

  const Screens = ({ text1, text2, text3, text4, text5, text6, header }) => {
    return (
      <div className="flex justify-between pb-1 mb-5 border-b border-opacity-40 border-[#cdcdcd]">
        <p className="text-[13px]">{text1}</p>

        <div className="text-right">
          <p className="text-[13px]">{text2} </p>
          <p className="text-[13px]">{text3} </p>
          <p className="text-[13px]">{text4} </p>
          <p className="text-[13px]">{text5} </p>
          <p className="text-[13px]">{text6} </p>
        </div>
      </div>
    );
  };

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedButtonIndex(index);
  };

  return (
    <div>
      <Header />
      <SubHeader />

      <div className="w-full bg-white">
        <div className="max-w-[1250px] pb-7 h-full mx-auto ">
          <div className="hidden mx-5 lg:flex flex-1 pt-7 text-[#a4a4a4] text-sm font-light">
            <Link to={"/"}>
              <p className="flex items-center justify-center mr-5">
                Home <LiaGreaterThanSolid className="ml-5" />
              </p>
            </Link>
            <p className="flex items-center justify-center mr-5">
              Catalog <LiaGreaterThanSolid className="ml-5" />
            </p>
            <p className="text-[#a4a4a4] font-light flex items-center justify-center mr-5">
              Smartphones <LiaGreaterThanSolid className="ml-5" />
            </p>
            <p className="text-[#a4a4a4] font-light flex items-center justify-center mr-5">
              Apple <LiaGreaterThanSolid className="ml-5" />
            </p>
            <p className="text-[#a4a4a4] font-light "> iPhone 14 Pro Max</p>
          </div>
        </div>
      </div>

      <div className="pt-10 bg-white">
        <div className="w-full max-w-[1250px] mx-auto flex flex-col md:flex-row   justify-between items-center">
          <img
            src="./images/iphone14pro.png"
            alt="iphone14pro"
            className="w-[50%] md:w-[35%] mb-7 md:mb-0"
          />

          <div className="flex flex-col gap-3 md:w-[43%] w-[80%] md:mr-5 h-full ">
            <p className="font-semibold text-xl  text-center md:text-start">
              Apple iPhone 14 Pro Max
            </p>
            <p className="text-lg text-center md:text-start">
              $1399 <s className="text-[#a0a0a0] text-sm">$1499</s>
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 ">
              <p className="mr-2 ">Select Color: </p>
              <button className="w-8 h-8 rounded-[50%] bg-black transition-colors duration-300"></button>
              <button className="w-8 h-8 rounded-[50%] bg-[#781dbc] transition-colors duration-300 hover:bg-purple-800"></button>
              <button className="w-8 h-8 rounded-[50%] bg-[#e10000] transition-colors duration-300 hover:bg-red-700"></button>
              <button className="w-8 h-8 rounded-[50%] bg-[#e1b000] transition-colors duration-300 hover:bg-yellow-600"></button>
              <button className="w-8 h-8 rounded-[50%] bg-[#e8e8e8] transition-colors duration-300 hover:bg-gray-400"></button>
            </div>

            <div className=" flex gap-3 items-center justify-center md:justify-start">
              <button
                className={`w-[70px] py-2 rounded-md border border-solid ${
                  selectedButtonIndex === 0
                    ? "border-black border-2 text-black"
                    : "border-[#d5d5d5] text-[#d5d5d5]"
                }`}
                onClick={() => handleClick(0)}
              >
                128GB
              </button>
              <button
                className={`w-[70px] py-2 rounded-md border border-solid ${
                  selectedButtonIndex === 1
                    ? "border-black border-2 text-black"
                    : "border-[#d5d5d5] text-[#6f6f6f]"
                }`}
                onClick={() => handleClick(1)}
              >
                256GB
              </button>
              <button
                className={`w-[70px] py-2 rounded-md border border-solid ${
                  selectedButtonIndex === 2
                    ? "border-black border-2 text-black"
                    : "border-[#d5d5d5] text-[#6f6f6f]"
                }`}
                onClick={() => handleClick(2)}
              >
                512GB
              </button>
              <button
                className={`w-[70px] py-2 rounded-md border border-solid ${
                  selectedButtonIndex === 3
                    ? "border-black border-2 text-black"
                    : "border-[#d5d5d5] text-[#6f6f6f]"
                }`}
                onClick={() => handleClick(3)}
              >
                1TB
              </button>
            </div>

            {/* over here */}
            <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
              <Features
                icon={<FaMobileScreenButton />}
                text1={"Screen Size"}
                text2={'6.7"'}
              />
              <Features
                icon={<FiCpu />}
                text1={"CPU"}
                text2={"Apple A16 Bionic"}
              />
              <Features
                icon={<TbCpu2 />}
                text1={"Number of Cores"}
                text2={"6"}
              />

              <Features
                icon={<FaCamera />}
                text1={"Main Camera"}
                text2={"48-12-12MP"}
              />

              <Features
                icon={<FaCameraRotate />}
                text1={"Front Camera"}
                text2={"12MP"}
              />

              <Features
                icon={<GiBattery75 />}
                text1={"Battery Capacity"}
                text2={"4323MaH"}
              />
            </div>
            <div className="w-[100%]">
              <p className="text-[12px] text-[#6c6c6c] md:w-[100%] w-[90%] mx-auto">
                Enhanced capabilities thanks to an enlarged display of 6.7
                inches and work without recharging throughout the day.
                Incredible photos in weak yes and in bright light using the new
                system with two cameras more...
              </p>
            </div>
            <div className="flex justify-between flex-col md:flex-row items-center space-y-5 md:space-y-0">
              <button className="bg-white md:w-[48%] w-[90%] h-[45px] rounded-[4px] border border-black text-[13px]">
                Add To WishList
              </button>
              <button className="bg-black text-white md:w-[48%] w-[90%] h-[45px] rounded-[4px] text-[13px]">
                Add To Card
              </button>
            </div>

            <div className="flex justify-between">
              <Assurance
                icon={<PiTruck />}
                text1={"Free delivery"}
                text2={"1-2 Days"}
              />
              <Assurance
                icon={<BsHouseCheck />}
                text1={"In Stock"}
                text2={"Today"}
              />
              <Assurance
                icon={<ImCheckmark />}
                text1={"Guaranteed"}
                text2={"1 year"}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[1250px] rounded lg:mx-auto mt-[60px] mx-5 px-10 bg-white">
          <h4 className="py-5 text-lg">Details</h4>
          <p className="text-[13px] text-[#9d9d9d]">
            Just as a book is judged by its cover, the first thing you notice
            when you pick up a modern smartphone is the display. Nothing
            surprising, because advanced technologies allow you to practically
            level the display frames and cutouts for the front camera and
            speaker, leaving no room for bold design solutions. And how good
            that in such realities Apple everything is fine with displays. Both
            critics and mass consumers always praise the quality of the picture
            provided by the products of the Californian brand. And last year's
            6.7-inch Retina panels, which had ProMotion, caused real admiration
            for many.
          </p>
          <p className="py-5">Screen</p>

          <div>
            <Screens text1={"Screen diagonal"} text2={'6.7"'} />
            <Screens text1={"The screen resolution"} text2={"2796x1290"} />
            <Screens text1={"The screen refresh rate"} text2={"120 Hz"} />
            <Screens text1={"The pixel density "} text2={"460 ppi"} />
            <Screens text1={"Screen type "} text2={"OLED"} />
            <Screens
              text1={"Additionally "}
              text2={"Dynamic Island"}
              text3={"Always-on display"}
              text4={"HDR display"}
              text5={"True Tone"}
              text6={"Wide Color (P3)"}
            />
            <Screens text1={"CPU "} text2={"A16 Bionic"} header={"CPU"} />
            <div className="flex justify-between">
              <p className="text-[13px]">Number of cores</p>
              <p className="text-[13px]">6</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5 pb-10">
            <button className="h-[40px] w-[140px] pl-3 rounded-md  border-black border bg-white text-[13px] flex items-center justify-center">
              View More <MdOutlineArrowDropDown className="text-[25px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
