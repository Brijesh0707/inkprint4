import React from 'react';
import allProductsHeaderBanner from '../../assets/img/allProductsHeaderBanner.png';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { useParams } from 'react-router-dom';

function Header() {
  const { slug } = useParams();
  function decideHeader()
  {
    if(slug === 'packagingprinting')
    {
      return "Packaging Printing";
    }
    else if(slug === 'visitingcards')
    {
      return "Visiting Cards";
    }
    else if(slug === 'businessessentials')
    {
      return "Business Essentials";
    }
    else if(slug === 'marketingessentials')
    {
      return "Marketing Essentials";
    }
    else if(slug === 'displayproducts')
    {
      return "Display Products";
    }
  }
  return (
    <div className='relative w-full mt-[175px] px-[60px] pt-[60px]'>
        <img src={allProductsHeaderBanner} alt="Header Banner" className='absolute top-0 left-0 z-[-1] w-full'/>
        <div className='flex items-center'>
            <Link to="/" className='text-[14px] text-[#2F2F2F]'>Home</Link>
            <IoIosArrowForward className='mx-[15px]'/>
            <Link to="/allproducts" className={`text-[14px] ${slug!==undefined?'text-black':'text-custom-text-green'} ${slug!==undefined?'font-normal':'font-semibold'}`}>All products</Link>
            {slug!==undefined && 
            <div className='flex items-center'>
              <IoIosArrowForward className='mx-[15px]'/>
              <Link to={`/${slug}`} className='text-[14px] text-custom-text-green font-semibold'>
                {decideHeader()}
              </Link>
            </div>}
        </div>
        <div className='mt-[100px]'>
            <h1 className='font-medium text-[32px]'>Packaging Printing</h1>
            <p className='mt-[24px] text-custom-text font-medium'>Unlock Your Brand's Potential with Custom Box Packaging Solutions</p>
        </div>
    </div>
  )
}

export default Header