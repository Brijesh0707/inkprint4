import { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import ShareDialog from "./ShareDialog";
import { ToastContainer } from 'react-toastify';

function AllProductCard({ isLiked, title, minQty, slug, img }) {
  // const [likeIcon, setLikeIcon] = useState(!isLiked);
  const [shareModal, setShareModal] = useState(false);
  return (
    <div className="shadow-md rounded-[10px] p-[8px] mb-[24px] mr-[3vw] h-fit w-[302px]">
      {/* <ShareDialog visibility={shareModal} setVisibility={setShareModal}/> */}
      <div className="text-custom-text text-[24px] flex justify-end mb-[16px] relative">
        {!isLiked && <IoMdHeartEmpty className="cursor-pointer" />}
        {isLiked && <IoMdHeart className="cursor-pointer" />}
        <button onClick={()=>setShareModal(!shareModal)}>
          <IoShareSocialOutline className="ml-[16px] cursor-pointer" />
        </button>
        <ShareDialog visibility={shareModal} setVisibility={setShareModal}/>
      </div>
      <Link to={`/products/${slug}`} className="flex flex-col items-center">
        <img src={img} alt="Candle Box" className="h-[220px] w-[227px] object-cover"/>
        <div className="w-full">
        <h3>{title}</h3>
        <p>Minimum quantity {minQty} pieces</p>
        </div>
      </Link>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
    </div>
  )
}

export default AllProductCard;