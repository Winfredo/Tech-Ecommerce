import React from "react";
import Header from "../Header";
import SubHeader from "../SubHeader";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { InputNumber, Space } from 'antd';

const Products = () => {

  
  return (
    
    <div>
      <Header />
      <SubHeader />

      <div className="w-full h-[5rem]  ">
        <div className="max-w-[1250px]  h-full mx-auto">
          <div className="hidden   mx-5  lg:flex flex-1 pt-7 text-[#a4a4a4] text-sm font-light">
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
            <div className="w-[150px] h-full bg-white ml-5">
              <div className="flex justify-between items-center text-[14px] pb-1 border-b border-[#b5b5b5]">
                <p className="">Price</p>
                <p>
                  <LiaGreaterThanSolid />
                </p>
              </div>

              <div className="flex justify-between items-center text-[10px] text-[#b5b5b5]">
                <p>From</p>
                <p>To</p>
              </div>
              
              <InputNumber size="small" min={1} max={100000}  />

            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Products;
