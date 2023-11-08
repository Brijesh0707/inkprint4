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
    <div className='w-[90%] mt-10 mb-10 ml-10'>
      <div className='find_your_fit flex'>
        <h1 className='text-2xl pt-[46px] pl-10'>Happy Clients</h1>
        <img
          src={Line}
          className='w-[400px] h-1 mt-[65px] ml-2 md:w-150 mb-10'
          alt='line'
        />
      </div>

      <div className='w-90 ml-5 relative mt-8'>
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
          className='mySwiper'
        >
         
          
         <SwiperSlide>
            <div className='happy_wrapper  pt-10 pb-10'>
              <div className='main relative'>
                <img
                  src={Profile}
                  className='w-[48px]  absolute left-[145px] top-[-20px] h-[47px] z-10 '
                  alt='Profile'
                />
                <div className='happy_clients'>
                  <img
                    src={Border}
                    className='w-400 h-[185px] relative'
                    alt='Border'
                  />
                  <div className='happy_text absolute z-10 w-[300px] h-[180px] left-2 h-180 top-1'>
                    <p className='text-center text-[13px] pt-9 pl-5'>
                      At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life. At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.
                    </p>
                   
                    <p className='ml-[30px] person_name mt-2 text-[6D6E70]'>Saumya Garg</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide><SwiperSlide>
            <div className='happy_wrapper  pt-10 pb-10'>
              <div className='main relative'>
                <img
                  src={Profile}
                  className='w-[48px]  absolute left-[145px] top-[-20px] h-[47px] z-10 '
                  alt='Profile'
                />
                <div className='happy_clients'>
                  <img
                    src={Border}
                    className='w-400 h-[185px] relative'
                    alt='Border'
                  />
                  <div className='happy_text absolute z-10 w-[300px] h-[180px] left-2 h-180 top-1'>
                    <p className='text-center text-[13px] pt-9 pl-5'>
                      At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life. At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.
                    </p>
                   
                    <p className='ml-[30px] person_name mt-2 text-[6D6E70]'>Saumya Garg</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide><SwiperSlide>
            <div className='happy_wrapper  pt-10 pb-10'>
              <div className='main relative'>
                <img
                  src={Profile}
                  className='w-[48px]  absolute left-[145px] top-[-20px] h-[47px] z-10 '
                  alt='Profile'
                />
                <div className='happy_clients'>
                  <img
                    src={Border}
                    className='w-400 h-[185px] relative'
                    alt='Border'
                  />
                  <div className='happy_text absolute z-10 w-[300px] h-[180px] left-2 h-180 top-1'>
                    <p className='text-center text-[13px] pt-9 pl-5'>
                      At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life. At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.
                    </p>
                   
                    <p className='ml-[30px] person_name mt-2 text-[6D6E70]'>Saumya Garg</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide><SwiperSlide>
            <div className='happy_wrapper  pt-10 pb-10'>
              <div className='main relative'>
                <img
                  src={Profile}
                  className='w-[48px]  absolute left-[145px] top-[-20px] h-[47px] z-10 '
                  alt='Profile'
                />
                <div className='happy_clients'>
                  <img
                    src={Border}
                    className='w-400 h-[185px] relative'
                    alt='Border'
                  />
                  <div className='happy_text absolute z-10 w-[300px] h-[180px] left-2 h-180 top-1'>
                    <p className='text-center text-[13px] pt-9 pl-5'>
                      At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life. At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.
                    </p>
                   
                    <p className='ml-[30px] person_name mt-2 text-[6D6E70]'>Saumya Garg</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide><SwiperSlide>
            <div className='happy_wrapper  pt-10 pb-10'>
              <div className='main relative'>
                <img
                  src={Profile}
                  className='w-[48px]  absolute left-[145px] top-[-20px] h-[47px] z-10 '
                  alt='Profile'
                />
                <div className='happy_clients'>
                  <img
                    src={Border}
                    className='w-400 h-[185px] relative'
                    alt='Border'
                  />
                  <div className='happy_text absolute z-10 w-[300px] h-[180px] left-2 h-180 top-1'>
                    <p className='text-center text-[13px] pt-9 pl-5'>
                      At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life. At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life.
                    </p>
                   
                    <p className='ml-[30px] person_name mt-2 text-[6D6E70]'>Saumya Garg</p>
                  </div>
                </div>
              </div>
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
