

function InputField({label, type, name, placeholder, require, width}) {
    return (
      <div className="mt-[24px] md:mt-[16px] w-full">
          <p className="text-custom-text-darkGrey text-[16px] mb-[7px] font-light md:text-[10px]">
              {label}
               <span className="text-red-500">*</span>
          </p>
          <input name= {name} type={type} placeholder={placeholder} className={`text-[18px] border border-grayLight py-[6px] px-[12px] rounded focus:outline-none ${width?'w-[100%]':'w-[95%]'} mr-[24px] md:text-[12px] md:py-[6px] md:px-[12px] md:w-full`}/>
      </div>
    )
  }
  
  export default InputField