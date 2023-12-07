import React, { useEffect, useRef, useState } from 'react';
import Line from '../assets/img/line2.png';
import partner from '../assets/img/partner1.png';
import partner2 from '../assets/img/partner2.png';
import partner3 from '../assets/img/partner3.png';
import partner4 from '../assets/img/partner4.png';
import partner5 from '../assets/img/partner5.png';
import partner6 from '../assets/img/partner6.png';
import Arrow from '../assets/img/arrow.png';
import ProductCard from '../components/ProductCard';
import Sproduct from '../assets/img/s_product.png';
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import BannerImage from '../assets/img/Banner.png';
import ArrowWhite from '../assets/img/WhiteArrow.png'
import Company from '../assets/img/companys.png'
import { Link } from 'react-router-dom';
import FindYourFit from '../components/FindYourFit';
import HappyClients from '../components/HappyClients';
import { FiArrowUpRight } from "react-icons/fi";
import ProductListCard from '../components/ProductListCard';
import Button from '../assets/img/slider_button.png'
import WhyInkPrintNew from '../components/WhyInkPrintNew';
import Loading from '../components/Loading';
import StockPackage from '../components/StockPackage';

const Home = () => {
  // const [showPrevButton, setShowPrevButton] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleSlideChange = (index) => {
  //   setCurrentIndex(index);
  //   setShowPrevButton(index >= 0);
  // };

  // const handleNext = () => {
  //   const totalSlides = document.querySelectorAll('.swiper-slide').length;

  //   if (currentIndex <= totalSlides - 1) {
  //     setCurrentIndex(currentIndex + 1);
  //     setShowPrevButton(true);
  //   } else {
  //     setCurrentIndex(totalSlides - 1);
  //   }
  // };

  // const handlePrev = () => {
  //   if (currentIndex >= 0) {
  //     setCurrentIndex(currentIndex - 1);
  //     setShowPrevButton(currentIndex - 1 >= 0);
  //   }
  // }

 return (
    <>
      <div className='hero1 w-[100%] mt-[228px] md:mt-0'>
        <div className='flex justify-between mx-[60px] md:mx-[12px] md:block md:flex-col md:items-center mt-[76px]'>
          <div className='hidden md:block w-full'>
            <img src={BannerImage} className='min-w-full'/>
          </div>
          <div className='hero-text w-[50%] md:w-full'>
            <h1 className='text-[36px] font-medium leading-[52px] md:leading-[24px] text-custom-text-p ll:text-xl md:mt-[24px] md:text-[16px]'>
              Elevate Your Brand with InkPrint: Unleash the Power of 
              <span className='text-custom-text-hero'> Exceptional Packaging Solutions and Design Expertise.</span>
            </h1>
            <p className='text-custom-text-darkGrey font-light text-[22px] pt-10 ll:pt-3 md:pt-[6px] md:text-[14px] md:leading-[17px]'>Your Brand, Our Box: Crafting Packaging Magic with<br /> InkPrint.</p>

            <div className='explore_btn mt-[50px] md:mt-[12px]'>
              <button className='w-[200px] md:w-[109px] h-[40px] md:h-[35px] bg-custom-btn flex items-center justify-center text-white text-[20px] md:text-[12px] rounded-[4px] hover:bg-custom-btn-dark transition duration-300'>Explore more <FiArrowUpRight className='ml-2 md:ml-1' /></button>
            </div>
            <div className='trusted_company mt-10 md:mt-[12px]'>
              <p className='text-[16px] md:text-[11px] text-custom-text-darkGrey'>Trusted by Companies like:</p>
              <img src={Company} className='w-[400px] mt-1 ml-[-2px] md:h-[13px] md:w-[231px]'/>
            </div>
          </div>
          <div className='banner_image w-[50%]'>
            <img src={BannerImage} className='md:hidden' />
          </div>
        </div>
      </div>

      {/* this is product slider  */}
      <div className='w-[100%] bg-[#F6F8FA] mt-10 mb-10 md:px-[12px] pb-[1px]'>
        <div className='Packaging_printing_text ml-[55px] text-[27px] font-medium mt-5 md:ml-0 md:text-[14px]'>
          <h1 className='pt-5'>Packaging printing</h1>
        </div>
        <div className='slider_container w-[100%]'>
        <div className='slider_controller flex flex-col justify-end'>
  <div className='flex controller items-center absolute mt-5 right-5 md:mt-0 md:hidden'>
    <img src={Button}    className={`swiper_button_prev w-[20px] h-[14px] rotate-180 mt-[2px] cursor-pointer md:h-[8px] md:w-[14px] `}/>
    <img src={Button}    className='swiper_button_next w-[20px] h-[14px] ml-5 cursor-pointer md:h-[8px] md:w-[14px]'/>
  </div>
</div>
        <div className='main_slider w-[95%] ml-10 mt-8 mb-8 md:ml-0'>
          <Swiper
            slidesPerView={window.innerWidth<=500?1.75:4.3}
            spaceBetween={24}
            navigation={{
            nextEl: ".swiper_button_next",
            prevEl: ".swiper_button_prev",
          }}
            pagination={false}
            keyboard={true}
            mousewheel={true}
            // onSlideChange={(swiper) => handleSlideChange(swiper.realIndex)}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            breakpoints={{
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
              <SwiperSlide><ProductListCard image="http://res.cloudinary.com/brijesh070707/image/upload/v1700224232/pkkulp8e9luvhelvjobo.png" text="Boxes" /></SwiperSlide>
              <SwiperSlide><ProductListCard image="http://res.cloudinary.com/brijesh070707/image/upload/v1700224208/e5acdprfryio2ynqk3yx.png" text="Bags" /></SwiperSlide>
              <SwiperSlide><ProductListCard image="http://res.cloudinary.com/brijesh070707/image/upload/v1700225129/mdua9tpvzggo5h2vd4bp.png" text="Hang Tags" /></SwiperSlide>
              <SwiperSlide><ProductListCard image="http://res.cloudinary.com/brijesh070707/image/upload/v1700225155/zufhtuxxih2yukhahbve.png" text="Bopp Tapes" /></SwiperSlide>
              <SwiperSlide><ProductListCard image="http://res.cloudinary.com/brijesh070707/image/upload/v1700224232/pkkulp8e9luvhelvjobo.png" text="Boxes" /></SwiperSlide>
              <SwiperSlide><ProductListCard image="http://res.cloudinary.com/brijesh070707/image/upload/v1700224232/pkkulp8e9luvhelvjobo.png" text="Boxes" /></SwiperSlide>
            </Swiper>

        </div>

        </div>

      </div>

      <StockPackage />

      {/* this is why inkprint section */}
      <WhyInkPrintNew/>
      
      <div className='partners mx-[60px] md:mx-[12px] mt-[100px] md:mt-[24px]'>
        <div className='ourpartner flex items-center'>
          <h1 className='text-[#000000] text-[32px] md:text-[14px]'>Our Partners</h1>
          
        </div>
        <div className='partners-images flex justify-between items-center mt-[40px] md:mt-[12px]'>
          <img src={partner} alt='ficci image' className='partner_image h-[90px] w-[120px] md:h-[45px] md:w-[50px] object-contain' />
          <img src={partner2} alt='honda image' className='partner_image h-[80px] w-[100px]  md:h-[45px] md:w-[50px] object-contain' />
          <img src={partner3} alt='ixigo image' className='partner_image h-[90px] w-[120px] md:h-[45px] md:w-[50px] mt-3 object-contain' />
          <img src={partner4} alt='live mint image' className='partner_image h-[90px] w-[120px] md:h-[45px] md:w-[50px]  mt-3 object-contain' />
          <img src={partner5} alt='harvard business review image' className='partner_image h-[90px] w-[120px]  md:h-[45px] md:w-[50px] mt-3 object-contain' />
          <img src={partner6} alt='oxford image' className='partner_image h-[70px] w-[90px]  md:h-[45px] md:w-[50px]  object-contain' />

        </div>
      </div>

      <FindYourFit />
      <HappyClients />
      
     
    </>
  );
}

export default Home;
