import React from 'react';
import Line from '../assets/img/line2.png';
import Border from '../assets/img/happy_border.png';
import Profile from '../assets/img/happy_img.png';
import btnnext from '../assets/img/btnNext.png';
import btnprev from '../assets/img/btnPrev.png';
import { Swiper, SwiperSlide } from "swiper/react";
import Button from '../assets/img/slider_button.png'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";




const HappyClients = () => {
  return (
    <div className='mt-[100px] md:mt-[24px] mx-[60px] md:mx-[12px] md:mb-[40px] md:hidden'>
      <div className='find_your_fit flex items-center'>
        <h1 className='text-[32px] md:text-[14px]'>Happy Clients</h1>
      </div>
      <div className='flex controller items-center absolute mt-5 right-[50px] md:mt-[-20px]'>
    <img src={Button} className='swiper_button_prev_1 w-[20px] h-[14px] rotate-180 mt-[2px] cursor-pointer md:h-[8px] md:w-[14px]'/>
    <img src={Button} className='swiper_button_next_1 w-[20px] h-[14px] ml-5 cursor-pointer md:h-[8px] md:w-[14px]'/>
  </div>

      <div className='relative mt-[70px] mb-[70px] md:mt-[12px] md:mt-[32px] '>
        <Swiper
          slidesPerView={window.innerWidth<500 ? 1.2: 2.7}
          spaceBetween={30}
         pagination={false}
          navigation={{
            nextEl: '.swiper_button_next_1',
            prevEl: '.swiper_button_prev_1',
            clickable: true,
          }}
        
            keyboard={true}
            mousewheel={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
          
         <SwiperSlide className='pt-[40px]'>
            <div className='relative flex flex-col pl-5 pr-5 items-center h-[205px] md:h-[213px] px-[10px] border-2 border-[#00A6DB] rounded-[15px]'>
              <img src={Profile} alt="client's profile picture" className='w-[70px] cursor-pointer h-[70px] md:w-[40px] md:h-[40px] translate-y-[-35px] md:translate-y-[-20px] px-[2px] bg-white'/>
              <p className='text-[14px] md:text-[12px] cursor-pointer mt-[-15px]'>At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.</p>
              <p className='text-[#2F2F2F] font-semibold cursor-pointer mt-[20px] md:text-[12px] md:mt-[20px] text-[13px]'>Saumya Garg</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='pt-[40px]'>
            <div className='relative flex flex-col pl-5 pr-5 items-center h-[205px] md:h-[213px] px-[10px] border-2 border-[#00A6DB] rounded-[15px]'>
              <img src={Profile} alt="client's profile picture" className='w-[70px] cursor-pointer h-[70px] md:w-[40px] md:h-[40px] translate-y-[-35px] md:translate-y-[-20px] px-[2px] bg-white'/>
              <p className='text-[14px] md:text-[12px] cursor-pointer mt-[-15px]'>At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.</p>
              <p className='text-[#2F2F2F] font-semibold cursor-pointer mt-[20px] md:text-[12px] md:mt-[20px] text-[13px]'>Saumya Garg</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='pt-[40px]'>
            <div className='relative flex flex-col pl-5 pr-5 items-center h-[205px] md:h-[213px] px-[10px] border-2 border-[#00A6DB] rounded-[15px]'>
              <img src={Profile} alt="client's profile picture" className='w-[70px] cursor-pointer h-[70px] md:w-[40px] md:h-[40px] translate-y-[-35px] md:translate-y-[-20px] px-[2px] bg-white'/>
              <p className='text-[14px] md:text-[12px] cursor-pointer mt-[-15px]'>At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.</p>
              <p className='text-[#2F2F2F] font-semibold cursor-pointer mt-[20px] md:text-[12px] md:mt-[20px] text-[13px]'>Saumya Garg</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='pt-[40px]'>
            <div className='relative flex flex-col pl-5 pr-5 items-center h-[205px] md:h-[213px] px-[10px] border-2 border-[#00A6DB] rounded-[15px]'>
              <img src={Profile} alt="client's profile picture" className='w-[70px] cursor-pointer h-[70px] md:w-[40px] md:h-[40px] translate-y-[-35px] md:translate-y-[-20px] px-[2px] bg-white'/>
              <p className='text-[14px] md:text-[12px] cursor-pointer mt-[-15px]'>At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.</p>
              <p className='text-[#2F2F2F] font-semibold cursor-pointer mt-[20px] md:text-[12px] md:mt-[20px] text-[13px]'>Saumya Garg</p>
            </div>
          </SwiperSlide>
      
        </Swiper>
      </div>
    </div>
  );
};

export default HappyClients;
