
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
  <div className="bg-transparent">
    <div className="w-full flex justify-center overflow-hidden rounded-[12px]">
      <img src={image} alt={text} className="h-full w-full"/>
    </div>
    <p>{text}</p>
  </div>
  )
}

export default ProductListCard