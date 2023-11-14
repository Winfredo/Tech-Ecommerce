import React from "react";
import {AiOutlineHeart} from "react-icons/ai"
import {FcLike} from "react-icons/fc"

const Arrival = () => {
  const Phones = ({ Icon, text,Desciption, Price,imageUrl }) => {
    return (
     <div className="flex justify-between">
         <div className="w-[220px] h-[370px] rounded-xl bg-[#ededed]  mb-10  mx-auto">
        <div className="flex justify-end  my-5 mr-5">{Icon}</div>
        <div className="flex flex-col items-center justify-center">
        <img src={imageUrl} alt="iphone" />
        <p className="text-sm mt-2">{text}</p>
        <p className="text-sm">{Desciption}</p>
        <p className="text-xl py-3">{Price}</p>
        <button className="w-[150px] h-[35px] text-sm  text-white border-[1px] bg-black	rounded-md">Buy Now</button>
        </div>
       
      </div>
     </div>
    );
  };
 
  return (
    <div className="w-full  mt-5">
      <div className="lg:max-w-[1250px] h-full  mx-auto">
        <div className="flex justify-between md:justify-normal ml-3 text-[13px] mb-10  font-semibold">
          <p className="mr-5 border-b-2 border-black">New Arrival</p>
          <p className="mr-5 text-[#A5A3A6]">BestSeller</p>
          <p className="mr-5 text-[#A5A3A6]">Featured Products</p>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4  ">
          <Phones Icon={<AiOutlineHeart size={25}/>} imageUrl="./images/iphone14.png" text={"Apple iPhone 14 Pro Max 128GB"} Desciption={"Deep Purple (MQ9T3RX/A)"} Price={"$900"} />
          <Phones Icon={<AiOutlineHeart size={25}/>} imageUrl="./images/camera.png" text={"Blackmagic Pocket Cinema"} Desciption={"Camera 6k"} Price={"$2535"}/>
          <Phones Icon={<AiOutlineHeart size={25}/>} imageUrl="./images/applewatch.png" text={"Apple Watch series 9 GPS 41mm"} Desciption={"Starlight Aluminium Case"} Price={"$399"}/>
          <Phones Icon={<AiOutlineHeart size={25}/>} imageUrl="./images/airpodsmax 2.png" text={"Airpods Max "} Desciption={"Silver"} Price={"$549"}/>
          <Phones Icon={<AiOutlineHeart size={25}/>} imageUrl="./images/galaxywatch.png" text={"Samsung Galaxy Watch6 Classic"} Desciption={"47mm Black"} Price={"$369"}/>
          <Phones Icon={<FcLike size={25}/>} imageUrl="./images/galaxyfold.png" text={"Galaxy Z Fold Unlocked | 256GB"} Desciption={"| Phantom Black"} Price={"$1799"}/>
          <Phones Icon={<AiOutlineHeart size={25}/>} imageUrl="./images/galaxybuds.png" text={"Galaxy Buds FE"} Desciption={"Graphite"} Price={"$99.99"}/>
          <Phones Icon={<AiOutlineHeart size={25}/>} imageUrl="./images/ipad.png" text={"Apple iPad 9 10.2 64GB Wi-fi"} Desciption={"Silver (MK2L3) 2021"} Price={"$398"}/>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
