import React from 'react'
import Line from '../assets/img/line2.png';
import Img1 from '../assets/img/reason_1.png'
import Img2 from '../assets/img/reason_2.png'
import Img3 from '../assets/img/reason_3.png'
import Img4 from '../assets/img/reason_4.png'

const WhyInkPrintNew = () => {
  return (
    <>
    <div className='pt-[60px] pb-[20px] px-[60px] w-[100%]'>
      <div className='why-inkprint flex items-center mb-[64px]'>
         <h1 className='text-[28px] mr-2 font-medium md:text-[14px]'>Why Inkprint?</h1>
      </div>
      <div className='flex flex-wrap justify-between w-[100%]'>
         <div className='reason_1 w-[250px] md:w-[45%] md:mb-[8px] md:py-[12px] md:mr-[8px]'>
             <div className='reason_image mb-[16px] md:flex md:justify-center'>
                 <img src={Img1} className="w-[70px] h-[70px] md:w-[50px] md:h-[50px]" />
             </div>
             <div className='main_reason'>
                 <h1 className="text-[#444444] font-medium text-2xl md:text-[14px] md:leading-[17px]">Custom Packaging Solutions</h1>
                 <p className="text-[#ADADAD] md:text-[12px] md:mt-[5px] md:leading-[14.5px]">Tailored to Your Brand, Budget, and Product Requirements</p>
             </div>
         </div>
         <div className='reason_2 w-[250px] md:w-[45%] md:mb-[8px] md:py-[12px] md:mr-[8px]'>
             <div className='reason_image mb-[17px] md:flex md:justify-center'>
             <img src={Img2} className="w-[70px] h-[70px] md:w-[50px] md:h-[50px]"/>
 
             </div>
             <div className='main_reason'>
                 <h1 className="text-[#444444] font-medium text-2xl md:text-[14px] md:leading-[17px]">Reliable Packaging  Services</h1>
                 <p className="text-[#ADADAD] md:text-[12px] md:mt-[5px] md:leading-[14.5px]">Consistent Quality and On-Time <br/>Delivery</p>
             </div>
         </div>
         <div className='reason_3 w-[260px] md:w-[45%] md:mb-[8px] md:py-[12px] md:mr-[8px]'>
             <div className='reason_image mb-[17px] md:flex md:justify-center'>
             <img src={Img3} className="w-[70px] h-[70px] md:w-[50px] md:h-[50px]"/>
 
             </div>
             <div className='main_reason w-[100%]'>
                 <h1 className="text-[#444444] font-medium text-2xl md:text-[14px] md:leading-[17px]">Exceptional Customer Support</h1>
                 <p className="text-[#ADADAD] md:text-[12px] md:mt-[5px] md:leading-[14.5px]">Dedicated to Providing Impeccable Customer Experience</p>
             </div>
         </div>
         <div className='reason_4 w-[250px] md:w-[45%] md:mb-[8px] md:py-[12px] md:mr-[8px]'>
             <div className='reason_image mb-[17px] md:flex md:justify-center'>
             <img src={Img4} className="w-[70px] h-[70px] md:w-[50px] md:h-[50px]" />
 
             </div>
             <div className='main_reason'>
                 <h1 className="text-[#444444] font-medium text-2xl md:text-[14px] md:leading-[17px]">Affordable Packaging Solutions</h1>
                 <p className="text-[#ADADAD] md:text-[12px] md:mt-[5px] md:leading-[14.5px]">Get the Best Value for Your Packaging Investment</p>
             </div>
         </div>
      </div>
    </div>
    </>
  )
}

export default WhyInkPrintNew