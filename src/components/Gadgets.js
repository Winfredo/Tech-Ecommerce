import React from "react";

const Gadgets = () => {
  return (
    <div className="w-full flex-col flex lg:flex-row my-10 lg:my-0 ">
        <div
          className=" flex flex-col
          items-start justify-normal "
          >
            
            {/* ps5 image and text */}
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
          {/* ps5 image and text ends here */}


          
        
          <div className="flex flex-col mx-auto lg:flex-row ">

            {/* airpods starts here */}
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
            {/* airpods ends here */}





            {/* apple vision starts here */}
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
            {/* apple vision ends here */}


          </div>


        </div>


        <div className="bg-[#ededed] lg:w-full lg:h-fit mx-auto h-[360px] w-[300px] flex-col-reverse flex lg:flex-row lg:items-center lg:justify-between">
          {/* macbook pro starts here */}
       
          <div className=" lg:ml-20 h-[320px]  w-[300px] text-center lg:text-left lg:w-fit lg:h-fit ">
            <p className="text-[1.8rem] font-extralight">
              Macbook <span className="font-semibold">Air</span>
            </p>
            <p className="text-[0.7rem]  font-normal text-[#A5A3A6]">
              The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
            </p>
            <p className="text-[0.7rem] font-normal text-[#A5A3A6]">
              
              
            </p>
            <button className="lg:w-[130px] lg:h-[40px] w-[270px] h-[45px] mt-6  text-[12px] text-black border-[1px] border-black lg:mt-3 rounded-md">
              Shop Now
            </button>
          </div>
          
          <div className=" pr-5 lg:pr-0 ">
            <img
              src="./images/macbookpro.png"
              alt="a macbook pro"
              className="h-[430px] hidden lg:flex "
            />

            <img
              src="./images/product4.png"
              alt="a macbook pro"
              className="h-[170px] w-[200px] flex  mx-auto mt-5 justify-center lg:hidden "
            />
          </div>
          {/* macbook pro ends here */}

        </div>
    </div>
  );
};

export default Gadgets;







// import React from "react";

// const Gadgets = () => {
//   return (
//     <div className="w-full flex flex-col md:flex-row">
//       {/* Div for the first part */}
//       {/* Div for the playstation 5 */}
//       <div className="flex flex-col items-center md:w-1/2 md:p-4">
//         <img
//           src="./images/PlayStation.png"
//           alt="A playstation 5"
//           className="h-[230px] md:h-auto"
//         />
//         <div className="text-center mt-4">
//           <p className="font-semibold text-xl md:text-2xl">PlayStation 5</p>
//           <p className="text-sm md:text-base text-gray-500">
//             Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
//           </p>
//         </div>
//       </div>
//       {/* Div for the playstation 5 ends here*/}

//       {/* main div for the vision pro and airpods max */}
//       <div className="flex flex-col md:flex-row md:w-1/2">
//         <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center md:w-1/2 md:p-4">
//           <img
//             src="./images/airpodsmax.png"
//             alt="airpods max"
//             className="h-[170px] md:h-auto"
//           />
//           <div className="ml-4 md:text-center">
//             <p className="text-xl md:text-2xl font-light">Apple</p>
//             <p className="text-xl md:text-2xl font-light">
//               AirPods <span className="font-semibold">Max</span>
//             </p>
//             <p className="text-xs md:text-sm text-gray-500">
//               Computational audio.
//             </p>
//             <p className="text-xs md:text-sm text-gray-500">
//               Listen, it's powerful.
//             </p>
//           </div>
//         </div>
//         <div className="w-full h-[200px] bg-black flex items-center justify-center md:w-1/2 md:p-4">
//           <img
//             src="./images/visionpro.png"
//             alt="vision pro"
//             className="h-[170px] md:h-auto"
//           />
//           <div className="ml-4 md:text-center">
//             <p className="text-xl md:text-2xl text-white font-light">
//               Apple
//             </p>
//             <p className="text-xl md:text-2xl text-white font-light">
//               Vision <span className="font-semibold">Pro</span>
//             </p>
//             <p className="text-xs md:text-sm text-gray-500">
//               An immersive way to experience entertainment.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* main div for the vision pro and airpods max ends here*/}

//       {/* The div for the second part */}
//       <div className="bg-gray-200 w-full mt-4 md:flex md:items-center md:justify-between">
//         <div className="mx-auto md:w-1/2 md:p-4">
//           <p className="text-xl md:text-2xl font-light">
//             MacBook <span className="font-semibold">Air</span>
//           </p>
//           <p className="text-xs md:text-sm text-gray-500">
//             The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
//           </p>
//           <button className="w-[130px] h-[40px] text-xs md:text-sm text-black border border-black mt-3 rounded-md">
//             Shop Now
//           </button>
//         </div>
//         <div className="w-full md:w-1/2 md:p-4">
//           <img
//             src="./images/macbookpro.png"
//             alt="a macbook pro"
//             className="h-[430px] md:h-[auto]"
//           />
//         </div>
//       </div>
//       {/* The div for the second part ends here */}
//     </div>
//   );
// };

// export default Gadgets;
