import { useEffect } from "react";


function Dialog({ visibility, setVisibility, setSortType, sortData }) {
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
    return (
        <div className={`${visibility ? 'flex' : 'hidden'}`}>
            <div className={`fixed top-0 left-0 w-screen h-screen z-[150] bg-black opacity-60`} onClick={() => setVisibility(!visibility)}></div>
            <div className="z-[151] bg-white absolute top-[30px] left-[-50px] px-[12px] py-[16px] flex flex-col items-start w-[15rem] rounded-[12px]">
                <button className="mb-[16px] hover:bg-[#ADADAD] transition duration-300 w-full text-left px-[2px]" onClick={()=>{setSortType(0); setVisibility(!visibility); sortData(0)}}>Default sorting</button>
                <button className="mb-[16px] hover:bg-[#ADADAD] transition duration-300 w-full text-left px-[2px]" onClick={()=>{setSortType(1); setVisibility(!visibility); sortData(1)}}>Sort by popularity</button>
                <button className="mb-[16px] hover:bg-[#ADADAD] transition duration-300 w-full text-left px-[2px]" onClick={()=>{setSortType(2); setVisibility(!visibility); sortData(2)}}>Sort by average rating</button>
                <button className="mb-[16px] hover:bg-[#ADADAD] transition duration-300 w-full text-left px-[2px]" onClick={()=>{setSortType(3); setVisibility(!visibility); sortData(3)}}>Sort by latest</button>
                <button className="mb-[16px] hover:bg-[#ADADAD] transition duration-300 w-full text-left px-[2px]" onClick={()=>{setSortType(4); setVisibility(!visibility); sortData(4)}}>Sort by Price: Low to high</button>
                <button className="hover:bg-[#ADADAD] transition duration-300 w-full text-left px-[2px]" onClick={()=>{setSortType(5); setVisibility(!visibility); sortData(5)}}>Sort by Price: High to low</button>
            </div>
        </div>
    )
}

export default Dialog