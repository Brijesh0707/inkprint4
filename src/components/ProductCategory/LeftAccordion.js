import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function LeftAccordion() {
    const { slug } = useParams();
    function decideColor(arg)
    {
        if(arg===slug)
            return "text-custom-text";
    }
    return (
        <div className='w-[20%]'>
            <Link to="/allproducts" className={decideColor(undefined)}>All Products</Link>
            <Accordion allowToggle defaultIndex={[1]}>
                <AccordionItem className='mt-[16px]'>
                     <Link className='hover:text-custom-text transition duration-300' to="/allproducts/packagingprinting/boxpackaging">
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' className={decideColor("packagingprinting")}>
                                Packaging Printing
                            </Box>
                        </AccordionButton>
                    </Link>
                    <AccordionPanel pb={4} className='mt-[16px] border-l-2 border-grayMid flex flex-col pl-[20px]' style={{overflow: 'hidden', display: 'block', opacity: 1, height: 'auto'}}>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Boxes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Paper Bags</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Printed Tapes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Custom Tissues</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Mailer Boxes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Hang Tags</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Header cards</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Butter Papers</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Product Lables</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300'>Wrapping Tapes</span>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className='mt-[16px]'>
                      <Link className='hover:text-custom-text transition duration-300' to="/allproducts/visitingcards">
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' className={decideColor("visitingcards")}>
                                Visiting Cards
                            </Box>
                        </AccordionButton>
                    </Link>
                    <AccordionPanel pb={4} className='mt-[16px] border-l-2 border-grayMid flex flex-col pl-[20px]'>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Boxes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Paper Bags</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Printed Tapes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Custom Tissues</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Mailer Boxes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Hang Tags</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Header cards</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Butter Papers</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Product Lables</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300'>Wrapping Tapes</span>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem className='mt-[16px]'>
                      <Link className='hover:text-custom-text transition duration-300' to="/allproducts/businessessentials">
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' className={decideColor("businessessentials")}>
                            Business Essentials
                            </Box>
                        </AccordionButton>
                    </Link>
                    <AccordionPanel pb={4} className='mt-[16px] border-l-2 border-grayMid flex flex-col pl-[20px]'>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Boxes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Paper Bags</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Printed Tapes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Custom Tissues</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Mailer Boxes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Hang Tags</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Header cards</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Butter Papers</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Product Lables</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300'>Wrapping Tapes</span>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem className='mt-[16px]'>
                      <Link className='hover:text-custom-text transition duration-300' to="/allproducts/marketingessentials">
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' className={decideColor("marketingessentials")}>
                            Marketing Essentials
                            </Box>
                        </AccordionButton>
                    </Link>
                    <AccordionPanel pb={4} className='mt-[16px] border-l-2 border-grayMid flex flex-col pl-[20px]'>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Boxes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Paper Bags</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Printed Tapes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Custom Tissues</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Mailer Boxes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Hang Tags</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Header cards</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Butter Papers</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Product Lables</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300'>Wrapping Tapes</span>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem className='mt-[16px]'>
                      <Link className='hover:text-custom-text transition duration-300' to="/allproducts/displayproducts">
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' className={decideColor("displayproducts")}>
                            Display Products
                            </Box>
                        </AccordionButton>
                    </Link>
                    <AccordionPanel pb={4} className='mt-[16px] border-l-2 border-grayMid flex flex-col pl-[20px]'>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Boxes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Paper Bags</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Printed Tapes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Custom Tissues</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Mailer Boxes</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Hang Tags</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Header cards</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Butter Papers</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300 mb-[24px]'>Product Lables</span>
                        <span className='cursor-pointer hover:text-custom-text transition duration-300'>Wrapping Tapes</span>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default LeftAccordion