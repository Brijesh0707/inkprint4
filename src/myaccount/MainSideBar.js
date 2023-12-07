import React, { useEffect, useState } from 'react'
import PageTopNavigation from "../components/PageTopNavigation";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { PiPencilCircle } from "react-icons/pi";
import { FaLock } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import EditAccount from './EditAccount';
import MyDesign from './MyDesign';
import MyOrder from './MyOrder';
import MyWish from './MyWish';
import ChangePassword from './ChangePassword';
import { useNavigate } from 'react-router-dom';


  
const MainSideBar = () => {
    const [select,setSelect] = useState("account details");
    const navigate = useNavigate()
    const renderSelectedComponent = () => {
        switch (select) {
          case 'account details':
            return <EditAccount />;
            case 'my whislist':
                return <MyWish/>;
            case 'my orders':
                return <MyOrder/>;
            case 'my designs':
                return <MyDesign/>;
            case 'change password':
                return <ChangePassword/>;

          default:
            return null;
        }
      };
      useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handlelogout = () => {
      const loginToken = localStorage.getItem("token");
      const registerToken = localStorage.getItem("Register_token");
    
      if (loginToken) {
        localStorage.removeItem("token");
        navigate("/")
        window.location.reload();
       

      }
    
      if (registerToken) {
        localStorage.removeItem("Register_token");
        navigate("/")
        window.location.reload();
        
      }
    };

    
  return (
   <>
    <div className='w-full md:hidden'>
      <div className='ml-[5.5vw]'>
      <PageTopNavigation firstRouteLink="/" firstRouteName="Home" secondRouteName="MyAccount"/>
      </div>
        <div className='wrapper flex'>
         {/* left side  */}
         <div className='left_side_bar w-[28vw] h-[100vh] '>
            <ul className='ml-[5vw]'>
            <ol className={`flex items-center w-[200px] pt-2 pb-2 rounded-[11px] ${select === 'account details' ? 'bg-[#00A6DB]' : 'bg-white'} cursor-pointer transition-all duration-100`} onClick={()=>setSelect("account details")}>
                <CgProfile className={`text-custom-text w-5 h-5 mr-2 ml-2  ${select === 'account details' ? 'text-white' : 'bg-white'}`} />{' '}
                <p className={`text-black font-medium ${select === 'account details' ? 'text-white' : 'bg-white'}`}>Account details</p>{' '}
              </ol>
              <ol className={`flex items-center w-[200px] mt-4 pt-2 pb-2 rounded-[11px] ${select === 'my whislist' ? 'bg-[#00A6DB]' : 'bg-white'} cursor-pointer transition-all duration-100`} onClick={()=>setSelect("my whislist")}>
                <FaRegHeart className={`text-custom-text w-5 h-5 mr-2 ml-2  ${select === 'my whislist' ? 'text-white' : 'bg-white'}`} />
                <p className={`text-black font-medium ${select === 'my whislist' ? 'text-white' : 'bg-white'}`}>My Wishlist</p>
              </ol>
              <ol className={`flex items-center mt-4 w-[200px] pt-2 pb-2 rounded-[11px] ${select === 'my orders' ? 'bg-[#00A6DB]' : 'bg-white'} cursor-pointer transition-all duration-100`} onClick={()=>setSelect("my orders")}>
                <FaTruckFast className={`text-custom-text w-5 h-5 mr-2 ml-2  ${select === 'my orders' ? 'text-white' : 'bg-white'}`} />
                <p className={`text-black font-medium ${select === 'my orders' ? 'text-white' : 'bg-white'}`}>My Orders</p>
              </ol>
              <ol className={`flex items-center mt-4 w-[200px] pt-2 pb-2 rounded-[11px] ${select === 'my designs' ? 'bg-[#00A6DB]' : 'bg-white'} cursor-pointer transition-all duration-100`} onClick={()=>setSelect("my designs")}>
                <PiPencilCircle className={`text-custom-text w-5 h-5 mr-2 ml-2  ${select === 'my designs' ? 'text-white' : 'bg-white'}`}  />
                <p className={`text-black font-medium ${select === 'my designs' ? 'text-white' : 'bg-white'}`}>My Designs</p>
              </ol>
              <ol className={`flex items-center w-[200px] mt-4 pt-2 pb-2 rounded-[11px] ${select === 'change password' ? 'bg-[#00A6DB]' : 'bg-white'} cursor-pointer transition-all duration-100`} onClick={()=>setSelect("change password")}>
                <FaLock className={`text-custom-text w-4 h-4 mr-2 ml-2  ${select === 'change password' ? 'text-white' : 'bg-white'}`} />
                <p className={`text-black font-medium ${select === 'change password' ? 'text-white' : 'bg-white'}`}>Change Password</p>
              </ol>
              <ol className='flex items-center w-[200px] mt-4 cursor-pointer transition-all duration-300' onClick={handlelogout}>
                <MdOutlineLogout className='h-5 w-5 mr-2 ml-2 text-custom-text' />
                <p className='text-black font-medium'>Log Out</p>
              </ol>

            </ul>
         </div>
         {/* right side bar  */}
         <div className='w-[80vw] '>{renderSelectedComponent()}</div>
         

        </div>
    </div>

    {/* responsive */}
    <div className='w-[100%] md:block  hidden'>
  <div className='top mb-2 mt-2 ml-2 overflow-scroll'>
  <div className=''>
      <ul className='flex justify-evenly '>
        <li className={`text-custom-light-grey text-[1.9vw] cursor-pointer ${select === 'account details' ? 'text-[#6D6E70] font-semibold border-b-2  border-[darkgrey]' : 'text-custom-light-grey'} `} onClick={()=>setSelect("account details")}>Account Details</li>
        <li className={`text-custom-light-grey text-[1.9vw] cursor-pointer ${select === 'my whislist' ? 'text-[#6D6E70] font-semibold border-b-2  border-[darkgrey]' : 'text-custom-light-grey'} `} onClick={()=>setSelect("my whislist")}>My Wish List</li>
        <li className={`text-custom-light-grey text-[1.9vw] cursor-pointer ${select === 'my orders' ? 'text-[#6D6E70] font-semibold border-b-2  border-[darkgrey]' : 'text-custom-light-grey'} `} onClick={()=>setSelect("my orders")}>My Orders</li>
        <li className={`text-custom-light-grey text-[1.9vw] cursor-pointer ${select === 'my designs' ? 'text-[#6D6E70] font-semibold border-b-2  border-[darkgrey]' : 'text-custom-light-grey'} `} onClick={()=>setSelect("my designs")}>My Designs</li>
        <li className={`text-custom-light-grey text-[1.9vw] cursor-pointer ${select === 'change password' ? 'text-[#6D6E70] font-semibold border-b-2  border-[darkgrey]' : 'text-custom-light-grey'} `} onClick={()=>setSelect("change password")}>Change Password</li>
        <li className={`text-custom-light-grey text-[1.9vw] cursor-pointer ${select === '' ? 'text-[#6D6E70] font-semibold border-b-2  border-[darkgrey]' : 'text-custom-light-grey'} `} onClick={handlelogout}>Log Out</li>
      </ul>
    </div>
  </div>
  <div className='below'>
    {renderSelectedComponent()}
  </div>
</div>

   </>
  )
}

export default MainSideBar