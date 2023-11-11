

function InputField({label, type, name, placeholder, require, width}) {
    return (
      <div className="mt-[24px] w-full">
          <p className="text-custom-text-darkGrey text-[16px] mb-[7px] font-light">
              {label}
               <span className="text-red-500">*</span>
          </p>
          <input name= {name} type={type} placeholder={placeholder} className={`text-[18px] border border-grayLight py-[6px] px-[12px] rounded focus:outline-none w-[${width}] mr-[24px]`}/>
      </div>
    )
  }
  
  export default InputField