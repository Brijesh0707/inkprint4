import React from 'react'

const StockPackaging = ({image,text}) => {
  return (
   <>
   <div className='w-[auto] h-[auto]'>
    <div className='image'>
        <img src={image} className='w-[45vw] h-[55vh]'/>
    </div>
    <div className='text mt-2 text-left pt-2 text-[13px]'>
        <h1>{text}</h1>
    </div>
   </div>

   </>
  )
}

export default StockPackaging