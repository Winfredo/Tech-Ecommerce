import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import "../components/pages/index.css";
import { Pagination } from "antd";

const Arrival = () => {
  const Phones = ({ Icon, text, Desciption, Price, imageUrl }) => {
    return (
      <div className="w-[250px]  h-[350px] lg:w-[285px] lg:h-[370px] rounded-xl bg-[#ededed] mb-3  ">
        <div className="flex justify-end  my-5 mr-5">{Icon}</div>
        <div className="flex flex-col items-center justify-center">
          <img src={imageUrl} alt="iphone" />
          <p className="text-sm mt-2">{text}</p>
          <p className="text-sm">{Desciption}</p>
          <p className="text-xl py-3">{Price}</p>
          <button className="w-[150px] h-[35px] text-sm  text-white border-[1px] bg-black rounded-md">
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className=" mt-7">
      <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:flex  lg:justify-between mb-4">
        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/iphone14.png"}
          text={"Apple iPhone 14 Pro 512GB"}
          Desciption={"(MQ2333)"}
          Price={"$1437"}
        />
        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/camera.png"}
          text={"Blackmagic Pocket Cinema"}
          Desciption={"Camera 6k"}
          Price={"$2500"}
        />

        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/applewatch.png"}
          text={"Apple Watch series 9 GPS 41mm"}
          Desciption={"Starlight Aluminium Case"}
          Price={"$399"}
        />
      </div>

      {/* second batch */}

      <div className="flex justify-between mb-4">
        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/airpodsmax 2.png"}
          text={"Airpods Max"}
          Desciption={"Silver"}
          Price={"$549"}
        />
        <Phones
          Icon={<FcLike size={25} />}
          imageUrl={"./images/camera.png"}
          text={"Blackmagic Pocket Cinema"}
          Desciption={"Camera 6k"}
          Price={"$2500"}
        />

        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/applewatch.png"}
          text={"Apple Watch series 9 GPS 41mm"}
          Desciption={"Starlight Aluminium Case"}
          Price={"$399"}
        />
      </div>

      {/* third batch */}

      <div className="flex justify-between">
        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/galaxybuds.png"}
          text={"Galaxy Buds FE"}
          Desciption={"Graphite"}
          Price={"$99.99"}
        />
        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/ipad.png"}
          text={"Apple iPad 9 10.2 64GB Wi-fi"}
          Desciption={"Silver (MK2L3) 2021"}
          Price={"$398"}
        />

        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/iphone14.png"}
          text={"Apple iPhone 14 Pro 512GB"}
          Desciption={"(MQ2333)"}
          Price={"$1437"}
        />
      </div>
      <div className="flex justify-center mt-4">
        <Pagination defaultCurrent={1} total={50} className="pagination" />
      </div>
    </div>
  );
};

export default Arrival;
