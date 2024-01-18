import React, { useState } from "react";
import Header from "../Header";
import SubHeader from "../SubHeader";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { InputNumber } from "antd";
import { Slider } from "antd";
import "./index.css";

const Products = () => {
  const [inputValue1, setInputValue1] = useState(40);
  const [inputValue2, setInputValue2] = useState(30);
  return (
    <div>
      <Header />
      <SubHeader />

      <div className="w-full h-[5rem]  ">
        <div className="max-w-[1250px]  h-full mx-auto">
          <div className="hidden mx-5 lg:flex flex-1 pt-7 text-[#a4a4a4] text-sm font-light">
            <p className="flex items-center justify-center mr-10">
              Home <LiaGreaterThanSolid className="ml-10" />
            </p>
            <p className="flex items-center justify-center mr-10">
              Catalog <LiaGreaterThanSolid className="ml-10" />
            </p>
            <p className="text-[#a4a4a4] font-light">Smartphones</p>
          </div>

          {/* for the small screen view */}
          <div className="md:hidden bg-red-300 flex justify-center  ">
            <button className="h-[50px] w-[150px] border-2">Filters</button>

            <button className="border-2 h-[50px] w-[150px]">By Rating</button>
          </div>
        </div>

        <div className=" h-[80rem] w-full">
          <div className="lg:max-w-[1250px] h-full  bg-green-300 pt-5 mx-auto">
            <div className="w-[230px] h-full bg-white ml-5">
              <div className="flex justify-between items-center text-[14px] pb-3 border-b border-[#b5b5b5]">
                <p className="">Price</p>
                <p>
                  <LiaGreaterThanSolid />
                </p>
              </div>

              <div className="flex justify-between py-3 items-center text-[12px] text-[#b5b5b5]">
                <p>From</p>
                <p>To</p>
              </div>

              <div className="flex justify-between">
                <InputNumber
                  size="large"
                  min={0}
                  max={5000}
                  className="rounded-[4px]"
                  value={inputValue1}
                  onChange={setInputValue1}
                />
                <p className="pt-2 text-[#a4a4a4] ">-</p>
                <InputNumber
                  size="large"
                  min={0}
                  max={5000}
                  className="rounded-[4px]"
                  value={inputValue2}
                  onChange={setInputValue2}
                />
              </div>
              <Slider
                max={5000}
                range={{
                  draggableTrack: true,
                }}
                value={[inputValue1, inputValue2]}
                onChange={(values) => {
                  setInputValue1(values[0]);
                  setInputValue2(values[1]);
                }}
              />
            </div>
            {/* this is where the div for the whole thing ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
