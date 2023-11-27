import React from "react";
import BannerImage from "../assets/img/Banner.png";
import { FaPencil } from "react-icons/fa6";

const MyWish = () => {
  return (
    <>
      <div className="w-full">
        <div className="ml-4">
          <h1 className="text-[22px] text-black font-medium">My Wishlist</h1>
          <br />

          <div className="w-[100%] flex flex-wrap">
            {[1,2,3,4,5,6,7,8,9].map((index) => (
              <div
                key={index}
                className={`wish_wrapper  w-[280px]  ml-3 mb-2 border-[1.5px] rounded-[4px] ${
                  index > 3 ? "mt-2" : ""
                }`}
              >
                <div className="image">
                  <img
                    src={BannerImage}
                    alt={`Banner ${index}`}
                    className="w-[260px] h-[260px] ml-2"
                  />
                </div>
                <div className="detail pl-3 pr-3">
                  <div className="tilte flex justify-between ">
                    <h1 className=" text-black font-medium">
                      Custom packaging boxes ₹17,582.00
                    </h1>
                    <FaPencil className="text-[#ADADAD] mt-1 cursor-pointer" />
                  </div>
                  <div className="detail w-[182px] mt-1">
                    <p className="text-[14px] text-[#949494]">
                      Size (in Inches): 1.18 (L) x 1.18 (W) x 3.31 (H) Paper:
                      SBS C1S 300 GSM Printing: One Side Full Color CMYK (4+0)
                      Foiling: No Foiling Laminations & Coatings: One Side Matt
                      Lamination Embossing: No
                    </p>
                  </div>
                  <div className="price flex justify-between mt-8 mb-3 items-center">
                  <div className="dynamic_price">
                    <p className="text-[#AFC40C] font-medium">₹17,582.00</p>
                  </div>
                  <div className="flex justify-around items-center mr-5">
                    <p className="cursor-pointer text-black font-medium mr-2">-</p>
                    <p className="cursor-pointer bg-custom-btn pt-1 pl-1 pr-1 pb-1 text-white rounded-[5.5px] text-[12px]">250</p>
                    <p className="cursor-pointer text-black font-medium ml-2">+</p>
                  </div>

                  </div>
                  <div className="buttons">
                    <button className="w-[265px] pt-2 pb-2 text-[15px] mt-4 rounded-[4px] bg-custom-btn text-white">Move to cart</button>
                    <button className="w-[265px] pt-2 pb-2 text-[15px] rounded-[4px] border-[2px] border-blue mt-3 mb-3 bg-white text-custom-text">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWish;
