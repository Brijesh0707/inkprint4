import { useState } from 'react';
import btnPrev from '../../assets/img/btnPrev.png';
import btnNext from '../../assets/img/btnNext.png';
import productImage1 from '../../assets/img/productImage1.png';
import productImage2 from '../../assets/img/productImage2.png';
import productImage3 from '../../assets/img/productImage3.png';
import productImage4 from '../../assets/img/productImage4.png';

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const arr = [productImage1, productImage2, productImage3, productImage4];

function ProductImage() {
    const [data, setData] = useState(arr);
    function rightRotateArray()
    {
        const newArray = [...data];
        const lastElement = newArray.pop();
        newArray.unshift(lastElement);
        setData(newArray);
    }

    function leftRotateArray()
    {
        const newArray = [...data];
        const firstElement = newArray.shift();
        newArray.push(firstElement);
        setData(newArray);
    }
    return (
        <div className="w-[47%]">
            {/* <button onClick={rightRotateArray}>previous</button>
            <div key={data[0]}>
                <img src={data[0]} alt={data[0]}/>
            <p>{data[1]}</p>
            <p>{data[2]}</p>
            <p>{data[3]}</p>
            </div>
            <button onClick={leftRotateArray}>next</button> */}
            <div className='w-[613px] h-[667px] relative'>
                <img src={data[0]} className='h-full w-full' alt={data[0]}/>
                <button onClick={rightRotateArray}><img src={btnPrev} alt={btnPrev} className='w-[32px] h-[32px] absolute top-[50%] left-0'/></button>
                <button onClick={leftRotateArray}><img src={btnNext} alt={btnNext} className='w-[32px] h-[32px] absolute top-[50%] right-0'/></button>
            </div>
            <div className='flex my-[16px]'>
                <img src={data[1]} className='w-[160px] h-[160px] mr-[8px]' alt={data[1]}/>
                <img src={data[2]} className='w-[160px] h-[160px] mr-[8px]' alt={data[2]}/>
                <img src={data[3]} className='w-[160px] h-[160px] mr-[8px]' alt={data[3]}/>
            </div>
            <div className='flex justify-between items-end w-full'>
                <div className='flex flex-col justify-between'>
                    <p>SKU: INK_CustomProductBoxes_13856</p>
                    <p>Category: Box Packaging</p>
                </div>
                <div className='flex text-[24px] text-[#949494]'>
                    <button className='transition duration-700 hover:text-black mr-[9px]'><FaFacebookSquare/></button>
                    <button className='transition duration-700 hover:text-black mr-[9px]'><FaTwitterSquare/></button>
                    <button className='transition duration-700 hover:text-black mr-[9px]'><FaPinterestSquare/></button>
                    <button className='transition duration-700 hover:text-black mr-[9px]'><FaSquareGooglePlus/></button>
                    <button className='transition duration-700 hover:text-black mr-[9px]'><BsLinkedin/></button>
                </div>
            </div>
        </div>
    )
}

export default ProductImage