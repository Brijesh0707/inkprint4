import { useEffect } from "react";
import PageTopNavigation from "../components/PageTopNavigation";
import { Link } from "react-router-dom";
import productImg from "../assets/img/Banner.png";

function About() {
    useEffect(() => {
        // This will always scroll the window to top
        window.scrollTo(0, 0);
    }, [])

    return (

        <div className="md:mx-[12px] mx-[60px] mb-24 text-custom-text-p text-[#2F2F2F]">

            {/* For Navigation */}
            <PageTopNavigation firstRouteLink="/" firstRouteName="Home" secondRouteName="About Us" />

            {/* First Paragraph */}
            <h2 className="md:text-[14px] text-[32px] text-custom-text-p font-medium">About Us</h2>
            <div className="flex bg-[#EDDABA] rounded-[16px] mt-[16px] mb-[48px]">
                <div className="mt-[64px] ml-[64px] mr-[78px]">
                    <h4 className="font-medium text-[24px] mb-[24px]">About Us</h4>
                    <p className="md:text-[12px] text-[18px]">
                        InkPrint, a division of Turtle Media Pvt. Ltd., is a New Delhi-based commercial printing and packaging powerhouse with a global footprint. Our expertise lies in crafting packaging solutions that seamlessly merge aesthetics and functionality, serving clients across all seven continents. We are driven by innovation, investing in cutting-edge technology and design principles to redefine packaging as an art form and a potent brand expression tool. At InkPrint, we envision a world where packaging elevates brand stories, and we're dedicated to making that vision a reality through excellence, creativity, and sustainability.
                    </p>
                </div>
                <img src={productImg} alt="product image" className="w-[572px]"/>
            </div>

            {/* Second Paragraph */}
            <div className="flex flex-row-reverse bg-[#EDDABA] rounded-[16px] mt-[16px] mb-[48px]">
                <div className="mt-[64px] ml-[64px] mr-[78px]">
                    <h4 className="font-medium text-[24px] mb-[24px]">Our Commitment: Quality, Precision, Excellence - Our Promise to You</h4>
                    <p className="md:text-[12px] text-[18px]">
                    At InkPrint, our unwavering commitment is centered on delivering unparalleled quality, exacting precision, and unbridled excellence to our valued clients. We consider each project not merely as a task but as a canvas on which we paint our dedication to perfection. From the moment you entrust us with your printing and packaging needs, our promise is to uphold the highest standards in every aspect of our service. We understand that quality extends beyond the tangible product; it encompasses the entire experience. Thus, we take pride in ensuring that your journey with us is marked by unwavering attention, timely deliveries, and a relentless pursuit of your utmost satisfaction. Our commitment goes beyond the ink and paper; it's a commitment to elevate your brand, foster lasting partnerships, and exceed your expectations in every endeavor.
                    </p>
                </div>
                <img src={productImg} alt="product image" className="w-[572px]"/>
            </div>


            {/* Third Paragraph */}
            <div className="flex bg-[#EDDABA] rounded-[16px] mt-[16px] mb-[48px]">
                <div className="mt-[64px] ml-[64px] mr-[78px]">
                    <h4 className="font-medium text-[24px] mb-[24px]">Award-Winning Excellence: Recognized for Innovation - Silver Award Winner</h4>
                    <p className=" md:text-[12px] text-[18px] mt-[16px] leading-6">
                Our dedication to innovation and excellence has not only set us apart but has also earned us prestigious recognition. Achieving the remarkable feat of winning the Silver Award in the esteemed National IDMA (Indian Digital Media Awards) in 2013, specifically in the "Website-Corporate" category, serves as a testament to our commitment to pushing the boundaries of creativity and technology in the realm of digital media and corporate online presence. This accolade continues to inspire us, driving us to consistently deliver cutting-edge solutions and elevate our standards of excellence for the benefit of our valued clients.
                At InkPrint, we take pride in our commitment to quality assurance. Our stringent process begins with meticulous pre-flight checks, where we scrutinize every detail of your project to ensure perfection. We leave nothing to chance, employing cutting-edge technology to guarantee that your print job meets the highest standards of quality and accuracy. With us, you can trust that your final product will be a flawless representation of your vision.
            </p>
                </div>
                <img src={productImg} alt="product image" className="w-[572px]"/>
            </div>

            {/* Fourth Paragraph */}
            <div className="flex flex-row-reverse bg-[#EDDABA] rounded-[16px] mt-[16px] mb-[48px]">
                <div className="mt-[64px] ml-[64px] mr-[78px]">
                    <h4 className="font-medium text-[24px] mb-[24px]">Elevating Your Packaging Vision</h4>
                    <p className="md:text-[12px] text-[18px] mt-[16px] leading-6">
                    When you choose InkPrint, you're partnering with experts who excel in bringing your unique packaging vision to life. Our extensive range of packaging solutions caters to all your needs, whether you're looking for innovative packaging designs or robust packaging materials. Our team of specialists possesses the skill and knowledge to transform your creative packaging ideas into tangible, high-quality solutions that capture the essence of your brand. We specialize in producing eye-catching packaging materials that set your products apart on the market.
                    </p>
                </div>
                <img src={productImg} alt="product image" className="w-[572px]"/>
            </div>

            {/* Fifth Paragraph */}
            <div className="flex bg-[#EDDABA] rounded-[16px] mt-[16px] mb-[48px]">
                <div className="mt-[64px] ml-[64px] mr-[78px]">
                    <h4 className="font-medium text-[24px] mb-[24px]">Why Choose Us: Your Packaging Partner of Choice</h4>
                    <p className=" md:text-[12px] text-[18px] mt-[16px] leading-6">
                InkPrint stands out as your packaging partner of choice for several compelling reasons. Our unwavering commitment to packaging excellence includes offering a wide array of customizable options to meet your specific packaging needs. We provide versatile business packaging solutions, ensuring that your packaging materials align perfectly with your branding and objectives. Our reliability is unmatched, and we take pride in delivering exceptional customer service throughout your packaging journey. Plus, our cost-effective solutions and flexible payment options make high-quality packaging accessible to businesses of all sizes. Choose InkPrint as your trusted partner to elevate your packaging game.
            </p>
                </div>
                <img src={productImg} alt="product image" className="w-[572px]"/>
            </div>

            {/* Seventh Paragraph */}
            <h4 className="font-medium mt-[22px] mb-[12px] md:text-[12px] text-[18px] md:mb-[8px] md:mt-[12px]">Customization and Consultation: Tailored Solutions for Your Unique Needs</h4>
            <p className="md:text-[12px] text-[18px] mt-[16px] leading-6">
                Every business is unique, and we recognize that. InkPrint offers personalized packages and expert consultations to align our services with your specific requirements. Our dedicated team collaborates closely with you to ensure that your printing solutions are tailored to suit your business preferences, goals, and budget
            </p>

            {/* Eigth Paragraph */}
            <h4 className="font-medium mt-[22px] mb-[12px] md:text-[12px] text-[18px] md:mb-[8px] md:mt-[12px]">Get Started Today: Empowering Your Print Journey</h4>
            <p className="md:text-[12px] text-[18px] mt-[16px] leading-6">
                The journey to exceptional printing and packaging starts here. InkPrint empowers you to transform your ideas into reality. Reach out to us today to embark on a print journey that combines creativity, innovation, and unwavering commitment to quality. Let's work together to make your vision come to life.
            </p>

            {/* Ninth Paragraph */}
            <h4 className="font-medium mt-[22px] mb-[12px] md:text-[12px] text-[18px] md:mb-[8px] md:mt-[12px]">Contact Us</h4>
            <p className="md:text-[12px] text-[18px] mt-[16px] leading-6">
                Ready to start your printing and packaging journey with InkPrint? Our team is here to assist you every step of the way. Get in touch with us for inquiries, consultations, or to place your orders. We're just a message or call away!<br />
                Phone: [Insert Phone Number]<br />
                Email: [Insert Email Address]<br />
                Address: [Insert Physical Address]<br />
                Office Hours: [Insert Operating Hours]<br />
                Social Media: [Insert Links to Social Media Profiles]<br />
                We look forward to hearing from you and helping you achieve exceptional printing and packaging solutions.</p>
            <Link to="/contactus">
                <span className="text-custom-text md:text-[12px] text-lg cursor-pointer">Your success is our priority!</span>
            </Link>
        </div>
    )
}

export default About;