import React from "react";

const PopularProducts = () => {
  const Popular = ({
    Name,
    text,
    borderColour,
    TextColour,
    Colour,
    imageUrl,
  }) => {
    return (
      <div className="flex items-center my-3 lg:my-0 justify-evenly mx-auto ">
        <div
          style={{ backgroundColor: Colour }}
          className="h-[500px] text-left "
        >
          <div className="flex items-center justify-center">
            <img src={imageUrl} alt="iphone" className="h-[250px] w-[230px] " />
          </div>

          <div className="flex flex-col ml-5 mt-10">
            <p
              style={{ color: TextColour }}
              className="text-[30px] font-extralight"
            >
              {Name}
            </p>
            <p className="text-[#A5A3A6] text-sm mr-5">{text}</p>
            {
              <button
                style={{
                  color: TextColour,
                  border: `1px solid ${borderColour}`,
                }}
                className="w-[120px] h-[45px] text-sm  text-white border-[1px] mt-5 rounded-md"
              >
                Shop Now
              </button>
            }
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mx-auto">
      <Popular
        Colour="#fff"
        imageUrl="./images/product1.png"
        Name={"Popular Products"}
        text={
          "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        }
        TextColour="black"
        borderColour="black"
      />
      <Popular
        Colour="#f9f9f9"
        imageUrl="./images/product2.png"
        Name={"Ipad Pro"}
        text={
          "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        }
        TextColour="black"
        borderColour="black"
      />
      <Popular
        Colour="#eaeaea"
        imageUrl="./images/product3.png"
        Name={"Samsung Galaxy"}
        text={
          "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        }
        TextColour="black"
        borderColour="black"
      />
      <Popular
        Colour="#2c2c2c"
        imageUrl="./images/product4.png"
        Name={"Macbook Pro"}
        text={
          "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        }
        TextColour="white"
      />
    </div>
  );
};

export default PopularProducts;
