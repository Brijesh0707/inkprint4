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
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import BannerImage from '../assets/img/Banner.png';
import ArrowWhite from '../assets/img/WhiteArrow.png'
import Company from '../assets/img/companys.png'
import { Link } from 'react-router-dom';
import WhyInkprint from '../components/WhyInkprint';
import FindYourFit from '../components/FindYourFit';
import HappyClients from '../components/HappyClients';

const Home = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [{
    title: 'Packaging for gifts 1',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698140625/rs1tjj6rftr8huph0cwf.png'
  }, {
    title: 'Packaging for gifts 2',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698138171/s3olgyjlddqdmglkqka0.png'
  }, {
    title: 'Packaging for gifts 3',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698140625/rs1tjj6rftr8huph0cwf.png'
  }, {
    title: 'Packaging for gifts 4',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698138171/s3olgyjlddqdmglkqka0.png'
  }, {
    title: 'Packaging for gifts 5',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698140625/rs1tjj6rftr8huph0cwf.png'
  }, {
    title: 'Packaging for gifts 6',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698138171/s3olgyjlddqdmglkqka0.png'
  }, {
    title: 'Packaging for gifts 7',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698140625/rs1tjj6rftr8huph0cwf.png'
  }, {
    title: 'Packaging for gifts 8',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698138171/s3olgyjlddqdmglkqka0.png'
  }];



 





  return (
    <>
      <div className='hero1 w-[100%]'>
      <div className='flex justify-between md:block '>
      <div className='banner_image w-[60vh] hidden md:block md:w-[100vh]  sm:w-[30vh] '>
        <img src={BannerImage} className='ml-[100px] md:ml-[200px]  lg:ml-[150px] w-[500px] h-[500px] lg:w-[500px] lg:h-[400px] ll:ml-[1px] ll:w-[80%]'/>
      </div>
        <div className='hero-text pl-10 pt-6 pb-5 ml-1 mt-4 w-[50%] md:w-[70vh] lg:w-[100vh] ll:w-[90%] ll:pl-2'>
          <h1 className='text-4xl text-[#000000] md:text-3xl ll:text-xl'>Elevate Your Brand with InkPrint: Unleash the Power of <span className='text-custom-text-hero'>Exceptional Packaging Solutions and Design Expertise.</span></h1>
       
        
          <p className='text-[#6D6E70] text-xl pt-10  ll:pt-3'>Your Brand, Our Box: Crafting Packaging Magic with<br/> InkPrint.</p>

          <div className='explore_btn mt-[50px]'>
            <button className='w-[200px] h-[40px] bg-custom-btn flex text-white font-medium text-center pt-[6px] pl-[50px] rounded-[4px]'>Explore more <img src={ArrowWhite} className='w-[10px] h-[10px] ml-3 mt-2' /></button>
          </div>
          <div className='trusted_company mt-10'>
            <p className='text-[16px] text-custom-text-darkGrey'>Trusted by Companies like:</p>
            <img src={Company} className='w-[400px] mt-1 ml-[-2px]' />
          </div>
      </div>
      <div className='banner_image w-[50%]'>
        <img src={BannerImage} className='ml-[100px] md:hidden lg:ml-[60px] w-[500px] h-[500px] lg:w-[400px] lg:h-[400px] '/>
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

<div className='products-wrapper bg-custm-bg-product mt-10 mb-10'>
<div className='flex'>
<h1 className='pt-10 pl-10 text-3xl text-custom-text-p'>Packaging Printing</h1>
  <img src={Line} className='w-[420px] h-[2px] mt-[63px] ml-2 md:w-[150px]' alt='line' />
</div>

  <div className='grid grid-cols-3 ml-10 md:ml-10 md:grid-cols-1 lg:grid-cols-2 sm:grid-col-1 gap-10 mt-10 ll:grid-cols-1'>
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
</div>
<WhyInkprint/>

      <div className='w-[100vh] hidden md:hidden sm:hidden'>
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
      </div>

      {/* this slider for mobile */}

      <div className='hidden sm:block'>
      <div>
      <h1 className='pt-10 pl-10 text-3xl text-custom-text-p'>Packaging Printing</h1>
        <img src={Line} className='w-[420px] h-[2px] mt-[63px] ml-2 md:w-[150px]' alt='line' />
       </div>
        <Swiper
         slidesPerView={1}
         spaceBetween={30}
         navigation={false}
         pagination={false}
         modules={[Navigation,Mousewheel,Keyboard,Pagination]}
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
         <Swiper/>
      </div>

      <div className='aboutus-hero w-[100%] h-[500px] relative bg-[#E7E1C3] '>
        <div className='about-wrapp '>
          <div className='about-wrapper w-[70%]  border-solid border-4 border-[#FFFFFF] top-[50px] md:top-[50px] left-[180px] lg:left-[150px] md:right-[500px] relative rounded-[25px] '>
            <h2 className='text-[#344054] font-semibold text-xl pt-3 pl-3 lg:pt-10 md:pt-5'>About Us</h2>
            <p className='pt-3 pl-3 pb-3 pr-3 text-[15px] md:text-[13px] text-[#344054]'>At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life. With a rich history of delivering excellence in digital printing, offset printing, and a wide range of marketing solutions, we have established ourselves as a trusted name in Delhi-NCR. Our commitment to quality, innovation, and customer satisfaction sets us apart. Whether you need eye-catching business marketing materials, immaculate offset prints, or attention-grabbing outdoor advertising, we have the expertise and state-of-the-art technology to make it happen. We pride ourselves on being the go-to printing solution provider in the region, offering versatile printing options, reliability, and cost-effective services. Let us be the bridge between your vision and reality. Choose InkPrint for all your printing needs and experience the difference.</p>
            <div className='viewmore md:ml-10 flex ml-[700px] lg:ml-[550px] mb-[50px] mt-[30px]  cursor-pointer'>
             <Link to="/aboutus" className='flex'>
             <button className='text-[#787878] md:ml-[-150px]'>View more</button><img src={Arrow} className='w-4 h-4 mt-1  ml-2 md:ml-[-150px] md:bg-red-600 md:hidden' alt='arrow' />
             </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='partners ml-10 mt-[50px] mb-[50px]'>
        <div className='ourpartner flex'>
          <h1 className='text-[#000000] text-2xl font-semibold'>Our Partners</h1>
          <img src={Line} className='w-[420px] h-1 mt-5 ml-2 md:w-[150px]' alt='line' />
        </div>
        <div className='partners-images flex justify-evenly mt-10 mr-[52px]'>

          <img src={partner} alt='ficci image' className='h-[90px] w-[120px] lg:w-[80px] lg:h-[70px]' />
          <img src={partner2} alt='honda image' className='h-[90px] w-[120px] lg:w-[80px] lg:h-[70px]' />
          <img src={partner3} alt='ixigo image' className='h-[90px] w-[120px] lg:w-[80px] lg:h-[70px] mt-3' />
          <img src={partner4} alt='live mint image' className='h-[90px] w-[120px] lg:w-[80px] lg:h-[70px] mt-3' />
          <img src={partner5} alt='harvard business review image' className='h-[90px] w-[120px] lg:w-[80px] lg:h-[70px] mt-3' />
          <img src={partner6} alt='oxford image' className='h-[90px] w-[120px] lg:w-[80px] lg:h-[70px]' />

        </div>
      </div>

      <FindYourFit/>
      <HappyClients/>
    </>
  );
}

export default Home;
