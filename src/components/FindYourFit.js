import React from "react";
import Line from "../assets/img/line2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../assets/img/fit_card.png";

import btnnext from '../assets/img/btnNext.png'
import btnprev from '../assets/img/btnPrev.png'
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
          <hr className="border-t-2 border-green w-[583px] md:w-[120px] ml-2"/>
        </div>
        <div className="mt-[40px] md:mt-[12px]">
          <Swiper
            slidesPerView={window.innerWidth<500 ? 1.2: 2.5}
            spaceBetween={30}
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
                <img src={Card} className="relative" alt="Gift Box" />
                <div className="absolute left-[40px] top-[50px] md:left-[10px] md:top-[10px] z-10 flex flex-col">
                  <h1 className="text-[24px] md:text-[14px] text-custom-text-p mb-[16px] md:mb-[8px]">Customize Gift Boxes</h1>
                  <h2 className="text-[20px] md:text-[12px] text-custom-text-darkGrey text-left mb-[36px] md:mb-[24px]">Starting from ₹1234</h2>
                  <button className="bg-custom-btn text-[16px] md:text-[12px] text-white rounded-[4px] font-medium px-[24px] py-[10px] md:p-[6px] w-fit hover:bg-custom-btn-dark transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_contain relative">
                <img src={Card} className="relative" alt="Gift Box" />
                <div className="absolute left-[40px] top-[50px] md:left-[10px] md:top-[10px] z-10 flex flex-col">
                  <h1 className="text-[24px] md:text-[14px] text-custom-text-p mb-[16px] md:mb-[8px]">Customize Gift Boxes</h1>
                  <h2 className="text-[20px] md:text-[12px] text-custom-text-darkGrey text-left mb-[36px] md:mb-[24px]">Starting from ₹1234</h2>
                  <button className="bg-custom-btn text-[16px] md:text-[12px] text-white rounded-[4px] font-medium px-[24px] py-[10px] md:p-[6px] w-fit hover:bg-custom-btn-dark transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_contain relative">
                <img src={Card} className="relative" alt="Gift Box" />
                <div className="absolute left-[40px] top-[50px] md:left-[10px] md:top-[10px] z-10 flex flex-col">
                  <h1 className="text-[24px] md:text-[14px] text-custom-text-p mb-[16px] md:mb-[8px]">Customize Gift Boxes</h1>
                  <h2 className="text-[20px] md:text-[12px] text-custom-text-darkGrey text-left mb-[36px] md:mb-[24px]">Starting from ₹1234</h2>
                  <button className="bg-custom-btn text-[16px] md:text-[12px] text-white rounded-[4px] font-medium px-[24px] py-[10px] md:p-[6px] w-fit hover:bg-custom-btn-dark transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_contain relative">
                <img src={Card} className="relative" alt="Gift Box" />
                <div className="absolute left-[40px] top-[50px] md:left-[10px] md:top-[10px] z-10 flex flex-col">
                  <h1 className="text-[24px] md:text-[14px] text-custom-text-p mb-[16px] md:mb-[8px]">Customize Gift Boxes</h1>
                  <h2 className="text-[20px] md:text-[12px] text-custom-text-darkGrey text-left mb-[36px] md:mb-[24px]">Starting from ₹1234</h2>
                  <button className="bg-custom-btn text-[16px] md:text-[12px] text-white rounded-[4px] font-medium px-[24px] py-[10px] md:p-[6px] w-fit hover:bg-custom-btn-dark transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
         
          </Swiper>
        
        </div>
        <img src={btnprev} className="absolute top-[50%] left-0 w-9 z-10 swiper_button_prev cursor-pointer"/>
        <img src={btnnext} className="absolute top-[50%] right-0 w-9 swiper_button_next z-10 cursor-pointer"/>
      </div>
      
    </>
  );
};

export default FindYourFit;
