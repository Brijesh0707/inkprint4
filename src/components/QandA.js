import React from 'react'

const QandA = (props) => {
  return (
   <>
    <div className='w-[100%]'>

  <div className='mt-[22px] md:mt-[12px]'>
    {props.title.includes(".")?<></>:<h2 className="md:text-[12px] text-[18px] text-custom-text-p mb-[12px] md:mb-[8px] leading-none">{props.title}</h2>}
  {/* <h2 className="md:text-[12px] text-[20px] text-custom-text-p mb-2 md:mb-[8px]"> {props.title.includes(".") ? "" : props.title}</h2> */}
            <p className="text-custom-text-darkGrey leading-6 md:leading-4 md:text-[12px] text-[18px]">{props.subject}</p>
    </div>
  </div>
   </>
  )
}

export default QandA