import React from 'react';
import Line from '../assets/img/line2.png';
import Border from '../assets/img/happy_border.png';
import Profile from '../assets/img/happy_img.png';
import btnnext from '../assets/img/btnNext.png';
import btnprev from '../assets/img/btnPrev.png';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";




const HappyClients = () => {
  return (
    <div className='mt-[100px] mx-[60px]'>
      <div className='find_your_fit flex items-center'>
        <h1 className='text-[32px]'>Happy Clients</h1>
        <hr className='border-t-2 border-green ml-2 w-[583px]'/>
      </div>

      <div className='relative mt-[40px]'>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
         pagination={false}
          navigation={{
            nextEl: '.swiper_button_next',
            prevEl: '.swiper_button_prev',
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className='mySwiper'
        >
         
          
         <SwiperSlide className='pt-[40px]'>
            <div className='relative flex flex-col items-center h-[244px] px-[31px]'>
              <img src={Border} alt="client box's border" className='absolute top-0 left-0 w-full h-full z-[-1]'/>
              <img src={Profile} alt="client's profile picture" className='w-[70px] h-[70px] translate-y-[-35px]'/>
              <p className='text-[16px]'>At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.</p>
              <p className='text-custom-text-darkGrey mt-[34px]'>Saumya Garg</p>
            </div>
          </SwiperSlide>
         <SwiperSlide className='pt-[40px]'>
            <div className='relative flex flex-col items-center h-[244px] px-[31px]'>
              <img src={Border} alt="client box's border" className='absolute top-0 left-0 w-full h-full z-[-1]'/>
              <img src={Profile} alt="client's profile picture" className='w-[70px] h-[70px] translate-y-[-35px]'/>
              <p className='text-[16px]'>At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.</p>
              <p className='text-custom-text-darkGrey mt-[34px]'>Saumya Garg</p>
            </div>
          </SwiperSlide>
         <SwiperSlide className='pt-[40px]'>
            <div className='relative flex flex-col items-center h-[244px] px-[31px]'>
              <img src={Border} alt="client box's border" className='absolute top-0 left-0 w-full h-full z-[-1]'/>
              <img src={Profile} alt="client's profile picture" className='w-[70px] h-[70px] translate-y-[-35px]'/>
              <p className='text-[16px]'>At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.</p>
              <p className='text-custom-text-darkGrey mt-[34px]'>Saumya Garg</p>
            </div>
          </SwiperSlide>
         <SwiperSlide className='pt-[40px]'>
            <div className='relative flex flex-col items-center h-[244px] px-[31px]'>
              <img src={Border} alt="client box's border" className='absolute top-0 left-0 w-full h-full z-[-1]'/>
              <img src={Profile} alt="client's profile picture" className='w-[70px] h-[70px] translate-y-[-35px]'/>
              <p className='text-[16px]'>At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.</p>
              <p className='text-custom-text-darkGrey mt-[34px]'>Saumya Garg</p>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlides as needed */}
        </Swiper>
        <img src={btnprev} className="absolute w-8 z-10 swiper_button_prev bottom-[115px]  left-1 cursor-pointer " />
        <img src={btnnext} className="w-8 ml-10  swiper_button_next bottom-[115px] right-1  absolute z-10 cursor-pointer" />
      </div>
    </div>
  );
};

export default HappyClients;
