import React from "react";

const Gadgets = () => {
  return (
    <div className="w-full h-[430px] flex flex-row ">

      <div className="h-[230px] w-[720px] flex flex-col
       items-start justify-normal">     {/* Div for the first part */}

              {/* Div for the playstation 5 */}

          <div className="flex  flex-row  items-center">
            <img
              src="./images/PlayStation.png"
              alt="A playstation 5"
              className="h-[230px] "
            />

            {/* div for the playstation text */}
            <div>
              <p className="font-semibold text-[1.8rem]">PlayStation 5</p>
              <p className="text-[10px] font-normal text-[#A5A3A6]">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
            {/* playstation text ends here */}
            
        </div> 
              {/* Div for the playstation 5 ends here*/}

        {/* main div for the vision pro and airpods max */}
        <div className="flex ">
          <div className="w-[360px] h-[200px] bg-[#ededed] flex lg:items-center lg:justify-between ">
            <img
              src="./images/airpodsmax.png"
              alt="airpods max"
              className="h-[170px]"
            />

            <div className="mx-auto">
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
        
          <div className="w-[360px] h-[200px] bg-[#353535] flex items-center justify-between ">
            <img
              src="./images/visionpro.png"
              alt="vision pro"
              className="h-[170px]"
            />

            <div>
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
        </div>        {/* main div for the vision pro and airpods max ends here*/}



      </div> {/* The div for the first part ends here */}




      {/* second div starts here */}
      <div className="bg-[#ededed] w-full h-full flex items-center justify-between">

        {/* div for the text in the macbook */}
        <div className=" mx-auto">
          <p className="text-[1.8rem] font-extralight">
            Macbook <span className="font-semibold">Air</span>
          </p>
          <p className="text-[0.7rem] font-normal text-[#A5A3A6]">
            The new 15-inch MacBook Air makes room for more of what
          </p>
          <p className="text-[0.7rem] font-normal text-[#A5A3A6]">
            {" "}
            you love with a spacious Liquid Retina display.
          </p>
          <button className="w-[130px] h-[40px] text-[12px] text-black border-[1px] border-black mt-3 rounded-md">
            Shop Now
          </button>
        </div>           {/* div for the text in the macbook end here */}
 

        {/* the second div for the picture */}
        <div className="">
          <img
            src="./images/macbookpro.png"
            alt="a macbook pro"
            className="h-[430px] "
          />
        </div>
        {/* the second div for the picture ends here */}


      </div>  {/* second div ends here */}
    </div>
  );
};

export default Gadgets;
