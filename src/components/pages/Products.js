import React, { useState } from "react";
import Header from "../Header";
import SubHeader from "../SubHeader";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Slider, Menu, Checkbox, InputNumber, Select, Space } from "antd";
import "./index.css";
import Arrivals2 from "../Arrivals2";
import {Link} from "react-router-dom"
import Footer from "../Footer";


const { SubMenu } = Menu;

const Products = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [selectedOption, setSelectedOption] = useState([]);

  const handleOptionChange = (checkedValues) => {
    setSelectedOption(checkedValues);
  };

  const phoneoptions = [
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

  const memoryOptions = [
    "16GB",
    "32GB",
    "64GB",
    "128GB",
    "512GB",
    "1TB",
    "2TB",
  ];

  const options = ["IP65 rating", "IP66 rating", "IP67 rating"];

  const Screenoptions = ["AMOLED", "OLED", "LCD", "Retina Display"];

  const Batteryoptions = ["5000MaH", "6000MaH"];

  const Diagonaloptions = ["13 inch", "14 inch"];

  const [inputValue1, setInputValue1] = useState(40);
  const [inputValue2, setInputValue2] = useState(30);

  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div>
      <Header />
      <SubHeader />

      <div className="w-full  bg-white ">
        <div className="max-w-[1250px] pb-7 h-full mx-auto">
          <div className="hidden  mx-5 lg:flex flex-1 pt-7  text-[#a4a4a4] text-sm font-light">
            <Link to={"/"}><p className="flex items-center justify-center mr-10">
              Home <LiaGreaterThanSolid className="ml-10" />
            </p></Link>
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

        <div className="w-full">
          <div className="lg:max-w-[1250px] h-full   p-5 mx-auto">
            {/* time to flex the shid */}
            <div className="h-full flex flex-col lg:flex-row">
              <div>
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
                  <Menu.Divider />

                  <SubMenu key="sub2" title="Brand">
                    <Menu.Divider />
                    <input
                      placeholder="Search"
                      className="bg-[#f5f5f5] h-[30px] w-[220px] pl-3 rounded-md my-3  border-none outline-none"
                    />
                    <Checkbox.Group
                      onChange={handleOptionChange}
                      value={selectedOption}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingBottom: "30px",
                      }}
                    >
                      {phoneoptions.map((option) => (
                        <Checkbox
                          key={option}
                          value={option}
                          style={{
                            marginBottom: "5px",
                            paddingBottom: "2px",
                            fontWeight: "200",
                          }}
                        >
                          {option}
                        </Checkbox>
                      ))}
                    </Checkbox.Group>
                  </SubMenu>
                  <Menu.Divider />
                  <SubMenu key="sub4" title="Built-in memory">
                    <Menu.Divider />
                    <input
                      placeholder="Search"
                      className="bg-[#f5f5f5] h-[30px] w-[220px] pl-3 rounded-md my-3  border-none outline-none"
                    />
                    <Checkbox.Group
                      onChange={handleOptionChange}
                      value={selectedOption}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingBottom: "30px",
                      }}
                    >
                      {memoryOptions.map((option) => (
                        <Checkbox
                          key={option}
                          value={option}
                          style={{
                            marginBottom: "5px",
                            paddingBottom: "2px",
                            fontWeight: "200",
                          }}
                        >
                          {option}
                        </Checkbox>
                      ))}
                    </Checkbox.Group>
                  </SubMenu>
                  <Menu.Divider />
                  <SubMenu key="sub5" title="Protective Class">
                    <Menu.Divider />
                    <input
                      placeholder="Search"
                      className="bg-[#f5f5f5] h-[30px] w-[220px] pl-3 rounded-md my-3  border-none outline-none"
                    />
                    <Checkbox.Group
                      onChange={handleOptionChange}
                      value={selectedOption}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingBottom: "30px",
                      }}
                    >
                      {options.map((option) => (
                        <Checkbox
                          key={option}
                          value={option}
                          style={{
                            marginBottom: "5px",
                            paddingBottom: "2px",
                            fontWeight: "200",
                          }}
                        >
                          {option}
                        </Checkbox>
                      ))}
                    </Checkbox.Group>
                  </SubMenu>
                  <Menu.Divider />
                  <SubMenu key="sub6" title="Screen Diagonal">
                    <Menu.Divider />
                    <input
                      placeholder="Search"
                      className="bg-[#f5f5f5] h-[30px] w-[220px] pl-3 rounded-md my-3  border-none outline-none"
                    />
                    <Checkbox.Group
                      onChange={handleOptionChange}
                      value={selectedOption}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingBottom: "30px",
                      }}
                    >
                      {Diagonaloptions.map((option) => (
                        <Checkbox
                          key={option}
                          value={option}
                          style={{
                            marginBottom: "5px",
                            paddingBottom: "2px",
                            fontWeight: "200",
                          }}
                        >
                          {option}
                        </Checkbox>
                      ))}
                    </Checkbox.Group>
                  </SubMenu>
                  <Menu.Divider />
                  <SubMenu key="sub7" title="Screen Type">
                    <Menu.Divider />
                    <input
                      placeholder="Search"
                      className="bg-[#f5f5f5] h-[30px] w-[220px] pl-3 rounded-md my-3  border-none outline-none"
                    />
                    <Checkbox.Group
                      onChange={handleOptionChange}
                      value={selectedOption}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingBottom: "30px",
                      }}
                    >
                      {Screenoptions.map((option) => (
                        <Checkbox
                          key={option}
                          value={option}
                          style={{
                            marginBottom: "5px",
                            paddingBottom: "2px",
                            fontWeight: "200",
                          }}
                        >
                          {option}
                        </Checkbox>
                      ))}
                    </Checkbox.Group>
                  </SubMenu>
                  <Menu.Divider />
                  <SubMenu key="sub8" title="Battery Capacity">
                    <Menu.Divider />
                    <input
                      placeholder="Search"
                      className="bg-[#f5f5f5] h-[30px] w-[220px] pl-3 rounded-md my-3  border-none outline-none"
                    />
                    <Checkbox.Group
                      onChange={handleOptionChange}
                      value={selectedOption}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingBottom: "30px",
                      }}
                    >
                      {Batteryoptions.map((option) => (
                        <Checkbox
                          key={option}
                          value={option}
                          style={{
                            marginBottom: "5px",
                            paddingBottom: "2px",
                            fontWeight: "200",
                          }}
                        >
                          {option}
                        </Checkbox>
                      ))}
                    </Checkbox.Group>
                  </SubMenu>
                </Menu>
              </div>
              {/* second div will start here */}
              <div className="w-full  ml-[40px] ">
                <div className="flex justify-between  mt-2">
                  <p>
                    <span className="text-[#b5b5b5] font-light text-[13px] ">
                      Selected Products:
                    </span>
                    85
                  </p>
                  <Space wrap>
                    
                    <Select
                      defaultValue="By rating"
                      style={{
                        width: 200,
                        height: 33,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "by price",
                          label: "By price",
                        }, 
                        {
                          value: "by rating",
                          label: "By rating",
                        },

                     
                       
                      ]}
                    />
                  </Space>
                </div>
                <div>
                  <Arrivals2 />
                </div>
              </div>
            </div>
            {/* the shid ends here */}
          </div>
          <Footer />
        </div>
        
      </div>
      
    </div>
  );
};

export default Products;


