import React from "react";
import { Link } from "react-router-dom";

const Gadgets = () => {
  return (
    <div className="w-full flex-col flex lg:flex-row my-10 lg:my-0 ">
      <div
        className=" flex flex-col
          items-start justify-normal "
      >
        <div className="flex lg:flex-row flex-col mx-auto h-[370px] w-[300px]  lg:w-fit lg:h-fit items-center">
          <img
            src="./images/PlayStation.png"
            alt="A playstation 5"
            className="h-[230px] "
          />

          <div className=" flex flex-col text-center  items-center mt-3 lg:flex lg:items-start lg:text-left ">
            <p className="font-semibold text-[1.8rem]">PlayStation 5</p>
            <p className="text-[10px] font-normal text-[#A5A3A6]">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto lg:flex-row ">
          <div className="lg:w-[360px] lg:h-[200px] h-[340px] w-[300px] mx-auto bg-[#ededed] flex flex-col lg:flex-row lg:items-center lg:justify-between ">
            <img
              src="./images/airpodsmax 2.png"
              alt="airpods max"
              className="h-[150px] w-[140px] flex  mx-auto  justify-center lg:hidden "
            />
            <img
              src="./images/airpodsmax.png"
              alt="airpods max"
              className="h-[170px] hidden lg:flex "
            />

            <div className="lg:mx-auto mt-10 lg:mt-0  flex flex-col items-center lg:items-start justify-center ">
              <p className="text-[1.8rem] font-extralight	">Apple</p>
              <p className="text-[1.8rem] font-extralight	">
                AirPods <span className="font-semibold">Max</span>
              </p>
              <p className="text-[0.8rem] text-[#A5A3A6]">
                Computational audio.
              </p>
              <p className="text-[0.8rem] text-[#A5A3A6]">
                Listen, its powerful
              </p>
            </div>
          </div>
          <div className="lg:w-[360px] lg:h-[200px] h-[320px] w-[300px] mx-auto bg-[#353535] flex flex-col lg:flex-row lg:items-center lg:justify-between ">
            <img
              src="./images/visionpro.png"
              alt="vision pro"
              className="h-[170px] hidden lg:flex"
            />
            <img
              src="./images/visionpro1.png"
              alt="vision pro"
              className="h-[150px] w-[200px] flex  mx-auto mt-5 justify-center lg:hidden"
            />

            <div className="lg:mx-auto  flex flex-col items-center lg:items-start lg:text-left lg:pl-3 justify-center ">
              <p className="text-[1.8rem] ml-3  text-white font-extralight">
                Apple
              </p>
              <p className="text-[1.8rem] ml-3 text-white font-extralight">
                Vision <span className="font-semibold">Pro</span>
              </p>
              <p className="text-[0.8rem] ml-3 text-[#A5A3A6]">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ededed] lg:w-full lg:h-fit mx-auto h-[360px] w-[300px] flex-col-reverse flex lg:flex-row lg:items-center lg:justify-between">
        <div className=" lg:ml-20 h-[430px] w-[300px] text-center lg:text-left lg:w-fit lg:h-fit ">
          <p className="text-[1.8rem] font-extralight">
            Macbook <span className="font-semibold">Air</span>
          </p>
          <p className="text-[0.7rem]  font-normal text-[#A5A3A6]">
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <p className="text-[0.7rem] font-normal text-[#A5A3A6]"></p>
          <Link to={"/products"}>
            <button className="lg:w-[130px] lg:h-[40px] w-[270px] h-[45px] mt-6  text-[12px] hover:bg-[#27212b]  hover:text-white transition-colors duration-300 text-black border-[1px] border-black lg:mt-3 rounded-md">
              Shop Now
            </button>
          </Link>
        </div>

        <div className=" pr-5 lg:pr-0 ">
          <img
            src="./images/macbookpro.png"
            alt="a macbook air"
            className="h-[430px] hidden lg:flex "
          />

          <img
            src="./images/product4.png"
            alt="a macbook pro"
            className="h-[170px] w-[200px] flex  mx-auto mt-5 justify-center lg:hidden "
          />
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
