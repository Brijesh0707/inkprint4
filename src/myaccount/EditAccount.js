import React from 'react'
import CtnBtn from '../components/CtnBtn'

const EditAccount = () => {
  return (
   <>
    <div className='w-full md:hidden'>
        <div className='wrapper w-[66vw] ml-8 border-[1.7px] border-[#00A6DB] rounded-[22px]'>
        <h1 className='text-[28px] text-black pt-2 pl-4 font-medium'>Edit account details</h1>
        <form className='ml-4'>
            <div className='wrapper flex justify-between  items-center mt-4'>
                <div>
                    <h1 className='text-custom-text-grey cursor-pointer font-normal'>First Name <span className='text-red-500'>*</span></h1>
                    <input type='text' placeholder='Joe' className='border-[1.7px] border-[#DDDDDE] w-[380px] rounded-[4px] pl-2 mt-1'/>
                </div>
                <div className='mr-4'>
                    <h1 className='text-custom-text-grey cursor-pointer font-normal'>Last Name <span className='text-red-500'>*</span></h1>
                    <input type='text' placeholder='Doe' className='border-[1.7px] border-[#DDDDDE] w-[380px] rounded-[4px] pl-2 mt-1'/>
                </div>
            </div>
         <div className='mt-4'>
         <h1 className='text-custom-text-grey cursor-pointer'>Display Name <span className='text-red-500'>*</span></h1>
            <input type='text' placeholder='Display Name' className='border-[1.7px] border-[#DDDDDE] w-[98%] pl-2 rounded-[4px]' />
            <p className='text-custom-text-grey text-[14px] cursor-pointer'>This will be how your name will be displayed in the account section and in reviews</p>
         </div>
         <div className='mt-4'>
         <h1 className='text-custom-text-grey cursor-pointer'>Email Address <span className='text-red-500'>*</span></h1>
            <input type='email' placeholder='Display Name' className='border-[1.7px] border-[#DDDDDE] w-[98%] pl-2 rounded-[4px]' />
           
         </div>
         <div className='mt-4 mb-4'>
         <CtnBtn className="mt-[32px] w-[130px] h-[38px] font-semibold bg-[#949494] text-white rounded cursor-pointer md:mt-0 md:text-[12px] text-[14px] flex items-center justify-center">
          Save Changes
        </CtnBtn>
         </div>
        </form>


         
        

        </div>
    </div>

    <div className='w-full hidden  md:flex justify-center items-center'>
    <div className='wrapper w-[66vw] md:w-[90vw] ml-8 md:ml-0 border-[1.7px] border-[#00A6DB] rounded-[22px]'>
        <h1 className='text-[28px] text-black pt-2 pl-4 md:pl-2 md:text-[3vw] font-medium'>Edit account details</h1>
        <form className='ml-4 md:ml-2 md:mt-2'>
                <div>
                    <h1 className='text-custom-text-grey cursor-pointer md:text-[3vw] font-normal'>First Name <span className='text-red-500'>*</span></h1>
                    <input type='text' placeholder='Joe' className='border-[1.7px] border-[#DDDDDE] w-[98%] rounded-[4px] pl-2 mt-1'/>
                </div>
                <div className=''>
                    <h1 className='text-custom-text-grey cursor-pointer font-normal md:text-[3vw]'>Last Name <span className='text-red-500'>*</span></h1>
                    <input type='text' placeholder='Doe' className='border-[1.7px] border-[#DDDDDE] w-[98%] rounded-[4px] pl-2 mt-1'/>
                </div>
           
         <div className='mt-4'>
         <h1 className='text-custom-text-grey cursor-pointer md:text-[3vw]'>Display Name <span className='text-red-500'>*</span></h1>
            <input type='text' placeholder='Display Name' className='border-[1.7px] border-[#DDDDDE] w-[98%] pl-2 rounded-[4px]' />
            <p className='text-custom-text-grey text-[14px] md:text-[12px]  cursor-pointer'>This will be how your name will be displayed in the account section and in reviews</p>
         </div>
         <div className='mt-4'>
         <h1 className='text-custom-text-grey cursor-pointer md:text-[3vw]'>Email Address <span className='text-red-500'>*</span></h1>
            <input type='email' placeholder='Display Name' className='border-[1.7px] border-[#DDDDDE] w-[98%] pl-2 rounded-[4px]' />
           
         </div>
         <div className='mt-4 mb-4'>
         <CtnBtn className="mt-[32px] w-[130px] md:w-[90px] h-[36px]  font-semibold bg-[#949494] text-white rounded cursor-pointer md:mt-0 md:text-[10px] text-[14px] flex items-center justify-center">
          Save Changes
        </CtnBtn>
         </div>
        </form>


         
        

        </div>
    </div>
   </>
  )
}

export default EditAccount