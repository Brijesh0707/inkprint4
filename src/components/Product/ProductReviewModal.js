import { useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import productImg from '../../assets/img/Banner.png';
import Rating from "@mui/material/Rating";

function ProductReviewModal({ visibility, setVisibility }) {
    useEffect(() => {
        if (visibility) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [visibility])
    return (
        <>
            {visibility && <div className="fixed top-0 left-0 h-[100vh] w-[100vw] z-[150] bg-black opacity-70"></div>}
            {visibility && <div className="fixed top-0 left-0 h-[100vh] w-[100vw] z-[151] flex items-center justify-center">
                <div className="bg-white w-[60vw] p-[24px] rounded-[8px]">
                    <div className="flex justify-end">
                        <button onClick={() => setVisibility(false)} className="text-[#949494]">
                            <IoMdCloseCircleOutline />
                        </button>
                    </div>
                    <h1 className="text-[20px] text-center mb-[24px] font-medium">Write a review</h1>
                    <div className="flex">
                        <img src={productImg} alt="product image" className="h-[100px] w-[150px] object-contain"/>
                        <div className="p-[16px] mb-[24px]">
                            <h1 className="text-[20px] mb-[16px]">Custom packaging boxes</h1>
                            <div className="flex items-center">
                                <Rating className="text-custom-text-green mr-[12px]" precision={0.5}/>
                                <p className="text-[14px]">Rate our product</p>
                            </div>
                        </div>
                    </div>
                    <textarea placeholder="Please write a review here" rows={5} className="p-[8px] w-full border rounded-[8px] resize-none outline-none mb-[24px]"/>
                    <p className="text-[14px]">By submitting review you give us consent to publish and process personal information in accordance with <a className="text-custom-text underline" href="https://inkprint-beta.vercel.app/termsandconditions" target="_blank">Terms of use</a> Terms of use and <a className="text-custom-text underline" href="https://inkprint-beta.vercel.app/privacypolicy" target="_blank">Privacy Policy</a></p>
                    <div className="flex justify-center mt-[24px]">
                        <button type="submit" className="bg-custom-btn py-[10px] px-[24px] rounded-[4px] text-white">Done</button>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ProductReviewModal