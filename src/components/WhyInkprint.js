import React from 'react'
import Line from '../assets/img/line2.png';
import Img1 from '../assets/img/reason_1.png'
import Img2 from '../assets/img/reason_2.png'
import Img3 from '../assets/img/reason_3.png'
import Img4 from '../assets/img/reason_4.png'


const WhyInkprint = () => {
  return (
   <>
   <div className='w-[100%] mb-[100px]'>
     <div className='why-inkprint flex ml-10'>
        <h1 className='text-2xl pt-[46px]'>Why Inkprint?</h1>
        <img src={Line} className='w-[420px] h-[2px] mt-[63px] ml-2 md:w-[150px] mb-10' alt='line' />
     </div>
     <div className='flex justify-evenly'>
        <div className='reason_1 w-[250px]'>
            <div className='reason_image'>
                <img src={Img1} className="w-[50px] h-[50px]" />
            </div>
            <div className='main_reason'>
                <h1 className="text-[#6D6E70] text-2xl">Custom Packaging Solutions</h1>
                <p className="text-[13px] text-[#ADADAD]">Tailored to Your Brand, Budget, and Product Requirements</p>
            </div>
        </div>
        <div className='reason_2 w-[250px]'>
            <div className='reason_image '>
            <img src={Img2} className="w-[50px] h-[50px]"/>

            </div>
            <div className='main_reason'>
                <h1 className="text-[#6D6E70] text-2xl">Reliable Packaging Services</h1>
                <p className="text-[13px] text-[#ADADAD]">Consistent Quality and On-Time <br/>Delivery</p>
            </div>
        </div>
        <div className='reason_3 w-[250px]'>
            <div className='reason_image '>
            <img src={Img3} className="w-[50px] h-[50px]"/>

            </div>
            <div className='main_reason'>
                <h1 className="text-[#6D6E70] text-2xl">Exceptional Customer Support</h1>
                <p className="text-[13px] text-[#ADADAD]">Dedicated to Providing Impeccable Customer Experience</p>
            </div>
        </div>
        <div className='reason_4 w-[250px]'>
            <div className='reason_image '>
            <img src={Img4} className="w-[50px] h-[50px]" />

            </div>
            <div className='main_reason'>
                <h1 className="text-[#6D6E70] text-2xl">Affordable Packaging Solutions</h1>
                <p className="text-[13px] text-[#ADADAD]">Get the Best Value for Your Packaging Investment</p>
            </div>
        </div>
     </div>
   </div>
   </>
  )
}

export default WhyInkprint