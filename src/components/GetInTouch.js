import WhatsappLogo from '../assets/img/whatsappLogo.png';
import { FaLocationDot } from "react-icons/fa6";

function GetInTouch() {
    return (
        <div className=' h-fit p-[24px] border rounded-xl border-lightGray w-[32vw] ml-[12px] md:ml-0 md:w-full md:px-[12px] md:py-[24px]'>

            {/* Heading */}
            <h1 className='text-[32px] font-medium md:text-[14px]'>Get in touch</h1>

            {/* Contact Info */}
            <div className='text-xl flex flex-col md:text-[12px]'>

                {/* Email */}
                <p className='text-custom-text-grey mt-[16px]'>By E-mail:</p>
                <span className='text-custom-text-darkGrey md:leading-3'><a href="mailto:contact@inkprint.in" className='fit-content'>contact@inkprint.in</a></span>

                {/* Mobile Number */}
                <p className='text-custom-text-grey mt-[16px]'>By Phone:</p>
                <span className='text-custom-text-darkGrey md:leading-3'><a href="tel:9289449945" className='fit-content'>+91-928-944-9945 (India)</a></span>
                <p className='text-custom-text-darkGrey md:leading-3'>Open 9AM-6PM from Monday to Friday</p>

                {/* Address */}
                <p className='text-custom-text-grey mt-[16px]'>Address:</p>
                <a target="_blank" href="https://maps.app.goo.gl/7e3MihFmqGz1NXXC6">
                <p className='text-custom-text-darkGrey md:leading-3'>Inkprint.inTurtle Media Pvt. Ltd.,9 DSIDC Sheds, IInd Floor,<br/>
                    Okhla Industrial Area Phase I,<br/>
                    New Delhi – 110020,<br/>
                    India
                </p>
                </a>
                {/* this is map  */}
                <div className='map mt-3 mb-3'>
                    <div className='map_link flex '>
                <a href='https://maps.app.goo.gl/vBuPL8f5jGWxwz4J7' className='flex cursor-pointer'>
                    <FaLocationDot className='text-[#C22B2B] mt-[5px] mr-1'/>
                        <p className='border-b-2 border-[#b0b0b0] text-[#ADADAD]'>Find Us on Google Maps!</p>
                        </a>
                    </div>
                    <div className='map_frame mt-3'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.47025967077!2d77.28077907418209!3d28.525581688931773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce21ce6e39bab%3A0xe68ade6974960577!2sInkprint.in!5e0!3m2!1sen!2sin!4v1700296444548!5m2!1sen!2sin" width="370" height="246"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                {/* Phone Number */}
                <span className='text-custom-text-darkGrey mt-[16px] md:leading-3'><span className='text-custom-text-grey'>Phone</span> <a href="tel:01141327678" className='fit-content'><br/>011 4132 7678</a></span>

                {/* Phone Number */}
                <span className='text-custom-text-darkGrey mt-[16px]'>
                    <span className='text-custom-text-grey md:leading-3'>
                        Contact us on Whatsapp
                    </span>
                    <a target="_blank" href="https://wa.me/919289449945" className='fit-content flex'>
                        <br/>
                        <img src={WhatsappLogo} alt="whatsapp logo" className='w-[24px] h-[24px] mr-[12px]'/>+91-928-944-9945</a>
                </span>
            </div>
        </div>
    )
}

export default GetInTouch;