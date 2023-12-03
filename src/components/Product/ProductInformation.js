import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ProductDiscription from './ProductDiscription';
import ProductAdditionalInformation from './ProductAdditionalInformation';
import ProductFAQ from './ProductFAQ';

function ProductInformation() {
    const [active, setActive] = useState({ a1: true, a2: false, a3: false, a4: false });
    const [expand, setExpand] = useState(false);
    function handleActive(arg) {
        switch (arg) {
            case 1:
                setActive({ a1: true, a2: false, a3: false, a4: false });
                break;
            case 2:
                setActive({ a1: false, a2: true, a3: false, a4: false });
                break;
            case 3:
                setActive({ a1: false, a2: false, a3: true, a4: false });
                break;
            case 4:
                setActive({ a1: false, a2: false, a3: false, a4: true });
                break;
        }
    }
    return (
        <div className={`flex justify-between w-full relative ${expand ? 'max-h-full h-full overflow-visible' : 'max-h-[30rem] h-[30rem] overflow-hidden'}`}>
            <Tabs>
                <TabList>
                    <Tab className={`${active.a1 ? 'border-black' : 'border-white'} border-b-2 py-[14px] px-[10px] text-[20px] mr-[24px]`} onClick={() => handleActive(1)}>Description</Tab>
                    <Tab className={`${active.a2 ? 'border-black' : 'border-white'} border-b-2 py-[14px] px-[10px] text-[20px] mr-[24px]`} onClick={() => handleActive(2)}>Additional information</Tab>
                    <Tab className={`${active.a3 ? 'border-black' : 'border-white'} border-b-2 py-[14px] px-[10px] text-[20px] mr-[24px]`} onClick={() => handleActive(3)}>FAQ</Tab>
                    <Tab className={`${active.a4 ? 'border-black' : 'border-white'} border-b-2 py-[14px] px-[10px] text-[20px] mr-[24px]`} onClick={() => handleActive(4)}>Reviews(0)</Tab>
                </TabList>

                <TabPanels className='mt-[32px] text-[18px]'>
                    <TabPanel>
                        <ProductDiscription/>
                    </TabPanel>
                    <TabPanel>
                        <ProductAdditionalInformation/>
                    </TabPanel>
                    <TabPanel>
                        <ProductFAQ/>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <div className={`w-full absolute ${expand ? 'bottom-[-45px]' : 'bottom-0'} left-0 bg-white px-[24px] py-[10px] flex justify-end z-[10]`}>
                {!expand && <button className='text-custom-text-green flex items-center' onClick={() => setExpand(true)}>View more<IoIosArrowDown className='ml-[12px]' /></button>}
                {expand && <button className='text-custom-text-green flex items-center' onClick={() => setExpand(false)}>View less<IoIosArrowUp className='ml-[12px]' /></button>}
            </div>
        </div>
    )
}

export default ProductInformation