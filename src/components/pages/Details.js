import React from "react";
import Header from "../Header";
import SubHeader from "../SubHeader";
import { Link } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { useState } from "react";

const Details = () => {
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

      <div className="w-full  max-w-[1250px] mx-auto ">
        <img
          src="./images/iphone14pro.png"
          alt="iphone14pro"
          className="w-[25%] h-[25%]"
        />

        <div className="flex flex-col gap-3">
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
                  ? "border-black text-black"
                  : "border-[#d5d5d5] text-[#d5d5d5]"
              }`}
              onClick={() => handleClick(0)}
            >
              128GB
            </button>
            <button
              className={`w-[70px] py-2 rounded-md border border-solid ${
                selectedButtonIndex === 1
                  ? "border-black text-black"
                  : "border-[#d5d5d5] text-[#6f6f6f]"
              }`}
              onClick={() => handleClick(1)}
            >
              256GB
            </button>
            <button
              className={`w-[70px] py-2 rounded-md border border-solid ${
                selectedButtonIndex === 2
                  ? "border-black text-black"
                  : "border-[#d5d5d5] text-[#6f6f6f]"
              }`}
              onClick={() => handleClick(2)}
            >
              512GB
            </button>
            <button
              className={`w-[70px] py-2 rounded-md border border-solid ${
                selectedButtonIndex === 3
                  ? "border-black text-black"
                  : "border-[#d5d5d5] text-[#6f6f6f]"
              }`}
              onClick={() => handleClick(3)}
            >
              1TB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
