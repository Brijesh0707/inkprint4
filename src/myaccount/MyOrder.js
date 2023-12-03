import React, { useState } from "react";
import Order from "../assets/img/Order_bg.png";
import Rating from "@mui/material/Rating";
import Share from "../assets/img/share_btn.png";
import Down from "../assets/img/DownArrow.png";
import Up from "../assets/img/UpArrow.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductListCard from "../components/ProductListCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Button from '../assets/img/slider_button.png'
import SliderProduct from "./SliderProduct";


const MyOrder = () => {
  const [filer,setFiler]=useState(" All orders")
  const [filter2,setFilter2]=useState(false);
  const [accordions, setAccordions] = useState(
    Array(3).fill(false)
  );

  const [ratings, setRatings] = useState(
    Array(3).fill(null)
  );

  const handleToggle = (index) => {
    const newAccordions = [...accordions];
    newAccordions[index] = !newAccordions[index];
    setAccordions(newAccordions);
  };

  const handleRatingChange = (index, newValue) => {
    const newRatings = [...ratings];
    newRatings[index] = newValue;
    setRatings(newRatings);

    toast.success(`${newValue} star is added successfully`, {
      position: 'top-center',
      autoClose: 3000,
    });
  };

  const handledropdown = ()=>{
    setFilter2(!filter2);
  }
  const handleFilterOption = (value)=>{
    setFiler(value);
    setFilter2(!filter2);


  }

  return (
    <>
      <div className="w-full md:flex justify-center items-center">
        <div className="ml-4">
        <div className="flex justify-between items-center relative">
        <h1 className="text-[22px] text-black font-medium">My Orders</h1>
        <button className="w-[256px] md:w-[25vw] smm:w-[20pvw] sl:w-[50vw] pl-2 text-[15px] mr-2 flex justify-between items-center rounded-[4px] border-[2px] border-blue mt-3 mb-3 bg-white text-custom-text" onClick={handledropdown}>
          {filer} <img src={filter2 ? Up : Down} className="w-3 h-2 mr-2" />
          </button>
          {filter2 &&

          
          <div className="w-[250px] h-[130px] rounded-[2px] border-[1.5px] bg-white right-[1vw] top-[7vh] border-black absolute">
            <ul className="ml-2">
            <li className="mt-1 mb-1 cursor-pointer" onClick={()=>handleFilterOption("All orders")}>All orders</li>
              <li className="mt-1 mb-1 cursor-pointer" onClick={()=>handleFilterOption("10 days")}>10 days</li>
              <li className="mt-1 mb-1 cursor-pointer" onClick={()=>handleFilterOption("20 days")}>20 days</li>
              <li className="mt-1 mb-1 cursor-pointer" onClick={()=>handleFilterOption("30 days")}>30 days</li>
            </ul>
          </div>
          }
        </div>
          <br />

          <div className="w-[100%] flex flex-wrap">
            {[1, 2,3].map((index) => (
              <div
                key={index}
                className={`wish_wrapper  w-[280px]  ml-3 mb-2 border-[1.5px] rounded-[4px] ${
                  index > 3 ? "mt-2" : ""
                }`}
              >
                <div className="image">
                  <img
                    src={Order}
                    alt={`Banner ${index}`}
                    className="w-[260px] h-[260px] ml-2"
                  />
                </div>
                <div className="detail pl-3 pr-3">
                  <div className="tilte mt-2  justify-between ">
                    <h1 className=" text-black font-medium">Hang Tags</h1>
                    <h1 className="text-black mt-2 font-medium">
                      Delivered <span className="text-[#A7C539]">Today</span>
                    </h1>
                  </div>
                  <div className="detail w-[178px] mt-3">
                    <p className="text-[14px] font-medium">
                      Package was handed to:
                    </p>
                    <p>Name</p>
                    <p>Address</p>
                  </div>
                  <div className="rating mt-3">
                    <p className="text-black font-medium text-[15px]">
                      Rate Our Product
                    </p>
                    <Rating
                      name={`rating-${index}`}
                      value={ratings[index]}
                      onChange={(event, newValue) => handleRatingChange(index, newValue)}
                    />
                  </div>
                  <div className="share mt-2">
                    <div className="ml-[-28px]">
                      <button className="w-[120px] h-[39px] text-[#00A6DB] font-medium flex justify-center items-center">
                        Share{" "}
                        <img
                          src={Share}
                          className="w-3 h-3 ml-2"
                          alt="Share Icon"
                        />
                      </button>
                    </div>
                    <div
                      className="view_more flex border-b-2 items-center cursor-pointer w-[160px] mb-[10px] text-custom-text border-[#00A6DB]"
                      onClick={() => handleToggle(index)}
                    >
                      <p>View order details</p>
                      <img src={accordions[index] ? Up : Down} className="w-3 h-2 ml-2" />
                    </div>
                    {accordions[index] && (
                      <>
                        <div className="view_more detail w-[240px]">
                          <p className="text-black font-medium">
                            Accessory Tags For Packaging ₹800.00
                          </p>
                          <p className="text-[14px] text-[#949494] pt-2">
                            Size (in Inches): 1.5 * 3.5 (in inches) Quantity: 50
                            pieces Shape: Rectangular/Square Cut Printing: One
                            Side Full Color CMYK (4+0) Paper: Glode fine paper
                            270 GSM Punch size: 1/8 inch Hot Foil Stamping: No
                            Foiling Digital Embossed Foiling: No Foiling Spot
                            UV: No UV Eyelets: No Eyelets Strings or Loops: Not
                            provided
                          </p>
                        </div>
                      </>
                    )}
                    <div className="buttons">
                      <button className="w-[256px] pt-2 pb-2 text-[15px] mt-4 rounded-[4px] bg-custom-btn text-white">
                        Buy Again
                      </button>
                      <button className="w-[256px] pt-2 pb-2 text-[15px] rounded-[4px] border-[2px] border-blue mt-3 mb-3 bg-white text-custom-text">
                        Need Help?
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
    {/* <div className="w-[80vw] relative mt-5 overflow-hidden">
  <div className='flex controller justify-between items-center mt-10'>
  <div>
    <p className="text-black font-medium text-[20px] pl-10">You may also like</p>
  </div>
    <div className="flex items-center mr-[2vw]">
    <img src={Button} className='swiper_button_prev w-[20px] h-[14px] rotate-180 mt-[2px] cursor-pointer'/>
    <img src={Button} className='swiper_button_next w-[20px] h-[14px] ml-5 cursor-pointer'/>
    </div>
  </div>
  <Swiper
            slidesPerView={3.2}
            spaceBetween={10}
            navigation={{
              nextEl: ".swiper_button_next",
              prevEl: ".swiper_button_prev",
            }}
            pagination={false}
            keyboard={true}
            mousewheel={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper mt-10"
            >
            <SwiperSlide><SliderProduct image="http://res.cloudinary.com/brijesh070707/image/upload/v1700224232/pkkulp8e9luvhelvjobo.png" text="product_name" /></SwiperSlide>
              
           
            </Swiper>
            </div> */}



      
      </div>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
    </>
  );
};

export default MyOrder;


{/* <Swiper
            slidesPerView={3}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper_button_next",
              prevEl: ".swiper_button_prev",
            }}
            pagination={false}
            keyboard={true}
            mousewheel={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            >
              <SwiperSlide><ProductListCard image="http://res.cloudinary.com/brijesh070707/image/upload/v1700224232/pkkulp8e9luvhelvjobo.png" text="Boxes" /></SwiperSlide>
              <SwiperSlide><ProductListCard image="http://res.cloudinary.com/brijesh070707/image/upload/v1700224208/e5acdprfryio2ynqk3yx.png" text="Bags" /></SwiperSlide>
              <SwiperSlide><ProductListCard image="http://res.cloudinary.com/brijesh070707/image/upload/v1700225129/mdua9tpvzggo5h2vd4bp.png" text="Hang Tags" /></SwiperSlide>
              <SwiperSlide><ProductListCard image="http://res.cloudinary.com/brijesh070707/image/upload/v1700225155/zufhtuxxih2yukhahbve.png" text="Bopp Tapes" /></SwiperSlide>
              <SwiperSlide><ProductListCard image="http://res.cloudinary.com/brijesh070707/image/upload/v1700224232/pkkulp8e9luvhelvjobo.png" text="Boxes" /></SwiperSlide>
              <SwiperSlide><ProductListCard image="http://res.cloudinary.com/brijesh070707/image/upload/v1700224232/pkkulp8e9luvhelvjobo.png" text="Boxes" /></SwiperSlide>
            </Swiper> */}