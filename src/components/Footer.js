import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";






const Footer = () => {
  return (
    <div className=" md:h-[500px] w-full bg-[#181313] ">
      <div className="max-w-[1250px] flex items-center justify-center  h-full mx-auto">
        {/* the first part. the logo and the text beneath */}

{/* grand finale */}
      <div className="flex flex-1 flex-col ">
      <div className=" flex  w-full flex-col md:flex-row  items-center justify-evenly" >
        <div className=" w-[320px] flex flex-col  items-center md:items-start justify-center md:mb-20 ">
          <img
            src="./images/logo-no-background.png"
            alt="logo"
            className=" h-[40px] mt-5 md:mt-0  w-[120px]"
          />
          <p className="text-[14px]  my-5 text-[#cfcfcf]">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than that.
          </p>
        </div>
        {/* the first part ends here. */}

        {/* second part starts here */}
        <div className="text-center md:text-left my-3">
          <p className="font-semibold text-[16px] text-white pb-3">Services</p>
          <p className="font-light text-[14px] text-[#cfcfcf] pb-3">Bonus program</p>
          <p className="font-light text-[14px] text-[#cfcfcf] pb-3">Gift Cards</p>
          <p className="font-light text-[14px] text-[#cfcfcf] pb-3">Credit and payment</p>
          <p className="font-light text-[14px] text-[#cfcfcf] pb-3">Service contracts</p>
          <p className="font-light text-[14px] text-[#cfcfcf] pb-3">Non-cash account</p>
          <p className="font-light text-[14px] text-[#cfcfcf] pb-3">Payment</p>
        </div>
        {/* second part ends here */}

        {/* third part starts here */}
        <div className="text-center md:text-left my-3">
          <p className="font-semibold text-[16px]  text-white pb-3">Assistance to the Buyer</p>
          <p className="font-light text-[14px] text-[#cfcfcf] pb-3">Find an order</p>
          <p className="font-light text-[14px] text-[#cfcfcf] pb-3">Terms of delivery</p>
          <p className="font-light text-[14px] text-[#cfcfcf] pb-3">Exchange and return of goods</p>
          <p className="font-light text-[14px] text-[#cfcfcf] pb-3">Guarantee </p>
          <p className="font-light text-[14px] text-[#cfcfcf] pb-3">Frequently asked questions</p>
          <p className="font-light text-[14px] text-[#cfcfcf] pb-3">Terms of use of this site</p> 
        </div>
        {/* third part ends here */}
        </div>

        <div className=" flex items-center justify-center mt-5 md:mt-0 md:justify-start md:ml-[5rem] lg:ml-[10rem] mb-5 md:mb-0">
          <FaTwitter className="text-white h-[30px] w-[30px] " />
      <FaFacebookF className="text-white h-[30px] w-[30px]  ml-5"/>
      <FaTiktok className=" h-[30px] w-[30px] text-white  ml-5"/>
      <FaInstagram className="h-[30px]  w-[30px] text-white  ml-5"/>
      

        </div>
        {/* icons end */} 
      </div>
      {/* grand finale ending */}


       
      
      </div>
      {/* div for the icons */}
     
    </div>
  );
};

export default Footer;
