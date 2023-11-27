
const ProductListCard = ({image,text}) => {
  return (
   <>
   <div className="product card w-[230px]">
    <div className="image w-[230px] ">
        <img src={image} className="w-full h-[250px] object-cover"/>
    </div>
    <div className="product_title text-left">
        <h1 className="text-[14px] pl-2">{text}</h1>
    </div>
   </div>


   </>
  )
}

export default ProductListCard