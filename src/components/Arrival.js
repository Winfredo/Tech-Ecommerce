import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const Arrival = () => {
  const data = [
    {
      icon: <AiOutlineHeart size={25} />,
      imageUrl: "./images/iphone14.png",
      text: "Apple iPhone 14 Pro 512GB",
      description: "(MQ2333)",
      price: "$1437",
    },
    {
      icon: <AiOutlineHeart size={25} />,
      imageUrl: "./images/camera.png",
      text: "Blackmagic Pocket Cinema",
      description: "Camera 6k",
      price: "$2500",
    },
    {
      icon: <AiOutlineHeart size={25} />,
      imageUrl: "./images/applewatch.png",
      text: "Apple Watch series 9 GPS 41mm",
      description: "Starlight Aluminium Case",
      price: "$399",
    },
    {
      icon: <AiOutlineHeart size={25} />,
      imageUrl: "./images/airpodsmax 2.png",
      text: "Airpods Max",
      description: "Silver",
      price: "$549",
    },
    {
      icon: <AiOutlineHeart size={25} />,
      imageUrl: "./images/galaxywatch.png",
      text: "Samsung Galaxy Watch6 Classic",
      description: "47mm Black",
      price: "$369",
    },
    {
      icon: <FcLike size={25} />,
      imageUrl: "./images/galaxyfold.png",
      text: "Galaxy Z Fold Unlocked | 256GB",
      description: "Phantom Black",
      price: "$1799",
    },
    {
      icon: <AiOutlineHeart size={25} />,
      imageUrl: "./images/galaxybuds.png",
      text: "Galaxy Buds FE",
      description: "Graphite",
      price: "$99.99",
    },
    {
      icon: <AiOutlineHeart size={25} />,
      imageUrl: "./images/ipad.png",
      text: "Apple iPad 9 10.2 64GB Wi-fi",
      description: "Silver (MK2L3) 2021",
      price: "$398",
    },
    {
      icon: <AiOutlineHeart size={25} />,
      imageUrl: "./images/iphone14.png",
      text: "Apple iPhone 14 Pro 512GB",
      description: "(MQ2333)",
      price: "$1437",
    },
    {
      icon: <AiOutlineHeart size={25} />,
      imageUrl: "./images/galaxybuds.png",
      text: "Galaxy Buds FE",
      description: "Graphite",
      price: "$99.99",
    },
    {
      icon: <AiOutlineHeart size={25} />,
      imageUrl: "./images/galaxywatch.png",
      text: "Samsung Galaxy Watch6 Classic",
      description: "47mm Black",
      price: "$369",
    },
    {
      icon: <AiOutlineHeart size={25} />,
      imageUrl: "./images/camera.png",
      text: "Blackmagic Pocket Cinema",
      description: "Camera 6k",
      price: "$2500",
    },
  ];

  const Phones = ({ Icon, text, Desciption, Price, imageUrl }) => {
    return (
      <div className="flex justify-between ">
        <div className="w-[220px] h-[370px] rounded-xl bg-[#ededed]  mb-10  mx-auto">
          <div className="flex justify-end  my-5 mr-5">{Icon}</div>
          <div className="flex flex-col items-center justify-center">
            <img src={imageUrl} alt="iphone" />
            <p className="text-sm mt-2">{text}</p>
            <p className="text-sm">{Desciption}</p>
            <p className="text-xl py-3">{Price}</p>
            <button className="w-[150px] h-[35px] text-sm  text-white border-[1px] bg-black	rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full  mt-5 ">
      <div className="lg:max-w-[1250px] h-full  mx-auto">
        <div className="flex justify-between md:justify-normal ml-3 text-[13px] mb-10  font-semibold">
          <p className="mr-5 border-b-2 border-black">New Arrival</p>
          <p className="mr-5 text-[#A5A3A6]">BestSeller</p>
          <p className="mr-5 text-[#A5A3A6]">Featured Products</p>
        </div>

        <div className="w-full grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 mb-10">
          {data.map((item, idx) => (
            <Phones
              key={idx}
              Icon={item.icon}
              imageUrl={item.imageUrl}
              text={item.text}
              Desciption={item.description}
              Price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arrival;
