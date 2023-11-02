function GetInTouch() {
    return (
        <div className=' h-fit p-[24px] border rounded-xl border-lightGray w-7/12 ml-[12px] '>

            {/* Heading */}
            <h1 className='text-4xl font-medium'>Get in touch</h1>

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
                <p className='text-custom-text-darkGrey'>Inkprint.inTurtle Media Pvt. Ltd.,9 DSIDC Sheds, IInd Floor,
                    Okhla Industrial Area Phase I,
                    New Delhi – 110020,
                    India
                </p>
                <p>  <a href={"https://maps.app.goo.gl/P1Au7NtprtVs3F2n9"} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm">Open Google Maps</a></p>

                {/* Phone Number */}
                <span className='text-custom-text-darkGrey mt-[16px]'><span className='text-custom-text-grey'>Phone:</span> <a href="tel:01141327678" className='fit-content'>011 4132 7678</a></span>
            </div>
        </div>
    )
}

export default GetInTouch;