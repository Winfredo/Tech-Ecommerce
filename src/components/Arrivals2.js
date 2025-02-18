import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import "../components/pages/index.css";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

const Arrival = () => {
  const Phones = ({ Icon, text, Desciption, Price, imageUrl }) => {
    return (
      <div className=" px-3 h-[370px] rounded-xl bg-[#ededed] mb-3  ">
        <div className="flex justify-end  my-5 mr-5">{Icon}</div>
        <div className="flex flex-col items-center justify-center">
          <img src={imageUrl} alt="iphone" />
          <p className="text-sm mt-2">{text}</p>
          <p className="text-sm">{Desciption}</p>
          <p className="text-xl py-3">{Price}</p>
          <Link to={"/details"}>
            <button className="w-[150px] h-[35px] text-sm  text-white border-[1px] bg-black rounded-md">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className=" mt-7">
      <div className=" w-full grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-10  mb-10">
        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/iphone14.png"}
          text={"Apple iPhone 14 Pro "}
          Desciption={"(MQ2333)"}
          Price={"$1437"}
        />
        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/airpodsmax 2.png"}
          text={"Airpods Max"}
          Desciption={"Silver"}
          Price={"$549"}
        />
        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/galaxybuds.png"}
          text={"Galaxy Buds FE"}
          Desciption={"Samsung Buds."}
          Price={"$250"}
        />

        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/applewatch.png"}
          text={"Apple Watch series 9  "}
          Desciption={"Starlight Case"}
          Price={"$399"}
        />

        <Phones
          Icon={<FcLike size={25} />}
          imageUrl={"./images/ipad.png"}
          text={"Ipad Pro"}
          Desciption={"Silver Color"}
          Price={"$2000"}
        />
        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/iphone14.png"}
          text={"Apple iPhone 14 Pro "}
          Desciption={"(MQ2333)"}
          Price={"$1437"}
        />

        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/applewatch.png"}
          text={"Apple Watch series 9  "}
          Desciption={"Starlight  Case"}
          Price={"$399"}
        />

        <Phones
          Icon={<AiOutlineHeart size={25} />}
          imageUrl={"./images/airpodsmax 2.png"}
          text={"Airpods Max"}
          Desciption={"Silver"}
          Price={"$549"}
        />
        <Phones
          Icon={<FcLike size={25} />}
          imageUrl={"./images/iphone14.png"}
          text={"Apple iPhone 14 Pro "}
          Desciption={"(MQ2333)"}
          Price={"$1200"}
        />
      </div>
      <div className="flex justify-center mt-4">
        <Pagination defaultCurrent={1} total={50} className="pagination" />
      </div>
    </div>
  );
};

export default Arrival;
