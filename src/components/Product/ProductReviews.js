import { useState } from "react";
import Rating from "@mui/material/Rating";
import { useStatStyles } from "@chakra-ui/react";
import ProductReviewModal from "./ProductReviewModal";

const reviews = [
    {
        rating: 4,
        title: "Good Product",
        userName: "Mukesh Kumar",
        date: new Date("2023-05-12"),
        productName: "Custom packaging boxes",
        review: "Superb experience with Inkprint. Their design process was a breeze, and the quality of the custom boxes exceeded my expectations. I especially love their eco-friendly options. Highly recommend!"
    },
    {
        rating: 4,
        title: "Good Product",
        userName: "Mukesh Kumar",
        date: new Date("2023-05-12"),
        productName: "Custom packaging boxes",
        review: "Superb experience with Inkprint. Their design process was a breeze, and the quality of the custom boxes exceeded my expectations. I especially love their eco-friendly options. Highly recommend!"
    }
]

const monthArray = ["Dummy", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function ProductReviews() {
    const [showReviewModal, setShowReviewModal] = useState(false);
    return (
        <div>
            <h1 className="text-[24px] mb-[24px] font-medium">Reviews</h1>
            <div className="flex">
                <Rating className="text-custom-text-green" value={4.5} readOnly={true} precision={0.5} />
                <p className="ml-[40px] font-medium">4.5 ({reviews.length} reviews)</p>
            </div>
            <button onClick={()=>setShowReviewModal(true)} className="my-[20px] text-custom-text border py-[10px] px-[24px] rounded-[4px] border-blue transition duration-700 hover:bg-custom-btn hover:text-white">Write a review</button>
            <hr />
            <h1 className="text-[24px] mt-[24px] font-medium">Reviews by {reviews.length} customers</h1>
            {reviews.map((review, index) => {
                return (
                <div key={index} className="my-[40px]">
                    <Rating className="text-custom-text-green" value={review.rating} readOnly={true} precision={0.5} />
                    <h1 className="my-[12px] font-semibold">{review.title}</h1>
                    <p className="text-[#949494] mb-[8px]">{review.userName} | {review.date.toISOString().slice(0, 10).split("-").reverse()[0]} {monthArray[parseInt(review.date.toISOString().slice(0, 10).split("-").reverse()[1])]}, {review.date.toISOString().slice(0, 10).split("-").reverse()[2]}</p>
                    <p className="text-[#949494]">{review.productName}</p>
                    <p className="my-[18px]">{review.review}</p>
                    <hr />
                </div>)
            })}
            <ProductReviewModal visibility={showReviewModal} setVisibility={setShowReviewModal}/>
        </div>
    )
}

export default ProductReviews