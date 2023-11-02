import WhiteArrow from '../assets/img/white_arrow.png'
import Share from '../assets/img/share_btn.png'
import { useEffect } from 'react';
import PageTopNavigation from '../components/PageTopNavigation';
const Blogs = () => {
    useEffect(() => {
        // This will always scroll the window to top
        window.scrollTo(0, 0);
    }, [])
  return (
 <>
   <div className='ml-10'>
   <PageTopNavigation firstRouteLink="/" firstRouteName="Home" secondRouteName="Blogs"/>
   </div>
    <div className="w-[100%]">
        <div className="sorting flex relative">
            <h1 className='text-[#00A6DB] ml-[950px] pt-10 pb-10'>sorting</h1>
        </div>
        <div className="blogs w-[100%]">
            <div className="blogs_wrapper w-[90%] ml-[65px] flex border border-gray-300 rounded-[24px] mb-3">
                <div className="blogs_image ml-5 pt-3 pb-3">
                    <div className="images w-[280px] h-[180px] bg-[#D9D9D9] mt-2 mb-2 mr-3">

                    </div>
                </div>
                <div className="blogs_detail ">
                    <div className="blogs_heading">
                        <p className="text-2xl pt-4 pl-5">Heading</p>
                    </div>
                    <div className="blogs_date">
                        <p className="text-[#ADADAD] text-xs pt-1 pl-5">11 March 2023</p>
                    </div>
                    <div className="blogs_text w-[90%]  ml-5 mt-1">
                        <p className="text-[#6D6E70] text-base">Lorem ipsum dolor sit amet consectetur. Nunc vulputate est nunc in non pulvinar aliquam. Ut sed posuere mi potenti cursus tellus feugiat. Cras egestas integer id duis enim cras ac. Elit posuere sit aliquam amet nullam..</p>
                    </div>
                    <div className="buttons flex mt-5 ml-[20px]">
                        <div className="read_more">
                            <button className="w-[150px] h-[39px] bg-[#00A6DB] text-white rounded-[4px] flex justify-center items-center font-medium">Read More <img src={WhiteArrow} className='w-2 h-2 ml-2 mt-1' /></button>
                        </div>
                        <div className="blogs_share ml-[10px]">
                        <button className="w-[120px] h-[39px]  text-[#00A6DB] border-2 font-medium border-[#00A6DB] rounded-[4px] flex justify-center items-center">Share <img src={Share} className='w-3 h-3 ml-2'/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blogs_wrapper w-[90%] ml-[65px] flex border border-gray-300 rounded-[24px] mb-3">
                <div className="blogs_image ml-5 pt-3 pb-3">
                    <div className="images w-[280px] h-[180px] bg-[#D9D9D9] mt-2 mb-2 mr-3">

                    </div>
                </div>
                <div className="blogs_detail ">
                    <div className="blogs_heading">
                        <p className="text-2xl pt-4 pl-5">Heading</p>
                    </div>
                    <div className="blogs_date">
                        <p className="text-[#ADADAD] text-xs pt-1 pl-5">11 March 2023</p>
                    </div>
                    <div className="blogs_text w-[90%]  ml-5 mt-1">
                        <p className="text-[#6D6E70] text-base">Lorem ipsum dolor sit amet consectetur. Nunc vulputate est nunc in non pulvinar aliquam. Ut sed posuere mi potenti cursus tellus feugiat. Cras egestas integer id duis enim cras ac. Elit posuere sit aliquam amet nullam..</p>
                    </div>
                    <div className="buttons flex mt-5 ml-[20px]">
                        <div className="read_more">
                            <button className="w-[150px] h-[39px] bg-[#00A6DB] text-white rounded-[4px] flex justify-center items-center font-medium">Read More <img src={WhiteArrow} className='w-2 h-2 ml-2 mt-1' /></button>
                        </div>
                        <div className="blogs_share ml-[10px]">
                        <button className="w-[120px] h-[39px]  text-[#00A6DB] border-2 font-medium border-[#00A6DB] rounded-[4px] flex justify-center items-center">Share <img src={Share} className='w-3 h-3 ml-2'/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blogs_wrapper w-[90%] ml-[65px] flex border border-gray-300 rounded-[24px] mb-3">
                <div className="blogs_image ml-5 pt-3 pb-3">
                    <div className="images w-[280px] h-[180px] bg-[#D9D9D9] mt-2 mb-2 mr-3">

                    </div>
                </div>
                <div className="blogs_detail ">
                    <div className="blogs_heading">
                        <p className="text-2xl pt-4 pl-5">Heading</p>
                    </div>
                    <div className="blogs_date">
                        <p className="text-[#ADADAD] text-xs pt-1 pl-5">11 March 2023</p>
                    </div>
                    <div className="blogs_text w-[90%]  ml-5 mt-1">
                        <p className="text-[#6D6E70] text-base">Lorem ipsum dolor sit amet consectetur. Nunc vulputate est nunc in non pulvinar aliquam. Ut sed posuere mi potenti cursus tellus feugiat. Cras egestas integer id duis enim cras ac. Elit posuere sit aliquam amet nullam..</p>
                    </div>
                    <div className="buttons flex mt-5 ml-[20px]">
                        <div className="read_more">
                            <button className="w-[150px] h-[39px] bg-[#00A6DB] text-white rounded-[4px] flex justify-center items-center font-medium">Read More <img src={WhiteArrow} className='w-2 h-2 ml-2 mt-1' /></button>
                        </div>
                        <div className="blogs_share ml-[10px]">
                        <button className="w-[120px] h-[39px]  text-[#00A6DB] border-2 font-medium border-[#00A6DB] rounded-[4px] flex justify-center items-center">Share <img src={Share} className='w-3 h-3 ml-2'/></button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
 </>
  )
}

export default Blogs