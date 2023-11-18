import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/img/Logo.png";
import Login from "../authentication/Login";
import { FiSearch } from "react-icons/fi";
import {
  BsTelephone,
  BsFillPersonFill,
  BsPerson,
  BsCart3,
} from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import navImg from "../assets/img/navImg.png";
import { BsArrowUpRight } from "react-icons/bs";

import navPaperBag from "../assets/img/navPaperBag.png";
import tissuePapers from "../assets/img/tissuePapers.png";
import navButterPaper from "../assets/img/navButterPaper.png";
import navHangTags from "../assets/img/navHangTags.png";
import navHeaderCards from "../assets/img/navHeaderCards.png";
import navMailerBoxes from "../assets/img/navMailerBoxes.png";
import navPrintedTapes from "../assets/img/navPrintedTapes.png";
import navProductLables from "../assets/img/navProductLabels.png";
import navThankYouCard from "../assets/img/navThankYouCard.png";
import navWrappingCard from "../assets/img/navWrappingCard.png";
import Cart from '../assets/img/cart_icon.png'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react';

import { RxTextAlignJustify } from "react-icons/rx";
import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [bulk, setBulk] = useState(false);
  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);
  const [a4, setA4] = useState(false);
  const [a5, setA5] = useState(false);
  const [a6, setA6] = useState(false);
  const modalRef = useRef();
  const Token = localStorage.getItem("token");
  const RegToken = localStorage.getItem("Register_token");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowLogin(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (Token || RegToken) {
      setShowLogin(false);
    }
  }, [Token, RegToken]);

  return (
    <>
      <div className="shadow-[0_2px_2px_0px_rgba(175,196,12,0.08)] px-[20px] pt-[15px] pb-[7px] fixed top-0 left-0 bg-white z-[100] w-full block md:hidden">
        <div className="w-full">
          <div className="flex justify-between px-[2rem]">
            <Link to="/">
              <div className="logo">
                <img src={Logo} alt="Logo" className="w-[150px] h-[60px]" />
              </div>
            </Link>

            <div className="flex items-center justify-between w-2/3">
              <div className="flex items-center py-[10px] h-[37px] px-[24px] border rounded-full max-w-[33vw] w-[33vw] border-grayMid">
                <input
                  placeholder="Search Products..."
                  className="w-full focus:outline-none"
                />
                <FiSearch className="text-2xl text-custom-text-grey cursor-pointer" />
              </div>
              <div className="flex">
                <div
                  className={`text-custom-text flex justify-end items-center min-w-[260px] px-[20px] transition-all ${bulk ? "hidden" : ""
                    } font-semibold`}
                  onMouseOver={() => setBulk(true)}
                >
                  <BsTelephone className="mr-2" />
                  <span>Contact us for bulk order</span>
                </div>
                <div
                  className={`text-custom-text flex justify-end items-center min-w-[260px] px-[20px] transition-all ${bulk ? "" : "hidden"
                    } font-semibold`}
                  onMouseLeave={() => setBulk(false)}
                >
                  <BsTelephone className="mr-2" />
                  <span>
                    <a href="tel:9772906080">+91 9772 9060 80</a>
                  </span>
                </div>
                {Token || RegToken ? (
                  <button className="border-blue text-[15px] mr-3 border-[1px] rounded-[4px] text-custom-text w-[180px] flex pl-3 pt-[8px] h-[40px] font-medium ">
                    My Account{" "}
                    <BsPerson className="border-blue w-4 h-4   mr-2 ml-2 mt-[3px]" />
                  </button>
                ) : (
                  <button
                    className="bg-custom-btn hover:bg-custom-btn-dark text-white w-[95px] mr-[12px] h-[39px] rounded transition duration-300"
                    onClick={handleLoginClick}
                  >
                    Log in
                  </button>
                )}
                <div className="text-custom-text-green font-semibold cursor-pointer">
                  <img src={Cart} className="w-9 h-7 mt-1 cursor-pointer object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[px] my-[10px]">
          <ul className="flex w-[100%] justify-between text-custom-navbarGrey font-medium">
            <li className="border-r-2 pl-[10px] my-[8px] pr-[1rem]">
              <p className="px-[1px] w-[130px]  pt-[20px] pb-[10px] border-b-2  border-white hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                All Products
              </p>
            </li>
            <li className="px-[1px] py-[8px] text-center">
              <p className="px-[15px] w-[140px] pt-[23px] py-[10px] border-b-2 border-white hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                Visiting Cards
              </p>
            </li>
            <li className="px-[10px] py-[8px]">
              <p className=" w-[168px] mt-[23px] pb-3   hover:border-b-2 hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                Business Essentials
              </p>
            </li>
            <li className=" py-[8px]">
              <p className=" mt-[23px] w-[168px] pb-3 hover:border-b-2 hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                Packaging Printing
              </p>
            </li>
            <li className=" py-[8px]">
              <p className="w-[175px] mt-[23px] pb-3 pl-4 hover:border-b-2 hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                Marketing essentials
              </p>
            </li>
            <li className="px-[10px] py-[8px]">
              <p className="w-[166px] mt-[23px] pb-3 pl-4 hover:border-b-2 hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                Display Product
              </p>
            </li>
            <li className=" py-[8px]">
              <p className="w-[166px] mt-[23px] pb-3 hover:border-b-2 hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                Display Product
              </p>
            </li>
            <li className="px-[10px] py-[8px]">
              <p className="px-[15px] py-[10px] pb-3 hover:border-b-2 hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                Display Product
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block mx-[12px] sticky top-0 left-0 bg-white z-[60]">
        <div className="flex justify-between items-center">
          <div className="flex">
            <img src={Logo} alt="Logo" className="w-[128px]" />
              <button onClick={() => onOpen()}><RxTextAlignJustify className="text-custom-text-darkGrey"/></button>
              <Drawer onClose={onClose} isOpen={isOpen} size="full" placement="left">
                <DrawerOverlay className="bg-white z-[100] overflow-y-auto w-[100vw]">
                  <DrawerContent className="px-[12px] overflow-y-auto w-[100vw] h-fit">
                    <div className="flex items-center justify-between">
                      <img src={Logo} alt="Logo" className="w-[128px]" />
                      <DrawerCloseButton className="text-[13px]" />
                    </div>
                    <div className="bg-custom-btn text-white rounded-[4px] mb-[24px]">
                      <p className="flex items-center justify-center text-[10px]">
                        <BsTelephone className="mr-2" />
                        Contact us for bulk order{" "}
                        <a href="tel:9772906080">&nbsp; +91 9772 9060 80</a>
                      </p>
                    </div>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      onClick={() => {
                        if(a1)
                        {
                          setA1(false);
                        }
                        else
                        {
                          setA1(true);
                          setA2(false);
                          setA3(false);
                          setA4(false);
                          setA5(false);
                          setA6(false);
                        }
                      }}
                      className={`${a1
                        ? "border-b-2 border-blue text-custom-text"
                        : "text-custom-text-darkGrey"
                        } px-[12px] py-[8px] mb-[12px]`}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className="font-semibold text-[12px]"
                      >
                        All Products
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      onClick={() => {
                        if(a2)
                        {
                          setA2(false);
                        }
                        else
                        {
                          setA1(false);
                          setA2(true);
                          setA3(false);
                          setA4(false);
                          setA5(false);
                          setA6(false);
                        }
                      }}
                      className={`${a2
                        ? "border-b-2 border-blue text-custom-text"
                        : "text-custom-text-darkGrey"
                        } px-[12px] py-[8px] mb-[12px]`}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className="font-semibold text-[12px]"
                      >
                        Visiting Cards
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      onClick={() => {
                        if(a3)
                        {
                          setA3(false);
                        }
                        else
                        {
                          setA1(false);
                          setA2(false);
                          setA3(true);
                          setA4(false);
                          setA5(false);
                          setA6(false);
                        }
                      }}
                      className={`${a3
                        ? "border-b-2 border-blue text-custom-text"
                        : "text-custom-text-darkGrey"
                        } px-[12px] py-[8px] mb-[12px]`}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className="font-semibold text-[12px]"
                      >
                        Business Essentials
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      onClick={() => {
                        if(a4)
                        {
                          setA4(false);
                        }
                        else
                        {
                          setA1(false);
                          setA2(false);
                          setA3(false);
                          setA4(true);
                          setA5(false);
                          setA6(false);
                        }
                      }}
                      className={`${a4
                        ? "border-b-2 border-blue text-custom-text"
                        : "text-custom-text-darkGrey"
                        } px-[12px] py-[8px] mb-[12px]`}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className="font-semibold text-[12px]"
                      >
                        Packaging Printing
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <div className="flex mb-[16px]">
                      <div className="flex items-center py-[2px] px-[4px] w-[152px]">
                        <img
                          src={navPaperBag}
                          alt="Paper bag"
                          className="h-[40px] w-[40px]"
                        />
                        <span className="text-[12px] text-custom-text-grey ml-[8px]">
                          Paper Bags
                        </span>
                      </div>
                      <div className="flex items-center py-[2px] px-[4px]">
                        <img
                          src={tissuePapers}
                          alt="tissue papers"
                          className="h-[40px] w-[40px]"
                        />
                        <span className="text-[12px] text-custom-text-grey ml-[8px]">
                          Tissue papers
                        </span>
                      </div>
                    </div>
                    <div className="flex mb-[16px]">
                      <div className="flex items-center py-[2px] px-[4px] w-[152px]">
                        <img
                          src={navPrintedTapes}
                          alt="Paper bag"
                          className="h-[40px] w-[40px]"
                        />
                        <span className="text-[12px] text-custom-text-grey ml-[8px]">
                          Printed tapes
                        </span>
                      </div>
                      <div className="flex items-center py-[2px] px-[4px]">
                        <img
                          src={navHangTags}
                          alt="tissue papers"
                          className="h-[40px] w-[40px]"
                        />
                        <span className="text-[12px] text-custom-text-grey ml-[8px]">
                          Hang tags
                        </span>
                      </div>
                    </div>
                    <div className="flex mb-[16px]">
                      <div className="flex items-center py-[2px] px-[4px] w-[152px]">
                        <img
                          src={navMailerBoxes}
                          alt="Paper bag"
                          className="h-[40px] w-[40px]"
                        />
                        <span className="text-[12px] text-custom-text-grey ml-[8px]">
                          Mailer Boxes
                        </span>
                      </div>
                      <div className="flex items-center py-[2px] px-[4px]">
                        <img
                          src={navHeaderCards}
                          alt="tissue papers"
                          className="h-[40px] w-[40px]"
                        />
                        <span className="text-[12px] text-custom-text-grey ml-[8px]">
                          Header cards/
                          <br /> Bag toppers
                        </span>
                      </div>
                    </div>
                    <div className="flex mb-[16px]">
                      <div className="flex items-center py-[2px] px-[4px] w-[152px]">
                        <img
                          src={navProductLables}
                          alt="Paper bag"
                          className="h-[40px] w-[40px]"
                        />
                        <span className="text-[12px] text-custom-text-grey ml-[8px]">
                          Product labels <br />
                          &amp; Stickers
                        </span>
                      </div>
                      <div className="flex items-center py-[2px] px-[4px]">
                        <img
                          src={navButterPaper}
                          alt="tissue papers"
                          className="h-[40px] w-[40px]"
                        />
                        <span className="text-[12px] text-custom-text-grey ml-[8px]">
                          Printed
                          <br /> butter papers
                        </span>
                      </div>
                    </div>
                    <div className="flex mb-[16px]">
                      <div className="flex items-center py-[2px] px-[4px] w-[152px]">
                        <img
                          src={navThankYouCard}
                          alt="Paper bag"
                          className="h-[40px] w-[40px]"
                        />
                        <span className="text-[12px] text-custom-text-grey ml-[8px]">
                          Thank you cards
                        </span>
                      </div>
                      <div className="flex items-center py-[2px] px-[4px]">
                        <img
                          src={navWrappingCard}
                          alt="tissue papers"
                          className="h-[40px] w-[40px]"
                        />
                        <span className="text-[12px] text-custom-text-grey ml-[8px]">
                          Wrapping
                          <br /> papers
                        </span>
                      </div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      onClick={() => {
                        if(a5)
                        {
                          setA5(false);
                        }
                        else
                        {
                          setA1(false);
                          setA2(false);
                          setA3(false);
                          setA4(false);
                          setA5(true);
                          setA6(false);
                        }
                      }}
                      className={`${a5
                        ? "border-b-2 border-blue text-custom-text"
                        : "text-custom-text-darkGrey"
                        } px-[12px] py-[8px] mb-[12px]`}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className="font-semibold text-[12px]"
                      >
                        Marketing essentials
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      onClick={() => {
                        if(a6)
                        {
                          setA6(false);
                        }
                        else
                        {
                          setA1(false);
                          setA2(false);
                          setA3(false);
                          setA4(false);
                          setA5(false);
                          setA6(true);
                        }
                      }}
                      className={`${a6
                        ? "border-b-2 border-blue text-custom-text"
                        : "text-custom-text-darkGrey"
                        } px-[12px] py-[8px] mb-[12px]`}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className="font-semibold text-[12px]"
                      >
                        Display Product
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <hr className="border-[#D9D9D9] border-t-2"/>
              {Token || RegToken?(<div>Hello</div>):(<div className="flex justify-between items-center text-[12px] px-[12px] py-[20px] mb-[12px] text-custom-text-darkGrey font-semibold"><button onClick={()=>{handleLoginClick();onClose();}}>Login</button><BsArrowRight/></div>)}
              <div className="relative px-[12px] py-[18px] h-[10rem] mt-[100px]">
                <img
                  src={navImg}
                  alt="navbar shopnow img"
                  className="absolute top-0 left-0 w-full h-full"
                />
                <div className="text-[12px] text-white z-10 absolute h-full">
                  <h5 className="font-semibold mb-[12px]">
                    Create Your Unique Custom Box
                  </h5>
                  <p>
                    Tailor-Made Packaging
                    <br /> Solutions for Your Brand
                  </p>
                  <button className="flex items-center justify-between w-[5rem] px-[8px] py-[4px] bg-custom-btn text-[10px] rounded mt-[30px]">
                    Shop Now <BsArrowUpRight />
                  </button>
                </div>
              </div>
                  </DrawerContent>
                </DrawerOverlay>
              </Drawer>
          </div>
          <div className="flex items-center justify-between">
            <FiSearch className="text-custom-text-grey mr-[15px]" />
            <IoMdCart className="text-custom-text-green" />
          </div>
        </div>
        <div className="bg-custom-btn text-white rounded-[4px]">
          <p className="flex items-center justify-center text-[10px]">
            <BsTelephone className="mr-2" />
            Contact us for bulk order{" "}
            <a href="tel:9772906080">&nbsp; +91 9772 9060 80</a>
          </p>
        </div>
      </div>
      {showLogin && (
        <div ref={modalRef}>
          <Login setShowLogin={setShowLogin} />
        </div>
      )}
    </>
  );
};

export default Navbar;
