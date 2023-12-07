import { Link } from "react-router-dom";
import { Tooltip } from '@chakra-ui/react'
import Logo from '../assets/img/Logo.png';
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Footer() {
    const handleInstagramClick = () => {
        window.location.href = 'https://www.instagram.com/inkprintindia';
      };
    return (
        <>
            <div className="pt-8 px-[15px] pb-[60px] block md:hidden text-[14px] z-[100] text-[#2F2F2F]">
                <h3 className="text-[20px] font-medium mb-[20px] pl-5">
                    Our Products
                </h3>
                <div className="flex justify-between lg:justify-around text-[14px] ml-5 mr-5 md:hidden">
                    <ul>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Monocarton Box Packaging</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Carry Bags</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Custom Tissue Papers</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Gift Vouchers</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Hang Tags</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Header Cards/ Bag Toppers</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Placemats</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Printed Butter Papers</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Printed Packaging Tapes</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Product Labels & Stickers</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Wrapping Papers</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Food Delivery Bags</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Master Cartons</Link>
                        </ol>
                    </ul>
                    <ul>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px] ml-3">
                            <Link to="/">3 Ply Corrugated Boxes </Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px] ml-3">
                            <Link to="/">5 Ply Corrugated Boxes</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px] ml-3">
                            <Link to="/">Bakery Packaging Material</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px] ml-3">
                            <Link to="/">Cake Boxes</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px] ml-3">
                            <Link to="/">Snacks Boxes</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px] ml-3">
                            <Link to="/">Dosa Packaging Box</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px] ml-3">
                            <Link to="/">Rolls Packaging Box</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px] ml-3">
                            <Link to="/">Salad Boxes</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px] ml-3">
                            <Link to="/">Sandwich Boxes</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px] ml-3">
                            <Link to="/">Noodles Boxes</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px] ml-3">
                            <Link to="/">Burger Boxes</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px] ml-3">
                            <Link to="/">Multicolor Corrugated Mailer Boxes</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px] ml-3">
                            <Link to="/">Multicolor Corrugated Product Boxes</Link>
                        </ol>
                    </ul>
                    <ul>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Shredded Paper Fills</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Honey Comb Packaging Rolls</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Packaging Sleeves</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Rigid Gift Boxes/ Paper Board Boxes</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Magnetic Gift Boxes/ Paper Board Boxes</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Sliding Gift Boxes</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Bill Books</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Booklets</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Bookmarks</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Brochures</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Business cards</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Calendars</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Canvas Prints</Link>
                        </ol>
                    </ul>
                    <ul>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Brochures</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Business Cards</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Carbonless Forms</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Catalogs</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Embossed Foil Business Cards</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Embossed Spot UV Business Cards</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Envelopes</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Flyers</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">High Texture Luxury Visiting Cards</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">ID Cards</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Invitation Cards</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Lanyards</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Letterheads</Link>
                        </ol>
                    </ul>
                    <ul>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Magazines</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Medical Prescription Pads</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Menus</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Notebooks</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Notepads</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Postcards</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Posters</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Sandwich Business Cards</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Stickers & Labels</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Ultra Thick Business Cards</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Vinyl Prints & Posters(Large)</Link>
                        </ol>
                        <ol className="hover:text-custom-text transition duration-300 py-[8px]">
                            <Link to="/">Visiting Cards</Link>
                        </ol>
                    </ul>
                </div>
                <div className="flex justify-center mx-[400px] my-[40px]">
                    <hr className="border-t-2 border-green w-full" />
                </div>
                <div className="text-[14px] flex justify-between">
                    <div className="w-1/5 mr-10">
                      <Link to='/'>
                      <img src={Logo} alt="inkprint logo" />
                      </Link>
                        <p>
                            Copyright &copy; 2024 <span className="text-custom-text-green">Inkprint</span>,<br/> All Rights Reserved.
                        </p>
                    </div>
                    <div className="w-1/5">
                        <h3 className="text-[20px] font-medium mb-[20px] text-black">
                            Information
                        </h3>
                        <ul>
                            <ol className="mb-[16px] hover:text-custom-text transition duration-300">
                                <Link to="/aboutus">About Us</Link>
                            </ol>
                            <ol className="mb-[16px] hover:text-custom-text transition duration-300">
                                <Link to="/contactus">Contact Us</Link>
                            </ol>
                            <ol className="mb-[16px] hover:text-custom-text transition duration-300">
                                <Link to="/blogs">Blog</Link>
                            </ol>
                            <ol className="mb-[16px] hover:text-custom-text transition duration-300">
                                <Link to="/privacypolicy">Privacy Policy</Link>
                            </ol>
                            <ol className="mb-[16px] hover:text-custom-text transition duration-300">
                                <Link to="/termsandconditions">Terms &amp; Conditions</Link>
                            </ol>
                        </ul>
                    </div>
                    <div className="w-1/5">
                        <h3 className="text-[20px] font-medium mb-[20px] text-black">
                            My Account
                        </h3>
                        <ul>
                            <ol className="mb-[16px] hover:text-custom-text transition duration-300">
                                <Link to="/">Account Details</Link>
                            </ol>
                            <ol className="mb-[16px] hover:text-custom-text transition duration-300">
                                <Link to="/">Orders</Link>
                            </ol>
                            <ol className="mb-[16px] hover:text-custom-text transition duration-300">
                                <Link to="/">Wishlist</Link>
                            </ol>
                            <ol className="mb-[16px] hover:text-custom-text transition duration-300">
                                <Link to="/">Cart</Link>
                            </ol>
                        </ul>
                    </div>
                    <div className="w-1/5">
                        <h3 className="text-[20px] pl-2 font-medium mb-[20px] text-black">
                            Follow Us On
                        </h3>
                        <ul className="flex  text-[25px]"> 
                            <ol className=" mr-[13px]">
                                <Tooltip label="instagram" className="bg-black text-white text-[12px] px-[2px]">
                                    <Link to="https://www.instagram.com/inkprintindia/">
                                        <AiFillInstagram className="text-[#2F2F2F] hover:text-custom-text transition duration-300"/>
                                    </Link>
                                </Tooltip>
                            </ol>

                            <ol className="mr-[13px]">
                                <Tooltip label="facebook" className="bg-black text-white text-[12px] px-[2px]">
                                    <Link to="https://www.facebook.com/inkprintdotin/">
                                        <AiFillFacebook className="text-[#2F2F2F] hover:text-custom-text transition duration-300"/>
                                    </Link>
                                </Tooltip>
                            </ol>
                            <ol className="mr-[13px]">
                                <Tooltip label="linkedin " className="bg-black text-white text-[12px] px-[2px]">
                                    <Link to="https://www.linkedin.com/company/turtle-media/">
                                    <FaLinkedin className="text-[#2F2F2F] hover:text-custom-text transition duration-300 "/>

                                    </Link>
                                </Tooltip>
                            </ol>

                            <ol className="mr-[13px]">
                                <Tooltip label="youtube" className="bg-black text-white text-[12px] px-[2px]">
                                    <Link to="https://www.youtube.com/channel/UCeMSYFOa54p2ChOOUPlPjpA">
                                        <TfiYoutube className="text-[#2F2F2F] hover:text-custom-text transition duration-300 "/>
                                    </Link>
                                </Tooltip>
                            </ol>
                        </ul>
                    </div>
                    <div className="w-1/5 text-[#2F2F2F]">
                        <h3 className="text-[20px] font-medium mb-[20px]">
                            Address
                        </h3>
                        <p>
                            Turtle Media Pvt. Ltd., 9 DSIDC Sheds, IInd Floor, Okhla Industrial Area Phase I,
                            New Delhi - 110020, India
                        </p>
                        <p className="py-[10px]">
                            <span className="font-semibold">
                                Phone:
                            </span>
                            <a href="tel:9772906080"> +91-977-290-6080 (India)</a>
                        </p>
                        <p>
                            <span className="font-semibold">Email: </span>
                            <a href="mailto:contact@inkprint.in">Contact@Inkprint.In</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:hidden hidden p-[16px]">
                <div>
                    <h4 className="text-[14px] font-semibold text-custom-text-darkGrey">Our Products</h4>
                    <div className="flex justify-between text-[8px]">
                        <div>
                            <ul>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Monocarton Box Packaging</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Carry Bags</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Custom Tissue Papers</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Gift Vouchers</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Hang Tags</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Header Cards/ Bag Toppers</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Placemats</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Printed Butter Papers</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Printed Packaging Tapes</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Product Labels & Stickers</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Wrapping Papers</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Food Delivery Bags</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Master Cartons</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">3 Ply Corrugated Boxes </Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">5 Ply Corrugated Boxes</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Bakery Packaging Material</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Cake Boxes</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Snacks Boxes</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Dosa Packaging Box</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Rolls Packaging Box</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Salad Boxes</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Sandwich Boxes</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Noodles Boxes</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Burger Boxes</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Multicolor Corrugated Mailer Boxes</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Multicolor Corrugated Product Boxes</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Shredded Paper Fills</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Honey Comb Packaging Rolls</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Packaging Sleeves</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Rigid Gift Boxes/ Paper Board Boxes</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Magnetic Gift Boxes/ Paper Board Boxes</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Sliding Gift Boxes</Link>
                                </ol>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Bill Books</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Booklets</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Bookmarks</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Brochures</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Business cards</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Calendars</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Canvas Prints</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Brochures</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Business Cards</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Carbonless Forms</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Catalogs</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Embossed Foil Business Cards</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Embossed Spot UV Business Cards</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Envelopes</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Flyers</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">High Texture Luxury Visiting Cards</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">ID Cards</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Invitation Cards</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Lanyards</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Letterheads</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Magazines</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Medical Prescription Pads</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Menus</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Notebooks</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Notepads</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Postcards</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Posters</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Sandwich Business Cards</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Stickers & Labels</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Ultra Thick Business Cards</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Vinyl Prints & Posters(Large)</Link>
                                </ol>
                                <ol className="text-custom-text-grey hover:text-custom-text-green transition duration-300 py-[6px] font-light">
                                    <Link to="/">Visiting Cards</Link>
                                </ol>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center mx-[10px] my-[40px]">
                        <hr className="border-t-2 border-green w-1/3" />
                    </div>
                    <div className="flex">
                        <div className="w-[200px]">
                            <h4 className="text-[14px] font-semibold text-custom-text-darkGrey mb-[10px]">Information</h4>
                            <ul>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300  text-[8px] text-custom-text-grey">
                                <Link to="/aboutus">About Us</Link>
                            </ol>
                            <ol className="mb-[06px] hover:text-custom-text-green transition duration-300  text-[8px] text-custom-text-grey">
                                <Link to="/contactus">Contact Us</Link>
                            </ol>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300  text-[8px] text-custom-text-grey">
                                <Link to="/blogs">Blog</Link>
                            </ol>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300  text-[8px] text-custom-text-grey">
                                <Link to="/privacypolicy">Privacy Policy</Link>
                            </ol>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300  text-[8px] text-custom-text-grey">
                                <Link to="/termsandconditions">Terms &amp; Conditions</Link>
                            </ol>
                        </ul>
                        </div>
                        <div>
                        <h4 className="text-[14px] font-semibold text-custom-text-darkGrey mb-[10px]">My Account</h4>
                        <ul>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300 text-[8px] text-custom-text-grey">
                                <Link to="/">Account Details</Link>
                            </ol>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300 text-[8px] text-custom-text-grey">
                                <Link to="/">Orders</Link>
                            </ol>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300 text-[8px] text-custom-text-grey">
                                <Link to="/">Wishlist</Link>
                            </ol>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300 text-[8px] text-custom-text-grey">
                                <Link to="/">Cart</Link>
                            </ol>
                        </ul>
                        </div>
                    </div>
                    <div className="mt-[24px] text-custom-text-grey text-[8px] w-3/4">
                        <h4 className="text-[14px] font-semibold text-custom-text-darkGrey mb-[10px]">Address</h4>
                        <p>Turtle Media Pvt. Ltd., 9 DSIDC Sheds, IInd Floor, Okhla Industrial Area Phase I, New Delhi - 110020, India</p>
                        <p className="py-[8px]">
                            <span className="font-medium">
                                Phone:
                            </span>
                            <a href="tel:9772906080"> +91-977-290-6080 (India)</a>
                        </p>
                        <p>
                            <span className="font-medium">Email: </span>
                            <a href="mailto:contact@inkprint.in">Contact@Inkprint.In</a>
                        </p>
                    </div>
                    <div className="mt-[30px] flex">
                        <div>
                            <img src={Logo} alt="logo" className="w-[78px]"/>
                            
                            <p className="text-custom-text-grey text-[8px] w-10/12">
                            Copyright &copy; 2023 <span className="text-custom-text-green">Inkprint</span>, All Rights Reserved.
                        </p>
                        </div>
                        <div>
                            <h4 className="text-[14px] font-semibold text-custom-text-darkGrey mb-[10px]">Follow Us On</h4>
                            <div>
                            <ul className="flex text-[16px] text-custom-text-grey">
                            
                            <ol className="hover:text-custom-text-green transition duration-300 mr-[10px]" onClick={handleInstagramClick}><AiFillInstagram /></ol>
                            
                            <ol className="hover:text-custom-text-green transition duration-300 mr-[10px]"><Link to="/"><AiFillFacebook /></Link></ol>
                           <Link to="https://youtu.be/hgJnnMcSQNA?si=kyrlysE-zI5G34T8"><ol className="hover:text-custom-text-green transition duration-300 mr-[10px]"><TfiYoutube /></ol></Link>
                            
                        </ul>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            {/* this section for mobile footer */}
            <div className="w-[100%] hidden md:block">
            <div className="w-[100%] mt-10 pl-5 mb-6">
                <h1 className="text-[15px] text-black font-medium">Products & Categories</h1>
            </div>
               <div className="w-[60vw]">
              <Accordion>
              <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-[14px]">Printing Packaging</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
              </Accordion>
              <Accordion>
              <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <Typography className="text-[14px]">Visiting cards</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
              </Accordion>
              <Accordion>
              <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <Typography className="text-[14px]">Business Essentials</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
              </Accordion>
              <Accordion>
              <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <Typography className="text-[14px]">Marketing Essentials</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
              </Accordion>
              <Accordion>
              <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography className="text-[14px]">Display Products</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
              </Accordion>
               </div>

               <div className="flex justify-center mx-[10px] my-[40px] ">
                        <hr className="border-t-2 border-green w-1/3" />
                    </div>
                    <div className="flex ml-[5vw]">
                        <div className="w-[200px]">
                            <h4 className="text-[14px] font-semibold text-custom-text-darkGrey mb-[10px]">Information</h4>
                            <ul>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300  text-[8px] text-custom-text-grey">
                                <Link to="/aboutus">About Us</Link>
                            </ol>
                            <ol className="mb-[06px] hover:text-custom-text-green transition duration-300  text-[8px] text-custom-text-grey">
                                <Link to="/contactus">Contact Us</Link>
                            </ol>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300  text-[8px] text-custom-text-grey">
                                <Link to="/blogs">Blog</Link>
                            </ol>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300  text-[8px] text-custom-text-grey">
                                <Link to="/privacypolicy">Privacy Policy</Link>
                            </ol>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300  text-[8px] text-custom-text-grey">
                                <Link to="/termsandconditions">Terms &amp; Conditions</Link>
                            </ol>
                        </ul>
                        </div>
                        <div className="">
                        <h4 className="text-[14px] font-semibold text-custom-text-darkGrey mb-[10px]">My Account</h4>
                        <ul>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300 text-[8px] text-custom-text-grey">
                                <Link to="/">Account Details</Link>
                            </ol>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300 text-[8px] text-custom-text-grey">
                                <Link to="/">Orders</Link>
                            </ol>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300 text-[8px] text-custom-text-grey">
                                <Link to="/">Wishlist</Link>
                            </ol>
                            <ol className="mb-[10px] hover:text-custom-text-green transition duration-300 text-[8px] text-custom-text-grey">
                                <Link to="/">Cart</Link>
                            </ol>
                        </ul>
                        </div>
                    </div>
                    <div className="mt-[24px] text-custom-text-grey text-[8px] w-3/4 ml-[5vw]">
                        <h4 className="text-[14px] font-semibold text-custom-text-darkGrey mb-[10px]">Address</h4>
                        <p>Turtle Media Pvt. Ltd., 9 DSIDC Sheds, IInd Floor, Okhla Industrial Area Phase I, New Delhi - 110020, India</p>
                        <p className="py-[8px]">
                            <span className="font-medium">
                                Phone:
                            </span>
                            <a href="tel:9772906080"> +91-977-290-6080 (India)</a>
                        </p>
                        <p>
                            <span className="font-medium">Email: </span>
                            <a href="mailto:contact@inkprint.in">Contact@Inkprint.In</a>
                        </p>
                    </div>
                    <div className="mt-[30px] flex ml-[5vw] mb-[2vh]">
                        <div>
                            <img src={Logo} alt="logo" className="w-[78px]"/>
                            
                            <p className="text-custom-text-grey text-[8px] w-10/12">
                            Copyright &copy; 2023 <span className="text-custom-text-green">Inkprint</span>, All Rights Reserved.
                        </p>
                        </div>
                        <div>
                            <h4 className="text-[14px] font-semibold text-custom-text-darkGrey mb-[10px]">Follow Us On</h4>
                            <div>
                            <ul className="flex text-[16px] text-custom-text-grey">
                            
                            <ol className="hover:text-custom-text-green transition duration-300 mr-[10px]" onClick={handleInstagramClick}><AiFillInstagram /></ol>
                            
                            <ol className="hover:text-custom-text-green transition duration-300 mr-[10px]"><Link to="/"><AiFillFacebook /></Link></ol>
                           <Link to="https://youtu.be/hgJnnMcSQNA?si=kyrlysE-zI5G34T8"><ol className="hover:text-custom-text-green transition duration-300 mr-[10px]"><TfiYoutube /></ol></Link>
                            
                        </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Footer