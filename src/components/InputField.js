

function InputField({label, type, name, placeholder, require}) {
    return (
      <div className="mr-[24px] mt-[24px] w-full">
          <p className="text-custom-text-darkGrey text-[16px] mb-[10px]">
              {label}
               <span className="text-red-500">*</span>
          </p>
          <input name= {name} type={type} placeholder={placeholder} className="text-[18px] border border-grayLight py-[6px] px-[12px] rounded focus:outline-none w-full"/>
      </div>
    )
  }
  
  export default InputField