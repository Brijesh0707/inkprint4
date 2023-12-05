import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react';

function ProductFAQ() {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem className='border-b-2'>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' className='text-[18px] font-semibold my-[20px]'>
                            What is the minimum order quantity for custom boxes?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className='mb-[16px] text-[18px]'>
                    About Custom packaging box
                    Minimum order quantities can vary, but they are typically designed to accommodate small businesses and startups. Contact our team for specific details.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem className='border-b-2'>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' className='text-[18px] font-semibold my-[20px]'>
                            How long does it take to receive custom boxes after ordering?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className='mb-[16px] text-[18px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem className='border-b-2'>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' className='text-[18px] font-semibold my-[20px]'>
                            Can I get a sample of my custom box before placing a bulk order?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className='mb-[16px] text-[18px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem className='border-b-2'>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' className='text-[18px] font-semibold my-[20px]'>
                            Do you offer eco-friendly packaging options?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className='mb-[16px] text-[18px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem className='border-b-2'>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' className='text-[18px] font-semibold my-[20px]'>
                            Can I make changes to my design after it's been finalized?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className='mb-[16px] text-[18px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem className='border-b-2'>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' className='text-[18px] font-semibold my-[20px]'>
                            Can I use my own design for custom packaging?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className='mb-[16px] text-[18px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default ProductFAQ