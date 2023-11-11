import React from 'react'
import Line from '../assets/img/line2.png';
import Img1 from '../assets/img/reason_1.png'
import Img2 from '../assets/img/reason_2.png'
import Img3 from '../assets/img/reason_3.png'
import Img4 from '../assets/img/reason_4.png'


const WhyInkprint = () => {
  return (
   <>
   <div className='py-[100px] px-[60px] hidden'>
     <div className='why-inkprint flex items-center mb-[64px]'>
        <h1 className='text-[28px] mr-2'>Why Inkprint?</h1>
        <hr className='border-t-2 border-green w-[583px]'/>
     </div>
     <div className='flex justify-between'>
        <div className='reason_1 w-[250px]'>
            <div className='reason_image mb-[17px]'>
                <img src={Img1} className="w-[50px] h-[50px]" />
            </div>
            <div className='main_reason'>
                <h1 className="text-[#6D6E70] text-2xl">Custom Packaging Solutions</h1>
                <p className="text-[#ADADAD]">Tailored to Your Brand, Budget, and Product Requirements</p>
            </div>
        </div>
        <div className='reason_2 w-[250px]'>
            <div className='reason_image mb-[17px]'>
            <img src={Img2} className="w-[50px] h-[50px]"/>

            </div>
            <div className='main_reason'>
                <h1 className="text-[#6D6E70] text-2xl">Reliable Packaging Services</h1>
                <p className="text-[#ADADAD]">Consistent Quality and On-Time <br/>Delivery</p>
            </div>
        </div>
        <div className='reason_3 w-[250px]'>
            <div className='reason_image mb-[17px]'>
            <img src={Img3} className="w-[50px] h-[50px]"/>

            </div>
            <div className='main_reason'>
                <h1 className="text-[#6D6E70] text-2xl">Exceptional Customer Support</h1>
                <p className="text-[#ADADAD]">Dedicated to Providing Impeccable Customer Experience</p>
            </div>
        </div>
        <div className='reason_4 w-[250px]'>
            <div className='reason_image mb-[17px]'>
            <img src={Img4} className="w-[50px] h-[50px]" />

            </div>
            <div className='main_reason'>
                <h1 className="text-[#6D6E70] text-2xl">Affordable Packaging Solutions</h1>
                <p className="text-[#ADADAD]">Get the Best Value for Your Packaging Investment</p>
            </div>
        </div>
     </div>
   </div>
   </>
  )
}

export default WhyInkprint