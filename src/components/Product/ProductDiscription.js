import productImg from '../../assets/img/s_product.png';

function ProductDiscription() {
  return (
    <div className='flex'>
                            <div>
                                <p className='font-semibold mb-[12px]'>Packing Boxes or Custom Packaging Boxes are the backbones of the product industry!</p>
                                <ul className='list-disc ml-[15px] mb-[24px]'>
                                    <li>Premium craft and white Duplex paper</li>
                                    <li>Custom options available</li>
                                    <li>Premium paper upgrades</li>
                                    <li>Square shape upgrade available</li>
                                    <li>Rounded corner upgrade available</li>
                                    <li>Embossed gloss, raised foil & foil accent upgrades</li>
                                    <li>Quantities from 50 to 10,000+</li>
                                </ul>
                                <p>Your Unique Vision, Our One-of-a-Kind Boxes</p>
                                <p>The packing box, cartons, or packaging boxes is one of the core substances of the product delivery and storage segment. This is an art of various types of folding patterns applied on paperboard or fiberboards. We can’t imagine the supply and distribution of any deliverable items without packaging boxes. Packaging also works as a protection cover for the products. It makes products handy, comfortably, and safely movable for any distance by any transportation mode.</p>
                                <h6 className='font-semibold mt-[24px] mb-[12px]'>For Every Need, Countless Options</h6>
                                <p>From colors to sizes, styles to finishes, our extensive selection ensures you'll find the perfect choice. Explore a multitude of options tailored to your unique preferences and needs, allowing you to create a truly customized packaging solution. Your vision, your way – the possibilities are endless.</p>
                                <h6 className='font-semibold mt-[24px] mb-[12px]'>Seamless Design Upload</h6>
                                <p>Uploading your design has never been easier. Our user-friendly interface and step-by-step process make it a breeze to bring your vision to life. Simply follow the intuitive prompts and watch your artwork come to life on your custom packaging. Your creativity, our simplicity.</p>
                            </div>
                            <img src={productImg} alt="product Image" className='w-[35rem] h-[35rem]' />
                        </div>
  )
}

export default ProductDiscription