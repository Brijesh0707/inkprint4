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

      {/* <div className="carousel-container flex justify-center items-center mt-10">
        <button
          className="carousel-button prev w-[50px] h-[50px] rounded-[50%] text-3xl text-[#1B9FD3] border border-[#1B9FD3] pb-1"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ←
        </button>
        <div className="carousel flex ease-in-out">
          {data.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <div className='w-[300px] ml-2 relative' key={currentIndex + index}>
              <img src={Sproduct} alt='product' />
              <div className='pdetail flex justify-between relative mt-[-50px] pb-5 bg-white bg-opacity-90 '>
                <div>
                  <h1 className='text-lg text-[#000000] font-semibold pt-3 pl-3'>{item.title}</h1>
                  <h6 className='text-[#ADADAD] text-sm pl-3'>starting from {item.price}₹</h6>
                </div>
                <img src={Arrow} className='w-5 h-5 mt-7 mr-2' alt='arrow' />
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-button next w-[50px] h-[50px] rounded-[50%] text-3xl text-[#1B9FD3] border border-[#1B9FD3] pb-1"
          onClick={handleNext}
          disabled={currentIndex === data.length - 3}
        >
          →
        </button>
      </div> */}

      {/* <div className='products-wrapper bg-custom-bg-product p-[60px] md:p-[12px] md:bg-white'>
        <div className='flex items-center md:mt-[24px]'>
          <h1 className='text-[32px] md:text-[14px] font-medium mr-1'>Packaging Printing</h1>
          <hr className='border-t-2 border-green w-[583px] md:w-[120px]' />
        </div>

        <div className='grid grid-cols-3 md:grid-cols-1 gap-10 mt-[40px] ll:grid-cols-1'>
          <ProductCard title="Box packaging" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136642/gjuclnnqcrbeooz2emxx.png" />
          <ProductCard title="Carry bags" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698822355/prebctmwwxvg0nxjiaiy.png" />
          <ProductCard title="Packaging tapes" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136545/bxoc4uhlztsqgirzgkhf.png" />
          <ProductCard title="Tissue paper" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698822448/wvveiljfvh3xlv5jniio.png" />
          <ProductCard title="Box packaging" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136879/aguyadvayl6fs6utpjz9.png" />
          <ProductCard title="Wrapping paper" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698822520/ws1kfrtpssgvpgbcw8kd.png" />
          <ProductCard title="Header cards" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698822605/qgkd4u8sxxzmfjaukzv0.png" />
          <ProductCard title="Product labels" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698137104/rmdmdxm8ybjxjssjeghf.png" />
          <ProductCard title="Hang Tags" image='http://res.cloudinary.com/brijesh070707/image/upload/v1698822673/ruy9m8rvyxettntxoet2.png' />
        </div>
      </div> */}
    

      {/* <div className='w-[100vh] hidden md:hidden'>
        <div className='flex justify-center items-center ml-[250px]'>
          <ProductCard title="Box packaging" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136642/gjuclnnqcrbeooz2emxx.png" />

          <ProductCard title="Carry bags" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698822355/prebctmwwxvg0nxjiaiy.png" />
        </div>
        <div className='flex justify-center items-center ml-[250px]'>
          <ProductCard title="Packaging tapes" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136545/bxoc4uhlztsqgirzgkhf.png" />
          <ProductCard title="Tissue paper" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698822448/wvveiljfvh3xlv5jniio.png" />
        </div>
        <div className='flex justify-center items-center ml-[250px]'>
          <ProductCard title="Box packaging" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136879/aguyadvayl6fs6utpjz9.png" />
          <ProductCard title="Wrapping paper" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698822520/ws1kfrtpssgvpgbcw8kd.png" />
        </div>
        <div className='flex justify-center items-center ml-[250px]'>
          <ProductCard title="Header cards" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698822605/qgkd4u8sxxzmfjaukzv0.png" />
          <ProductCard title="Product labels" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698137104/rmdmdxm8ybjxjssjeghf.png" />
        </div>
        <div className='flex justify-center items-center ml-[250px]'>
          <ProductCard title="Hang Tags" image='http://res.cloudinary.com/brijesh070707/image/upload/v1698822673/ruy9m8rvyxettntxoet2.png' />
        </div>
      </div> */}

      {/* this slider for mobile */}

      {/* <div className='hidden sm:block'>
        <div>
          <h1 className='pt-10 pl-10 text-3xl text-custom-text-p'>Packaging Printing</h1>
          <img src={Line} className='w-[420px] h-[2px] mt-[63px] ml-2 md:w-[150px]' alt='line' />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={false}
          pagination={false}
          modules={[Navigation, Mousewheel, Keyboard, Pagination]}
          className="mySwiper"

        />
        <SwiperSlide><ProductCard title="Box packaging" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136642/gjuclnnqcrbeooz2emxx.png" /></SwiperSlide>
        <SwiperSlide> <ProductCard title="Carry bags" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698822355/prebctmwwxvg0nxjiaiy.png" /></SwiperSlide>
        <SwiperSlide> <ProductCard title="Packaging tapes" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136545/bxoc4uhlztsqgirzgkhf.png" /></SwiperSlide>
        <SwiperSlide> <ProductCard title="Tissue paper" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698822448/wvveiljfvh3xlv5jniio.png" /></SwiperSlide>
        <SwiperSlide>    <ProductCard title="Box packaging" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136879/aguyadvayl6fs6utpjz9.png" /></SwiperSlide>
        <SwiperSlide> <ProductCard title="Wrapping paper" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698822520/ws1kfrtpssgvpgbcw8kd.png" /></SwiperSlide>
        <SwiperSlide> <ProductCard title="Header cards" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698822605/qgkd4u8sxxzmfjaukzv0.png" /></SwiperSlide>
        <SwiperSlide>  <ProductCard title="Product labels" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698137104/rmdmdxm8ybjxjssjeghf.png" /></SwiperSlide>
        <SwiperSlide>  <ProductCard title="Hang Tags" image='http://res.cloudinary.com/brijesh070707/image/upload/v1698822673/ruy9m8rvyxettntxoet2.png' /></SwiperSlide>
        <Swiper />
      </div> */}

      {/* this is product slider  */}
      <div className='w-[100%] bg-[#F6F8FA] mt-10 mb-10 md:px-[12px] pb-[1px]'>
        <div className='Packaging_printing_text ml-[55px] text-[27px] font-medium mt-5 md:ml-0 md:text-[14px]'>
          <h1 className='pt-5'>Packaging printing</h1>
        </div>
        <div className='slider_container w-[100%]'>
        <div className='slider_controller flex flex-col justify-end'>
  <div className='flex controller items-center absolute mt-5 right-5 md:mt-0'>
    <img src={Button} className='swiper_button_prev w-[20px] h-[14px] rotate-180 mt-[2px] cursor-pointer md:h-[8px] md:w-[14px]'/>
    <img src={Button} className='swiper_button_next w-[20px] h-[14px] ml-5 cursor-pointer md:h-[8px] md:w-[14px]'/>
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
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
      

      {/* <div className='aboutus-hero bg-[#ECDFD8] px-[60px] md:px-[12px] md:py-[12px] py-[37px] flex justify-center items-center'>
        <div className='about-wrapp '>
          <div className='about-wrapper  top-[50px] md:top-[50px] left-[180px] lg:left-[150px] md:right-[500px] rounded-[25px] p-[32px]  md:border-none md:p-0 md:shadow-none'>
            <h2 className='text-custom-text-p font-medium text-[32px] md:text-[14px] mb-[27px] md:mb-[12px]'>About Us</h2>
            <p className='text-[24px] md:text-[12px] text-custom-text-p font-light leading-8 md:leading-4'>At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life. With a rich history of delivering excellence in digital printing, offset printing, and a wide range of marketing solutions, we have established ourselves as a trusted name in Delhi-NCR. Our commitment to quality, innovation, and customer satisfaction sets us apart. Whether you need eye-catching business marketing materials, immaculate offset prints, or attention-grabbing outdoor advertising, we have the expertise and state-of-the-art technology to make it happen. We pride ourselves on being the go-to printing solution provider in the region, offering versatile printing options, reliability, and cost-effective services. Let us be the bridge between your vision and reality. Choose InkPrint for all your printing needs and experience the difference.</p>
            <div className='viewmore flex cursor-pointer mt-[67px] md:mt-[12px] justify-end'>
              <Link to="/aboutus" className='flex'>
                <button className='text-[#787878] px-[24px] py-[10px] flex items-center md:text-[12px]'>View more<FiArrowUpRight className='ml-2 text-[24px] md:text-[12px]' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className='partners mx-[60px] md:mx-[12px] mt-[100px] md:mt-[24px]'>
        <div className='ourpartner flex items-center'>
          <h1 className='text-[#000000] text-[32px] md:text-[14px]'>Our Partners</h1>
          
        </div>
        <div className='partners-images flex justify-between items-center mt-[40px] md:mt-[12px]'>
          <img src={partner} alt='ficci image' className='partner_image h-[90px] w-[120px] md:h-[45px] md:w-[60px] object-contain' />
          <img src={partner2} alt='honda image' className='partner_image h-[80px] w-[100px]  md:h-[45px] md:w-[60px] object-contain' />
          <img src={partner3} alt='ixigo image' className='partner_image h-[90px] w-[120px] md:h-[45px] md:w-[60px] mt-3 object-contain' />
          <img src={partner4} alt='live mint image' className='partner_image h-[90px] w-[120px] md:h-[45px] md:w-[60px]  mt-3 object-contain' />
          <img src={partner5} alt='harvard business review image' className='partner_image h-[90px] w-[120px]  md:h-[45px] md:w-[60px] mt-3 object-contain' />
          <img src={partner6} alt='oxford image' className='partner_image h-[70px] w-[90px]  md:h-[45px] md:w-[60px]  object-contain' />

        </div>
      </div>

      <FindYourFit />
      <HappyClients />
      
     
    </>
  );
}

export default Home;
