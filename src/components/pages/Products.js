import React from "react";
import Header from "../Header";
import SubHeader from "../SubHeader";
import { LiaGreaterThanSolid } from "react-icons/lia";

const Products = () => {
  return (
    <div>
      <Header />
      <SubHeader />

      <div className="w-full h-[5rem] bg-green-200">
        <div className="max-w-[1250px] bg-red-200  h-full mx-auto">
          <div className="hidden  bg-red-500 mx-5  lg:flex flex-1 pt-7 text-[#a4a4a4] text-sm font-light">
            <p className="flex items-center justify-center mr-10">
              Home <LiaGreaterThanSolid className="ml-10"/>

            </p>
            <p className="flex items-center justify-center mr-10">
              Catalog <LiaGreaterThanSolid className="ml-10" />
            </p>
            <p className="text-black">Smartphones</p>
          </div>

        {/* for the small screen view */}
          <div>
          <button className="h-[30px] w-[150px] border-2">
            Filters
          </button>

          <button className="border-2 h-[30px] w-[150px]">
            By Rating
          </button>
        </div>
        </div>
       

        <div className="bg-red-200 h-[80rem] w-full">

        </div>
      </div>
    </div>
  );
};

export default Products;
