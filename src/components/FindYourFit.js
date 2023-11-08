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
      <div className="w-[100%]">
        <div className="find_your_fit flex">
          <h1 className="text-2xl pt-[46px] pl-10">Find Your Fit</h1>
          <img
            src={Line}
            className="w-[420px] h-[2px] mt-[63px] ml-2 md:w-[150px] mb-10"
            alt="line"
          />
        </div>
        <div className="w-[90%] ml-[60px]">
          <Swiper
            slidesPerView={3}
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
                <div className="absolute left-10 top-5 z-10">
                  <h1 className="text-lg text-[#444444]">Customize Gift Boxes</h1>
                  <h2 className="text-[14px] pr-[42px] text-[#6D6E70]">Starting from ₹1234</h2>
                  <button className="w-[80px] h-[30px] bg-[#00A6DB] text-[12px] mt-5 mr-[88px] text-white rounded-[4px] font-medium">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_contain relative">
                <img src={Card} className="relative" alt="Gift Box" />
                <div className="absolute left-10 top-5 z-10">
                  <h1 className="text-lg text-[#444444]">Customize Gift Boxes</h1>
                  <h2 className="text-[14px] pr-[42px] text-[#6D6E70]">Starting from ₹1234</h2>
                  <button className="w-[80px] h-[30px] bg-[#00A6DB] text-[12px] mt-5 mr-[88px] text-white rounded-[4px] font-medium">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_contain relative">
                <img src={Card} className="relative" alt="Gift Box" />
                <div className="absolute left-10 top-5 z-10">
                  <h1 className="text-lg text-[#444444]">Customize Gift Boxes</h1>
                  <h2 className="text-[14px] pr-[42px] text-[#6D6E70]">Starting from ₹1234</h2>
                  <button className="w-[80px] h-[30px] bg-[#00A6DB] text-[12px] mt-5 mr-[88px] text-white rounded-[4px] font-medium">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_contain relative">
                <img src={Card} className="relative" alt="Gift Box" />
                <div className="absolute left-10 top-5 z-10">
                  <h1 className="text-lg text-[#444444]">Customize Gift Boxes</h1>
                  <h2 className="text-[14px] pr-[42px] text-[#6D6E70]">Starting from ₹1234</h2>
                  <button className="w-[80px] h-[30px] bg-[#00A6DB] text-[12px] mt-5 mr-[88px] text-white rounded-[4px] font-medium">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
         
          </Swiper>
        
        </div>
        <img src={btnprev} className="absolute w-9 z-10 swiper_button_prev top-[4000px] left-2 cursor-pointer " />
        <img src={btnnext} className="w-9 ml-10  swiper_button_next top-[3998px] right-2 absolute z-10 cursor-pointer" />
      </div>
      
    </>
  );
};

export default FindYourFit;
