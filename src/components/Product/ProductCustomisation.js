import { useState } from "react";

import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

function ProductCustomisation() {
    const [paperOption, setPaperOption] = useState(2);
    const [printingOption, setPrintingOption] = useState(1);
    const [foilingOption, setFoilingOption] = useState(2);
    const [embossingOption, setEmbossingOption] = useState(2);
    const [paper2Option, setPaper2Option] = useState(4);
    return (
        <div className='w-[50%]'>
            <div className='flex w-full justify-between mb-[10px]'>
                <h1 className="text-[36px] font-medium">Custom Packaging Boxes</h1>
                <div className='flex text-[32px] text-custom-text'>
                    <button className="mr-[12px]"><IoShareSocialOutline /></button>
                    <button><IoMdHeartEmpty /></button>
                </div>
            </div>
            <h1 className="text-[36px] text-custom-text-green">₹ 14000.00</h1>
            <p className="text-[20px]">Unit price ₹59.60</p>
            <p className="text-[20px]">Dispatched by Friday, September 15, 2023 </p>
            <form className="mt-[32px]" onSubmit={(e)=>e.preventDefault()}>
                <div className="flex justify-between items-center mb-[32px]">
                    <label>Box Size (in inches)</label>
                    <select className="border-[#949494] border outline-none py-[8px] px-[10px] rounded-[8px] w-[60%]">
                        <option>1.18(L) x 1.18(W) x 3.31(H)</option>
                        <option>1.18(L) x 1.18(W) x 3.31(H)</option>
                        <option>1.18(L) x 1.18(W) x 3.31(H)</option>
                        <option>1.18(L) x 1.18(W) x 3.31(H)</option>
                        <option>1.18(L) x 1.18(W) x 3.31(H)</option>
                    </select>
                </div>
                <div className="flex justify-between mb-[32px]">
                    <span>Paper</span>
                    <div className="flex flex-wrap max-w-[60%] w-[60%]">
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${paperOption===1?'border-[#949494] border text-black':'border border-[#DDDDDE] text-[#949494]'}`} onClick={()=>setPaperOption(1)}>SBS C13 300 GSM</button>
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${paperOption===2?'text-black border border-[#949494]':'text-[#949494] border border-[#DDDDDE]'}`} onClick={()=>setPaperOption(2)}>Premium craft brown 300 GSM</button>
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${paperOption===3?'text-black border border-[#949494]':'text-[#949494] border border-[#DDDDDE]'}`} onClick={()=>setPaperOption(3)}>White black duplex 300 GSM</button>
                    </div>
                </div>
                <div className="flex justify-between mb-[32px]">
                    <span>Printing</span>
                    <div className="flex flex-wrap max-w-[60%] w-[60%]">
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${printingOption===1?'border-[#949494] border text-black':'border border-[#DDDDDE] text-[#949494]'}`} onClick={()=>setPrintingOption(1)}>One side full color CMYK (4+1)</button>
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${printingOption===2?'text-black border border-[#949494]':'text-[#949494] border border-[#DDDDDE]'}`} onClick={()=>setPrintingOption(2)}>Both side full color CMYK(4+1)</button>
                    </div>
                </div>
                <div className="flex justify-between mb-[32px]">
                    <span>Foiling</span>
                    <div className="flex flex-wrap max-w-[60%] w-[60%]">
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${foilingOption===1?'border-[#949494] border text-black':'border border-[#DDDDDE] text-[#949494]'}`} onClick={()=>setFoilingOption(1)}>No foiling</button>
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${foilingOption===2?'text-black border border-[#949494]':'text-[#949494] border border-[#DDDDDE]'}`} onClick={()=>setFoilingOption(2)}>Gold Foiling</button>
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${foilingOption===3?'border-[#949494] border text-black':'border border-[#DDDDDE] text-[#949494]'}`} onClick={()=>setFoilingOption(3)}>Blue Foiling</button>
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${foilingOption===4?'text-black border border-[#949494]':'text-[#949494] border border-[#DDDDDE]'}`} onClick={()=>setFoilingOption(4)}>Black Foiling</button>
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${foilingOption===5?'border-[#949494] border text-black':'border border-[#DDDDDE] text-[#949494]'}`} onClick={()=>setFoilingOption(5)}>Silver Foiling</button>
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${foilingOption===6?'text-black border border-[#949494]':'text-[#949494] border border-[#DDDDDE]'}`} onClick={()=>setFoilingOption(6)}>Holographic Foiling</button>
                    </div>
                </div>
                <div className="flex justify-between mb-[32px]">
                    <span>Embossing</span>
                    <div className="flex flex-wrap max-w-[60%] w-[60%]">
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${embossingOption===1?'border-[#949494] border text-black':'border border-[#DDDDDE] text-[#949494]'}`} onClick={()=>setEmbossingOption(1)}>Yes</button>
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${embossingOption===2?'text-black border border-[#949494]':'text-[#949494] border border-[#DDDDDE]'}`} onClick={()=>setEmbossingOption(2)}>No</button>
                    </div>
                </div>
                <div className="flex justify-between mb-[32px]">
                    <span>Paper</span>
                    <div className="flex flex-wrap max-w-[60%] w-[60%]">
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${paper2Option===1?'border-[#949494] border text-black':'border border-[#DDDDDE] text-[#949494]'}`} onClick={()=>setPaper2Option(1)}>One side matt lamination</button>
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${paper2Option===2?'text-black border border-[#949494]':'text-[#949494] border border-[#DDDDDE]'}`} onClick={()=>setPaper2Option(2)}>One side gloss lamination</button>
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${paper2Option===3?'border-[#949494] border text-black':'border border-[#DDDDDE] text-[#949494]'}`} onClick={()=>setPaper2Option(3)}>Spot gloss UV + One side matt lamination</button>
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${paper2Option===4?'text-black border border-[#949494]':'text-[#949494] border border-[#DDDDDE]'}`} onClick={()=>setPaper2Option(4)}>Textured spot UV + One side matt lamination</button>
                        <button className={`rounded-[8px] py-[8px] px-[10px] mr-[16px] mb-[16px] transtion duration-300 hover:border-[#949494] hover:text-black ${paper2Option===5?'border-[#949494] border text-black':'border border-[#DDDDDE] text-[#949494]'}`} onClick={()=>setPaper2Option(5)}>Full hybrid UV coating</button>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-[32px]">
                    <span>Quantity</span>
                    <select className="border-[#949494] border outline-none py-[8px] px-[10px] rounded-[8px] w-[60%]">
                        <option>250</option>
                        <option>500</option>
                        <option>1000</option>
                        <option>1500</option>
                    </select>
                </div>
                <div className="flex justify-between items-center mb-[32px]">
                    <span>Have a design?</span>
                    <input type="file" className=""/>
                </div>
                <button className="bg-custom-btn text-white py-[10px] px-[24px] rounded-[4px] transition delay-300">
                    Add to cart
                </button>
            </form>
        </div>
    )
}

export default ProductCustomisation