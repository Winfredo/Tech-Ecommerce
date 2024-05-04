import React from "react";
import Header from "../Header";
import SubHeader from "../SubHeader";
import { Link } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";



const Details = () => {
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
            <p className="text-[#a4a4a4] font-light flex items-center justify-center mr-5">   Smartphones <LiaGreaterThanSolid className="ml-5" /> </p>
            <p className="text-[#a4a4a4] font-light flex items-center justify-center mr-5">   Apple <LiaGreaterThanSolid className="ml-5" /> </p>
            <p className="text-[#a4a4a4] font-light ">   iPhone 14 Pro Max</p>

          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Details;
