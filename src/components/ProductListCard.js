
const ProductListCard = ({image,text}) => {
  return (
   <>
   <div className="product card">
    <div className="image">
        <img src={image} className="w-[230px] h-[250px] object-fit"/>
    </div>
    <div className="product_title text-left">
        <h1 className="text-[14px] pl-2">{text}</h1>
    </div>
   </div>


   </>
  )
}

export default ProductListCard