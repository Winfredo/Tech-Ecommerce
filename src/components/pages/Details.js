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

const Details = () => {
  const Features = ({ icon, text1, text2 }) => {
    return (
      <div className="h-[60px] w-[170px] rounded-md bg-[#f4f4f4] flex items-center pl-5">
        {icon}
        <div className="ml-3 flex flex-col text-sm">
          <p className="text-[#a7a7a7]">{text1}</p>
          <p className="text-[#4e4e4e]">{text2}</p>
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
        <div className="max-w-[1250px] pb-7 h-full mx-auto">
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
              {" "}
              Smartphones <LiaGreaterThanSolid className="ml-5" />{" "}
            </p>
            <p className="text-[#a4a4a4] font-light flex items-center justify-center mr-5">
              {" "}
              Apple <LiaGreaterThanSolid className="ml-5" />{" "}
            </p>
            <p className="text-[#a4a4a4] font-light "> iPhone 14 Pro Max</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1250px]  mx-auto flex gap-10 mt-10 justify-center items-center">
        <img
          src="./images/iphone14pro.png"
          alt="iphone14pro"
          className="w-[30%]"
        />

        <div className="flex  flex-col  gap-3  bg-red-200 w-[30%]">
          <p>Apple iPhone 14 Pro Max</p>
          <p>
            $1399 <s className="text-[#a0a0a0] text-sm">$1499</s>
          </p>
          <div className="flex gap-2">
            <p className="mr-5">Select Color: </p>
            <button className="w-8 h-8 rounded-[50%] bg-black transition-colors duration-300"></button>
            <button className="w-8 h-8 rounded-[50%] bg-[#781dbc] transition-colors duration-300 hover:bg-purple-800"></button>
            <button className="w-8 h-8 rounded-[50%] bg-[#e10000] transition-colors duration-300 hover:bg-red-700"></button>
            <button className="w-8 h-8 rounded-[50%] bg-[#e1b000] transition-colors duration-300 hover:bg-yellow-600"></button>
            <button className="w-8 h-8 rounded-[50%] bg-[#e8e8e8] transition-colors duration-300 hover:bg-gray-400"></button>
          </div>

          <div className=" flex gap-3">
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
          <div className="grid grid-cols-2 ">
            <Features
              icon={<FaMobileScreenButton /> }
              text1={"Screen Size"}
              text2={"Apple A16 Bionic"}
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
              icon={<GiBattery75 /> }
              text1={"Battery Capacity"}
              text2={'4323MaH'}
            />
          </div>  
          
          <p className="text-sm">Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day.
              Incredible photos in weak yes and in bright light using the new system with two cameras more...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
