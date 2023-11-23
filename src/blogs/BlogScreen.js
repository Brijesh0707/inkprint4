import React, { useState, useEffect } from 'react';
import WhiteArrow from '../assets/img/white_arrow.png';
import PageTopNavigation from '../components/PageTopNavigation';
import BlogBg from '../assets/img/Blog_BG.png';
import { Link } from 'react-router-dom';
import BlogImg from '../assets/img/indi_blog.png';
import Share from '../assets/img/share_btn.png';
import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../assets/img/slider_button.png'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";


const BlogScreen = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const handleRatingChange = (newRating) => {
        toast.success(`${newRating} star is added successfully`, {
            position: 'top-center',
            autoClose: 3000,
          });
      };
  return (
    <>
    <div className='w-full mt-[200px]'>
      <div className='blog_container relative flex justify-center '>
        
        <div className='blog_image relative overflow-hidden w-[40%]'>
          <img src={BlogImg} className='w-[100%] h-[400px]  object-fit' alt='Blog Image' />
          <div className='flex justify-between mt-2 mb-3'>
            <h1 className='text-[13px] font-normal pl-2'>QUALITY CHECK</h1>
            <h1 className='text-[10px] pr-2'>5 min read</h1>
          </div>
        </div>

        {/* Right side with other content */}
        <div className='blog_contain ml-8 w-[47%]'>
          <div className='flex justify-between mb-4'>
            <div className='blog_title'>
              <h1 className='text-2xl'>Title</h1>
              <h2 className='text-sm'>By Name</h2>
            </div>
            <div className='date'>
              <h3 className='text-xm'>date:</h3>
            </div>
          </div>

          {/* Additional content */}
          <div className='content italic'>
           <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, facere dolorum. Quisquam amet doloremque optio, adipisci, unde impedit harum saepe dignissimos tempora voluptatem officia velit quam excepturi quos beatae qui! Natus at sapiente saepe. Nesciunt nisi ipsa temporibus iste, ullam possimus provident animi recusandae incidunt ipsam voluptatum perferendis molestias qui consectetur consequatur impedit officiis obcaecati quas ad, doloremque, soluta molestiae esse deleniti? Sit, aspernatur. Ducimus, enim beatae nemo, ab maxime minus officiis voluptate nisi dolores fugiat tempore, nihil recusandae. Consequuntur iste ipsa possimus vero, ex iusto aspernatur necessitatibus nobis aut itaque </h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center '>
      <div className='w-[90%]  mt-3'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, facere dolorum. Quisquam amet doloremque optio, adipisci, unde impedit harum saepe dignissimos tempora voluptatem officia velit quam excepturi quos beatae qui! Natus at sapiente saepe. Nesciunt nisi ipsa temporibus iste, ullam possimus provident animi recusandae incidunt ipsam voluptatum perferendis molestias qui consectetur consequatur impedit officiis obcaecati quas ad, doloremque, soluta molestiae esse deleniti? Sit, aspernatur. Ducimus, enim beatae nemo, ab maxime minus officiis voluptate nisi dolores fugiat tempore, nihil recusandae. Consequuntur iste ipsa possimus vero, ex iusto aspernatur necessitatibus nobis aut itaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, facere dolorum. Quisquam amet doloremque optio, adipisci, unde impedit harum saepe dignissimos tempora voluptatem officia velit quam excepturi quos beatae qui! Natus at sapiente saepe. Nesciunt nisi ipsa temporibus iste, ullam possimus provident animi recusandae incidunt ipsam voluptatum perferendis molestias qui consectetur consequatur impedit officiis obcaecati quas ad, doloremque, soluta molestiae esse deleniti? Sit, aspernatur. Ducimus, enim beatae nemo, ab maxime minus officiis voluptate nisi dolores fugiat tempore, nihil recusandae. Consequuntur iste ipsa possimus vero, ex iusto aspernatur necessitatibus nobis aut itaque</p>
      </div>
      </div>
      <div className='w-[90%] flex justify-start ml-[70px] mt-10 items-center'>
      <div className='share mr-10 cursor-pointer'>
        <p className='flex text-custom-text text-[13px]'>Share <img src={Share} className='w-[10px] h-[10px] ml-2 mt-[4px]' /></p>
      </div>
      <div className='star cursor-pointer flex'>
        <p className='text-custom-text text-[14px] pt-[6px] pr-3'>Rate the blog</p>
        <ReactStars
            count={5}
            size={22}
            isHalf={true}
            emptyIcon={<i className='far fa-star'></i>}
            halfIcon={<i className='fa fa-star-half-alt'></i>}
            fullIcon={<i className='fa fa-star'></i>}
            activeColor='#ffd700'
            color='#A7C539'
            onChange={handleRatingChange}
            
          />
      </div>
      </div>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
    </div>

    <div className='slider section w-[100%] mt-10'>
    <div className='slider_container w-[100%]'>
    <h1 className='text-[25px] font-medium text-black pl-10'>Related blogs</h1>
        <div className='slider_controller flex flex-col justify-end'>
  <div className='flex controller items-center absolute mt-5 right-5'>
    <img src={Button} className='swiper_button_prev w-[20px] h-[14px] rotate-180 mt-[2px] cursor-pointer'/>
    <img src={Button} className='swiper_button_next w-[20px] h-[14px] ml-5 cursor-pointer'/>
  </div>
</div>
        <div className='main_slider w-[97%]  mt-8 mb-8'>
          <Swiper
            slidesPerView={2.1}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper_button_next",
              prevEl: ".swiper_button_prev",
            }}
            pagination={false}
            keyboard={true}
            // mousewheel={true}
            modules={[Navigation, Pagination, Keyboard]}
            className="mySwiper"
            >
            <div className="w-[100%]">
     
          {[1, 2, 3, 4,5].map((index) => (
            <SwiperSlide>
            <div key={index} className='blogs1 ml-3 w-[555px] h-[460px] mb-4 border-[1px] border-[#DDDDDE] rounded-[5px]'>
              <div className='blogs_image blogs_image w-[520px] ml-4 mt-3 h-[226px] relative'>
                <img src={BlogBg} alt={`Blog ${index}`} />
              </div>
              <div className='blogs_detail'>
                <div className="blogs_heading text-left">
                  <p className="text-xl pt-1 pl-5">Heading</p>
                </div>
                <div className="blogs_date text-left">
                  <p className="text-[#ADADAD] text-xs pt-1 pl-5">11 March 2023</p>
                </div>
                <div className="blogs_text w-[90%] ml-5 mt-1 text-left">
                  <p className="text-[#6D6E70] text-base">
                    Lorem ipsum dolor sit amet consectetur. Nunc vulputate est nunc in non pulvinar aliquam. Ut sed posuere mi potenti cursus tellus feugiat. Cras egestas integer id duis enim cras ac. Elit posuere sit aliquam amet nullam..
                  </p>
                  <div className="buttons flex mt-4 mb-2 ml-[2px]">
                    <div className="read_more">
                    <Link to="/blogs/individualBlog">
                      <button className="w-[130px] h-[38px] bg-[#00A6DB] text-white rounded-[4px] flex justify-center items-center font-normal">
                        Read More <img src={WhiteArrow} className='w-2 h-2 ml-2 text-[8px]' alt="Read More Arrow" />
                      </button>
                      </Link>
                    </div>
                    <div className="blogs_share ml-[10px]">
                      <button className="w-[120px] h-[39px] text-[#00A6DB] border-2 font-medium border-[#00A6DB] rounded-[4px] flex justify-center items-center">
                        Share <img src={Share} className='w-3 h-3 ml-2' alt="Share Icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
          ))}
      
      </div>
            
            </Swiper>

        </div>

        </div>

    </div>



    </>

    
  );
};

export default BlogScreen;
