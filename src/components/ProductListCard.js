
const ProductListCard = ({image,text}) => {
  return (
  //  <>
  //  <div className="product card w-[230px]">
  //   <div className="image w-[230px] ">
  //       <img src={image} className="w-full h-[250px] object-cover"/>
  //   </div>
  //   <div className="product_title text-left">
  //       <h1 className="text-[14px] pl-2">{text}</h1>
  //   </div>
  //  </div>


  //  </>
  <>
  <div className="bg-[#f6f8fa]">
    <div className=" flex justify-center overflow-hidden  mt-3 rounded-[12px]">
      <img src={image} alt={text} className="h-[90%] w-[90%]"/>
    </div>
    <p className="text-left text-[12px] pl-[1.5vw]">{text}</p>
  </div>
  </>
  )
}

export default ProductListCard