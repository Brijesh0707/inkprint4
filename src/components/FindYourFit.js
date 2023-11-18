import React from "react";
import Line from "../assets/img/line2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../assets/img/fit_card.png";

import Button from '../assets/img/slider_button.png'

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const FindYourFit = () => {
  return (
    <>
      <div className="mx-[60px] md:mx-[12px] mt-[100px] md:mt-[24px] relative">
        <div className="find_your_fit flex items-center">
          <h1 className="text-[32px] md:text-[14px]">Find Your Fit</h1>
        </div>
        <div className='flex controller items-center absolute mt-5 right-5'>
    <img src={Button} className='swiper_button_prev w-[20px] h-[14px] rotate-180 mt-[2px] cursor-pointer'/>
    <img src={Button} className='swiper_button_next w-[20px] h-[14px] ml-5 cursor-pointer'/>
  </div>
        <div className="mt-[70px] md:mt-[12px]">
          <Swiper
            slidesPerView={window.innerWidth<500 ? 1.2: 2.5}
            spaceBetween={0}
            pagination={false}
            navigation={{
                nextEl: '.swiper_button_next',
                prevEl: '.swiper_button_prev',
                clickable: true,
              }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="main_contain relative">
                <img src={Card} className="relative w-[360px] h-[500px]" alt="Gift Box" />
                <div className="absolute left-[35px] top-[30px] md:left-[10px] md:top-[10px] z-10 flex flex-col">
                  <h1 className="text-[18px] md:text-[14px] text-custom-text-p mb-[14px] md:mb-[8px]">Customize Gift Boxes</h1>
                  <h2 className="text-[14px] md:text-[12px] text-custom-text-darkGrey text-left mb-[25px] md:mb-[24px]">Starting from ₹1234</h2>
                  <button className="bg-custom-btn text-[12px] md:text-[12px] text-white rounded-[4px] font-medium px-[20px] py-[9px] md:p-[6px] w-fit hover:bg-custom-btn-dark transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_contain relative">
                <img src={Card} className="relative w-[360px] h-[500px]" alt="Gift Box" />
                <div className="absolute left-[35px] top-[30px] md:left-[10px] md:top-[10px] z-10 flex flex-col">
                  <h1 className="text-[18px] md:text-[14px] text-custom-text-p mb-[14px] md:mb-[8px]">Customize Gift Boxes</h1>
                  <h2 className="text-[14px] md:text-[12px] text-custom-text-darkGrey text-left mb-[25px] md:mb-[24px]">Starting from ₹1234</h2>
                  <button className="bg-custom-btn text-[12px] md:text-[12px] text-white rounded-[4px] font-medium px-[20px] py-[9px] md:p-[6px] w-fit hover:bg-custom-btn-dark transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_contain relative">
                <img src={Card} className="relative w-[360px] h-[500px]" alt="Gift Box" />
                <div className="absolute left-[35px] top-[30px] md:left-[10px] md:top-[10px] z-10 flex flex-col">
                  <h1 className="text-[18px] md:text-[14px] text-custom-text-p mb-[14px] md:mb-[8px]">Customize Gift Boxes</h1>
                  <h2 className="text-[14px] md:text-[12px] text-custom-text-darkGrey text-left mb-[25px] md:mb-[24px]">Starting from ₹1234</h2>
                  <button className="bg-custom-btn text-[12px] md:text-[12px] text-white rounded-[4px] font-medium px-[20px] py-[9px] md:p-[6px] w-fit hover:bg-custom-btn-dark transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_contain relative">
                <img src={Card} className="relative w-[360px] h-[500px]" alt="Gift Box" />
                <div className="absolute left-[35px] top-[30px] md:left-[10px] md:top-[10px] z-10 flex flex-col">
                  <h1 className="text-[18px] md:text-[14px] text-custom-text-p mb-[14px] md:mb-[8px]">Customize Gift Boxes</h1>
                  <h2 className="text-[14px] md:text-[12px] text-custom-text-darkGrey text-left mb-[25px] md:mb-[24px]">Starting from ₹1234</h2>
                  <button className="bg-custom-btn text-[12px] md:text-[12px] text-white rounded-[4px] font-medium px-[20px] py-[9px] md:p-[6px] w-fit hover:bg-custom-btn-dark transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
         
          </Swiper>
        
        </div>
      </div>
      
    </>
  );
};

export default FindYourFit;
