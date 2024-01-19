import React, { useState } from "react";
import Header from "../Header";
import SubHeader from "../SubHeader";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { InputNumber } from "antd";
import { Slider, Menu, Checkbox } from "antd";
import "./index.css";

const { SubMenu } = Menu;

const Products = () => {
  const [selectedOption, setSelectedOption] = useState([]);

  const handleOptionChange = (checkedValues) => {
    setSelectedOption(checkedValues);
  };

  const options = [
    "Apple",
    "Samsung",
    "Huawei",
    "Tecno",
    "Oppo",
    "OnePlus",
    "Motorola",
    "Nokia",
    "Realme",
    "Xiaomi",


  ];

  const [inputValue1, setInputValue1] = useState(40);
  const [inputValue2, setInputValue2] = useState(30);

  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div>
      <Header />
      <SubHeader />

      <div className="w-full h-[5rem] bg-white ">
        <div className="max-w-[1250px]   h-full mx-auto">
          <div className="hidden mx-5 lg:flex flex-1 pt-7 text-[#a4a4a4] text-sm font-light">
            <p className="flex items-center justify-center mr-10">
              Home <LiaGreaterThanSolid className="ml-10" />
            </p>
            <p className="flex items-center justify-center mr-10">
              Catalog <LiaGreaterThanSolid className="ml-10" />
            </p>
            <p className="text-[#a4a4a4] font-light">Smartphones</p>
          </div>

          {/* for the small screen view */}
          <div className="md:hidden  flex justify-center  ">
            <button className="h-[50px] w-[150px] border-2">Filters</button>

            <button className="border-2 h-[50px] w-[150px]">By Rating</button>
          </div>
        </div>

        <div className=" h-[80rem] w-full bg-white">
          <div className="lg:max-w-[1250px] h-full  bg-red-200 p-5 mx-auto">
            {/* time to flex the shid */}
            <div className="h-full flex ">
              <div >
                <Menu
                  onClick={handleClick}
                  style={{ width: 256 }}
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  mode="inline"
                >
                  <SubMenu key="sub1" title="Price">
                    <Menu.Divider />

                    <div className="flex justify-between py-3 items-center text-[11px] text-[#b5b5b5]">
                      <p>From</p>
                      <p>To</p>
                    </div>
                    <div className="flex justify-between">
                      <InputNumber
                        size="large"
                        min={0}
                        max={5000}
                        className="rounded-[4px] w-[108px] h-[35px]"
                        value={inputValue1}
                        onChange={setInputValue1}
                      />
                      <p className=" text-[#a4a4a4] pt-4 ">__</p>
                      <InputNumber
                        size="large"
                        min={0}
                        max={5000}
                        className="rounded-[4px] w-[108px] h-[35px]"
                        value={inputValue2}
                        onChange={setInputValue2}
                      />
                    </div>
                    <Slider
                      max={5000}
                      range={{
                        draggableTrack: true,
                      }}
                      value={[inputValue1, inputValue2]}
                      onChange={(values) => {
                        setInputValue1(values[0]);
                        setInputValue2(values[1]);
                      }}
                      className="mb-7"
                    />
                  </SubMenu>

                  <SubMenu key="sub2" title="Brand">
                    <Menu.Divider />
                    <input
                      placeholder="Search"
                      className="bg-[#f5f5f5] h-[30px] w-[220px] pl-3 rounded-md my-3  border-none outline-none"
                    />
                    <Checkbox.Group
                      onChange={handleOptionChange}
                      value={selectedOption}
                      style={{ display: "flex", flexDirection: "column", paddingBottom: "30px" }}
                    >
                      {options.map((option) => (
                        <Checkbox key={option} value={option}
                        style={{ marginBottom: "5px", paddingBottom: "2px", fontWeight: "200" }}

                        >
                          {option}

                        </Checkbox>
                      ))}
                    </Checkbox.Group>
                  </SubMenu>
                  <Menu.Divider />
                  <SubMenu key="sub4" title="Navigation Three">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                  <SubMenu key="grp" title="Group">
                    <Menu.Item key="13">Option 13</Menu.Item>
                    <Menu.Item key="14">Option 14</Menu.Item>
                  </SubMenu>
                </Menu>
              </div>
            </div>
            {/* the shid ends here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

// import React, { useState } from "react";
// import Header from "../Header";
// import SubHeader from "../SubHeader";
// import { LiaGreaterThanSolid } from "react-icons/lia";
// import { InputNumber } from "antd";
// import { Slider, Menu } from "antd";
// import "./index.css";

// const Products = () => {

//   const [inputValue1, setInputValue1] = useState(40);
//   const [inputValue2, setInputValue2] = useState(30);
//   return (
//     <div>
//       <Header />
//       <SubHeader />

//       <div className="w-full h-[5rem]  ">
//         <div className="max-w-[1250px]  h-full mx-auto">
//           <div className="hidden mx-5 lg:flex flex-1 pt-7 text-[#a4a4a4] text-sm font-light">
//             <p className="flex items-center justify-center mr-10">
//               Home <LiaGreaterThanSolid className="ml-10" />
//             </p>
//             <p className="flex items-center justify-center mr-10">
//               Catalog <LiaGreaterThanSolid className="ml-10" />
//             </p>
//             <p className="text-[#a4a4a4] font-light">Smartphones</p>
//           </div>

//           {/* for the small screen view */}
//           <div className="md:hidden bg-red-300 flex justify-center  ">
//             <button className="h-[50px] w-[150px] border-2">Filters</button>

//             <button className="border-2 h-[50px] w-[150px]">By Rating</button>
//           </div>
//         </div>

//         <div className=" h-[80rem] w-full">
//           <div className="lg:max-w-[1250px] h-full  bg-green-300 pt-5 mx-auto">
//             {/* time to flex the shid */}
//             <div className="h-full flex ">
//               <div className="w-[230px] h-full mr-20 bg-white ml-5">
//                 <div className="flex justify-between items-center text-[14px] pb-3 border-b border-[#b5b5b5]">
//                   <p className="">Price</p>
//                   <p>
//                     <LiaGreaterThanSolid />
//                   </p>
//                 </div>

//                 <div className="flex justify-between py-3 items-center text-[12px] text-[#b5b5b5]">
//                   <p>From</p>
//                   <p>To</p>
//                 </div>

//                 <div className="flex justify-between">
//                   <InputNumber
//                     size="large"
//                     min={0}
//                     max={5000}
//                     className="rounded-[4px]"
//                     value={inputValue1}
//                     onChange={setInputValue1}
//                   />
//                   <p className="pt-2 text-[#a4a4a4] ">-</p>
//                   <InputNumber
//                     size="large"
//                     min={0}
//                     max={5000}
//                     className="rounded-[4px]"
//                     value={inputValue2}
//                     onChange={setInputValue2}
//                   />
//                 </div>
//                 <Slider
//                   max={5000}
//                   range={{
//                     draggableTrack: true,
//                   }}
//                   value={[inputValue1, inputValue2]}
//                   onChange={(values) => {
//                     setInputValue1(values[0]);
//                     setInputValue2(values[1]);
//                   }}
//                 />
//               </div>
//               {/* this is where the div for the whole thing ends */}

//               <div>
//                 <p>winfred</p>

//               </div>
//             </div>
//             {/* the shid ends here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
