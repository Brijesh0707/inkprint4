import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Button from '../assets/img/slider_button.png'

import StockPackaging from './StockPackaging';

const StockPackage = () => {
  return (
   <>
   <div className='w-[98vw] mt-[20vh]'>
   <div className='flex justify-between mb-10 items-center pl-10 pr-3'>
    <h1 className='text-[2vw] text-black font-medium md:text-[4vw]'>Stock packaging</h1>
    <div className='flex controller items-center absolute mt-5 right-5 md:hidden'>
    <img src={Button} className='swiper_button_prev3 w-[20px] h-[14px] rotate-180 mt-[2px] cursor-pointer'/>
    <img src={Button} className='swiper_button_next3 w-[20px] h-[14px] ml-5 cursor-pointer'/>
  </div>
   </div>
   <div className='ml-5'>
   <Swiper
            slidesPerView={4.2}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper_button_next3",
              prevEl: ".swiper_button_prev3",
            }}
            
            pagination={false}
            keyboard={true}
            mousewheel={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            breakpoints={{
              320:{
                slidesPerView:1.75
              },
              375:{
                slidesPerView:1.75
              },
              425:{
                slidesPerView:1.75
              },
      500: {
        slidesPerView: 1.75,
      },
      768: {
        slidesPerView: 2.5, 
      },
      1024: {
        slidesPerView: 4.3,
      },
    }}
            className="mySwiper"
            >
            <SwiperSlide><StockPackaging image="http://res.cloudinary.com/brijesh070707/image/upload/v1701505014/y0pebs8ympohyselvxcs.png" text="boxes" /></SwiperSlide>
            <SwiperSlide><StockPackaging image="http://res.cloudinary.com/brijesh070707/image/upload/v1701504563/edrnzuw8xpxtaiq0yfv8.png" text="boxes" /></SwiperSlide>
            <SwiperSlide><StockPackaging image="http://res.cloudinary.com/brijesh070707/image/upload/v1701505014/y0pebs8ympohyselvxcs.png" text="boxes" /></SwiperSlide>
            <SwiperSlide><StockPackaging image="http://res.cloudinary.com/brijesh070707/image/upload/v1701504563/edrnzuw8xpxtaiq0yfv8.png" text="boxes" /></SwiperSlide>
            <SwiperSlide><StockPackaging image="http://res.cloudinary.com/brijesh070707/image/upload/v1701505014/y0pebs8ympohyselvxcs.png" text="boxes" /></SwiperSlide>
            <SwiperSlide><StockPackaging image="http://res.cloudinary.com/brijesh070707/image/upload/v1701504563/edrnzuw8xpxtaiq0yfv8.png" text="boxes" /></SwiperSlide>



            </Swiper>
   </div>
   </div>

   </>
  )
}

export default StockPackage