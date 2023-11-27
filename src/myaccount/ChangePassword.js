import React, { useState } from 'react';
import CtnBtn from '../components/CtnBtn';
import { BsFillEyeFill, BsFillEyeSlashFill, BsFillPersonFill } from 'react-icons/bs';

const ChangePassword = () => {
  const [passwordToggle, setPasswordToggle] = useState(true);
  const [passwordToggle2, setPasswordToggle2] = useState(true);
  const [passwordToggle3, setPasswordToggle3] = useState(true);


  const handlePasswordToggle = () => {
    setPasswordToggle(!passwordToggle);
  };
  const handlePasswordToggle2 = () => {
    setPasswordToggle2(!passwordToggle2);
  };const handlePasswordToggle3 = () => {
    setPasswordToggle3(!passwordToggle3);
  };

  return (
    <div className='w-full'>
      <div className='wrapper w-[66vw] ml-8 border-[1.7px] border-[#00A6DB] rounded-[22px]'>
        <h1 className='text-[28px] text-black pt-2 pl-4 font-medium'>Change Password</h1>
        <form className='ml-4'>
          <div className='mt-4'>
            <label htmlFor='currentPassword' className='text-custom-text-grey cursor-pointer'>
              Current Password <span className='text-red-500'>*</span>
            </label>
            <div className='border-[1.7px] border-[#DDDDDE] w-[98%] pl-2 rounded-[4px] flex'>
              <input
                type={passwordToggle ? 'password' : 'text'}
                id='currentPassword'
                placeholder='Current Password'
                className='pl-2 w-[97%] outline-none pt-1 pb-1'
              />
              <button type='button' onClick={handlePasswordToggle}>
                {passwordToggle ? <BsFillEyeSlashFill className='md:text-[12px]' /> : <BsFillEyeFill className='md:text-[12px]' />}
              </button>
            </div>
          </div>
          <div className='mt-4'>
            <label htmlFor='currentPassword' className='text-custom-text-grey cursor-pointer'>
              New Password <span className='text-red-500'>*</span>
            </label>
            <div className='border-[1.7px] border-[#DDDDDE] w-[98%] pl-2 rounded-[4px] flex'>
              <input
                type={passwordToggle2 ? 'password' : 'text'}
                id='currentPassword'
                placeholder='New Password'
                className='pl-2 w-[97%] outline-none pt-1 pb-1'
              />
              <button type='button' onClick={handlePasswordToggle2}>
                {passwordToggle2 ? <BsFillEyeSlashFill className='md:text-[12px]' /> : <BsFillEyeFill className='md:text-[12px]' />}
              </button>
            </div>
          </div>
          <div className='mt-4'>
            <label htmlFor='currentPassword' className='text-custom-text-grey cursor-pointer'>
              Comfirm Password <span className='text-red-500'>*</span>
            </label>
            <div className='border-[1.7px] border-[#DDDDDE] w-[98%] pl-2 rounded-[4px] flex'>
              <input
                type={passwordToggle3 ? 'password' : 'text'}
                id='currentPassword'
                placeholder='Comfirm Password'
                className='pl-2 w-[97%] outline-none pt-1 pb-1'
              />
              <button type='button' onClick={handlePasswordToggle3}>
                {passwordToggle3 ? <BsFillEyeSlashFill className='md:text-[12px]' /> : <BsFillEyeFill className='md:text-[12px]' />}
              </button>
            </div>
          </div>

       
          
          <div className='mt-4 mb-4'>
            <CtnBtn className='mt-[32px] w-[130px] h-[38px] font-semibold bg-[#949494] text-white rounded cursor-pointer md:mt-0 md:text-[12px] text-[14px] flex items-center justify-center'>
              Save Changes
            </CtnBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
