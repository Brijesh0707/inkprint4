import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { FiLink } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { PiMessengerLogoLight } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

function ShareDialog({ visibility, setVisibility }) {
    useEffect(()=>{
        if(visibility)
        {
            document.body.style.overflow = "hidden";
        }
        else
        {
            document.body.style.overflow = "auto";
        }
    }, [visibility])
    function handleShare(arg)
    {
        switch (arg) {
            case 1:
                navigator.clipboard.writeText("text");
                toast.success('Link Copied', {
                    position: 'top-center',
                    autoClose: 3000,
                  });
                break;
            case 4:
                const mailtoLink = `mailto:?body=${encodeURIComponent("inkprint product link")}`;
                window.location.href = mailtoLink;
                break;
            case 5:
                const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent("inkprint product link")}`;
                window.open(whatsappLink, '_blank');
                break;
            case 6:
                const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent("inkprint product link")}`;
                window.open(twitterLink, '_blank');
                break;
            default:
                break;
        }
    }
    return (
        <div className={`${visibility ? 'flex' : 'hidden'}`}>
            <div className='fixed top-0 left-0 h-screen w-screen z-[150] bg-black opacity-60' onClick={()=>setVisibility(!visibility)}></div>
            <div className='absolute top-[25px] right-0 text-black text-[14px] z-[151] bg-white rounded-[16px] p-[16px] flex flex-col items-center'>
                <h1 className="text-[18px] mb-[20px]">Share</h1>
                <button className="flex items-center w-full text-left mb-[6px] hover:bg-[#ADADAD] rounded-[16px] px-[8px] py-[2px] transition duration-300" onClick={()=>{handleShare(1); setVisibility(!visibility)}}>
                    <FiLink className="mr-[12px]"/>
                    Copy link
                </button>
                <button className="flex items-center w-full text-left mb-[6px] hover:bg-[#ADADAD] rounded-[16px] px-[8px] py-[2px] transition duration-300">
                    <CiFacebook className="mr-[12px]"/>
                    Share to Facebook
                </button>
                <button className="flex items-center w-full text-left mb-[6px] hover:bg-[#ADADAD] rounded-[16px] px-[8px] py-[2px] transition duration-300">
                    <PiMessengerLogoLight className="mr-[12px]"/>
                    Share to Messenger
                </button>
                <button className="flex items-center w-full text-left mb-[6px] hover:bg-[#ADADAD] rounded-[16px] px-[8px] py-[2px] transition duration-300" onClick={()=>{handleShare(4); setVisibility(!visibility)}}>
                    <MdOutlineMailOutline className="mr-[12px]"/>
                    Share to Email
                </button>
                <button className="flex items-center w-full text-left mb-[6px] hover:bg-[#ADADAD] rounded-[16px] px-[8px] py-[2px] transition duration-300" onClick={()=>{handleShare(5); setVisibility(!visibility)}}>
                    <BiLogoWhatsapp className="mr-[12px]"/>
                    Share to Whatsapp
                </button>
                <button className="flex items-center w-full text-left mb-[6px] hover:bg-[#ADADAD] rounded-[16px] px-[8px] py-[2px] transition duration-300" onClick={()=>{handleShare(6); setVisibility(!visibility)}}>
                    <FaXTwitter className="mr-[12px]"/>
                    Share to Twitter
                </button>
            </div>
        </div>
    )
}

export default ShareDialog