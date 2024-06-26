import React from "react";
import {AiOutlineHeart} from "react-icons/ai"

const Discount = () => {

    const data = [
        {
            icon: <AiOutlineHeart size={25}/>,
            imageUrl: "./images/discount1.png",
            text: "Apple iPhone 14 Pro 512GB",
            description: "(MQ2333)",
            price: "$1437"
        },
        {
            icon: <AiOutlineHeart size={25}/>,
            imageUrl: "./images/airpodsmax 2.png",
            text: "Airpods Max",
            description: "Silver",
            price: "$549"
        },
        {
            icon: <AiOutlineHeart size={25}/>,
            imageUrl: "./images/applewatch.png",
            text: "Apple Watch Series 9  41mm",
            description: "Starlight Aluminium Case",
            price: "$600"
        },
        {
            icon: <AiOutlineHeart size={25}/>,
            imageUrl: "./images/discount2.png",
            text: "Apple iPhone 14 Pro 1TB",
            description: "(MQV23)",
            price: "$1600"
        },
    ]

  const Phones = ({ Icon, text, Desciption, Price, imageUrl }) => {
    return (
        <div className="w-full  flex lg:justify-between md:justify-evenly ">
        <div className="md:w-[220px] h-[370px] rounded-xl bg-[#ededed] mb-5 mx-auto">
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
    <div className="w-full pt-[80px] bg-white">
      <div className="lg:max-w-[1250px] h-full mx-auto">
        <p className=" ml-10 flex justify-start">Related Products</p>

        <div className="w-full grid grid-cols-2 my-5 lg:grid-cols-4 ">
            
            {
                data.map((item, idx) => (
                    <Phones key={idx} Icon={item.icon} imageUrl={item.imageUrl} text={item.text} Desciption={item.description} Price={item.price}/>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Discount;
