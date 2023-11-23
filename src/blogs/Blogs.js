import React, { useState, useEffect } from 'react';
import WhiteArrow from '../assets/img/white_arrow.png';
import Share from '../assets/img/share_btn.png';
import PageTopNavigation from '../components/PageTopNavigation';
import BlogBg from '../assets/img/Blog_BG.png';
import { Link } from 'react-router-dom';

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='ml-10'>
        <PageTopNavigation firstRouteLink="/" firstRouteName="Home" secondRouteName="Blogs" />
      </div>
      <div className="w-[97%] ml-5">
        <div className='blogs_wrapper flex justify-evenly mt-2 flex-wrap'>
          {[1, 2, 3, 4,5].map((index) => (
            <div key={index} className='blogs1 w-[48%] h-[460px] mb-4 border-[1px] border-[#DDDDDE] rounded-[5px]'>
              <div className='blogs_image blogs_image w-[530px] ml-4 mt-3 h-[226px] relative'>
                <img src={BlogBg} alt={`Blog ${index}`} />
              </div>
              <div className='blogs_detail'>
                <div className="blogs_heading">
                  <p className="text-xl pt-1 pl-5">Heading</p>
                </div>
                <div className="blogs_date">
                  <p className="text-[#ADADAD] text-xs pt-1 pl-5">11 March 2023</p>
                </div>
                <div className="blogs_text w-[90%] ml-5 mt-1">
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
