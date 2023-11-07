import React from 'react'

const QandA = (props) => {
  return (
   <>
    <div className='w-[100%]'>

  <div className='mt-5'>
  <h2 className="md:text-[12px] text-[20px] text-[#444444] mb-2 "> {props.title.includes(".") ? "" : props.title}</h2>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">{props.subject}</p>
    </div>
  </div>
   </>
  )
}

export default QandA