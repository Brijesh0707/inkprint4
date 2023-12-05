import React from "react";
import Line from "../assets/img/line2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../assets/img/fit_card.png";
import Card2 from '../assets/img/card2.png';
import Card3 from '../assets/img/card3.png';

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
        <div className='flex controller items-center absolute mt-5 right-5 md:mt-[-20px]'>
    <img src={Button} className='swiper_button_prev w-[20px] h-[14px] rotate-180 mt-[2px] cursor-pointer md:h-[8px] md:w-[14px]'/>
    <img src={Button} className='swiper_button_next w-[20px] h-[14px] ml-5 cursor-pointer md:h-[8px] md:w-[14px]'/>
  </div>
        <div className="mt-[70px] md:mt-[12px]">
          <Swiper
            slidesPerView={window.innerWidth<500 ? 1.2: 2.9}
            spaceBetween={40}
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
                <img src={Card} className="relative w-[440px] h-[600px] md:h-[322px] md:w-[70vw] object-cover" alt="Gift Box" />
                <div className="absolute left-[35px] top-[30px] md:left-[10px] md:top-[10px] z-10 flex flex-col">
                  <h1 className="text-[24px] md:text-[14px] text-[#2F2F2F] mb-[14px] md:mb-[8px]">Customize Gift Boxes</h1>
                  <h2 className="text-[20px] md:text-[12px] text-[#2F2F2F] text-left mb-[25px] md:mb-[24px]">Starting from ₹1234</h2>
                  <button className="bg-custom-btn md:text-[12px] text-white rounded-[4px] font-medium px-[20px] py-[9px] md:p-[6px] w-fit hover:bg-custom-btn-dark transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_contain relative">
                <img src={Card2} className="relative w-[440px] h-[600px] md:h-[322px] md:w-[70vw] object-cover" alt="Gift Box" />
                <div className="absolute left-[35px] top-[30px] md:left-[10px] md:top-[10px] z-10 flex flex-col">
                  <h1 className="text-[24px] md:text-[14px] text-[#2F2F2F] mb-[14px] md:mb-[8px]">Customize Gift Boxes</h1>
                  <h2 className="text-[20px] md:text-[12px] text-[#2F2F2F] text-left mb-[25px] md:mb-[24px]">Starting from ₹1234</h2>
                  <button className="bg-custom-btn md:text-[12px] text-white rounded-[4px] font-medium px-[20px] py-[9px] md:p-[6px] w-fit hover:bg-custom-btn-dark transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_contain relative">
                <img src={Card3} className="relative w-[440px] h-[600px] md:h-[322px] md:w-[70vw] object-cover" alt="Gift Box" />
                <div className="absolute left-[35px] top-[30px] md:left-[10px] md:top-[10px] z-10 flex flex-col">
                  <h1 className="text-[24px] md:text-[14px] text-[#2F2F2F] mb-[14px] md:mb-[8px]">Customize Gift Boxes</h1>
                  <h2 className="text-[20px] md:text-[12px] text-[#2F2F2F] text-left mb-[25px] md:mb-[24px]">Starting from ₹1234</h2>
                  <button className="bg-custom-btn md:text-[12px] text-white rounded-[4px] font-medium px-[20px] py-[9px] md:p-[6px] w-fit hover:bg-custom-btn-dark transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_contain relative">
                <img src={Card} className="relative w-[360px] h-[500px] md:h-[322px] md:w-[70vw]" alt="Gift Box" />
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
