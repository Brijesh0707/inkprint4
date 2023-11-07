import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import btnnext from '../assets/img/btnNext.png'
import btnprev from '../assets/img/btnPrev.png'
const ProductCard = (props) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className='card bg-custom-bg-card rounded-[8px] mb-8 w-[300px]'>
        <div className='card-text'>
          {/* <h1 className='pl-8 pt-3 text-custom-text text-lg font-medium'>Box Packaging (6)</h1> */}
        </div>
        <div className='card-img'>
          <img src={props.image} className='mt-2' alt="Product" />
        </div>
        <div className='Slider mt-10 mb-3'>
          <div className='slider_products flex mt-4 mb-10 relative w-[82%] ml-7'>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
                clickable:true
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
           
              <SwiperSlide>
                <div className='products ml-1 mr-1 relative cursor-pointer'>
                  <img src={props.image} className='w-[100px] h-[90px] card_image' alt="Product" />
                  <p className='text-[13px] text-custom-text-p font-medium pl-1'>testing product<br/> name</p>
                  <p className='text-[12px] text-custom-text-green font-medium pl-1'>As low as ₹59.50</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='products ml-1 mr-1 relative cursor-pointer'>
                  <img src={props.image} className='w-[100px] h-[100px] card_image' alt="Product" />
                  <p className='text-[13px] text-custom-text-p font-medium pl-1'>testing product<br/> name</p>
                  <p className='text-[12px] text-custom-text-green font-medium pl-1'>As low as ₹59.50</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='products ml-1 mr-1 relative cursor-pointer'>
                  <img src={props.image} className='w-[100px] h-[100px] card_image' alt="Product" />
                  <p className='text-[13px] text-custom-text-p font-medium pl-1'>testing product<br/> name</p>
                  <p className='text-[12px] text-custom-text-green font-medium pl-1'>As low as ₹59.50</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='products ml-1 mr-1 relative cursor-pointer'>
                  <img src={props.image} className='w-[100px] h-[100px] card_image' alt="Product" />
                  <p className='text-[13px] text-custom-text-p font-medium pl-1'>testing product<br/> name</p>
                  <p className='text-[12px] text-custom-text-green font-medium pl-1'>As low as ₹59.50</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='products ml-1 mr-1 relative cursor-pointer'>
                  <img src={props.image} className='w-[100px] h-[100px] card_image' alt="Product" />
                  <p className='text-[13px] text-custom-text-p font-medium pl-1'>testing product<br/> name</p>
                  <p className='text-[12px] text-custom-text-green font-medium pl-1'>As low as ₹59.50</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='products ml-1 mr-1 relative cursor-pointer'>
                  <img src={props.image} className='w-[100px] h-[100px] card_image' alt="Product" />
                  <p className='text-[13px] text-custom-text-p font-medium pl-1'>testing product<br/> name</p>
                  <p className='text-[12px] text-custom-text-green font-medium pl-1'>As low as ₹59.50</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='products ml-1 mr-1 relative cursor-pointer'>
                  <img src={props.image} className='w-[100px] h-[100px] card_image' alt="Product" />
                  <p className='text-[13px] text-custom-text-p font-medium pl-1'>testing product<br/> name</p>
                  <p className='text-[12px] text-custom-text-green font-medium pl-1'>As low as ₹59.50</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='products ml-1 mr-1 relative cursor-pointer'>
                  <img src={props.image} className='w-[100px] h-[100px] card_image' alt="Product" />
                  <p className='text-[13px] text-custom-text-p font-medium pl-1'>testing product<br/> name</p>
                  <p className='text-[12px] text-custom-text-green font-medium pl-1'>As low as ₹59.50</p>
                </div>
              </SwiperSlide>
            
            </Swiper>
            <button ref={prevRef} className="prev-button absolute left-[-25px] top-[80px] z-40 "><img src={btnprev} className='w-6 h-6'/></button>
            <button ref={nextRef} className="next-button absolute right-[-25px] top-[80px] z-40"><img src={btnnext} className='w-6 h-6'/></button>
          </div>
        </div>
        <div className='card-detail mb-2 ml-3 flex justify-between'>
          <h1 className='text-[18px] text-[#00A6DB] font-medium'>{props.title}</h1>
          <button className='w-[90px] h-[25px] text-white bg-custom-btn mr-3 text-[13px] font-medium rounded-[2px]'>View more</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;