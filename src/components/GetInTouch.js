import WhatsappLogo from '../assets/img/whatsappLogo.png';

function GetInTouch() {
    return (
        <div className=' h-fit p-[24px] border rounded-xl border-lightGray w-[32vw] ml-[12px] '>

            {/* Heading */}
            <h1 className='text-[32px] font-medium'>Get in touch</h1>

            {/* Contact Info */}
            <div className='text-xl flex flex-col'>

                {/* Email */}
                <p className='text-custom-text-grey mt-[16px]'>By E-mail:</p>
                <span className='text-custom-text-darkGrey'><a href="mailto:contact@inkprint.in" className='fit-content'>contact@inkprint.in</a></span>

                {/* Mobile Number */}
                <p className='text-custom-text-grey mt-[16px]'>By Phone:</p>
                <span className='text-custom-text-darkGrey'><a href="tel:9289449945" className='fit-content'>+91-928-944-9945 (India)</a></span>
                <p className='text-custom-text-darkGrey'>Open 9AM-6PM from Monday to Friday</p>

                {/* Address */}
                <p className='text-custom-text-grey mt-[16px]'>Address:</p>
                <a target="_blank" href="https://maps.app.goo.gl/7e3MihFmqGz1NXXC6">
                <p className='text-custom-text-darkGrey'>Inkprint.inTurtle Media Pvt. Ltd.,9 DSIDC Sheds, IInd Floor,<br/>
                    Okhla Industrial Area Phase I,<br/>
                    New Delhi – 110020,<br/>
                    India
                </p>
                </a>

                {/* Phone Number */}
                <span className='text-custom-text-darkGrey mt-[16px]'><span className='text-custom-text-grey'>Phone</span> <a href="tel:01141327678" className='fit-content'><br/>011 4132 7678</a></span>

                {/* Phone Number */}
                <span className='text-custom-text-darkGrey mt-[16px]'>
                    <span className='text-custom-text-grey'>
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