import { useEffect } from "react";
import PageTopNavigation from "../components/PageTopNavigation";
import { Link } from "react-router-dom";

function About() {
    useEffect(() => {
        // This will always scroll the window to top
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="md:mx-[16px] mx-[80px] mb-24 text-custom-text-p">

            {/* For Navigation */}
            <PageTopNavigation firstRouteLink="/" firstRouteName="Home" secondRouteName="About Us"/>

            {/* First Paragraph */}
            <h2 className="md:text-[12px] text-[32px] mb-2">About Us</h2>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                InkPrint, a division of Turtle Media Pvt. Ltd., is a New Delhi-based commercial printing and packaging powerhouse with a global footprint. Our expertise lies in crafting packaging solutions that seamlessly merge aesthetics and functionality, serving clients across all seven continents. We are driven by innovation, investing in cutting-edge technology and design principles to redefine packaging as an art form and a potent brand expression tool. At InkPrint, we envision a world where packaging elevates brand stories, and we're dedicated to making that vision a reality through excellence, creativity, and sustainability.
            </p>

            {/* Second Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Our Commitment: Quality, Precision, Excellence - Our Promise to You</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                At InkPrint, our unwavering commitment is centered on delivering unparalleled quality, exacting precision, and unbridled excellence to our valued clients. We consider each project not merely as a task but as a canvas on which we paint our dedication to perfection. From the moment you entrust us with your printing and packaging needs, our promise is to uphold the highest standards in every aspect of our service. We understand that quality extends beyond the tangible product; it encompasses the entire experience. Thus, we take pride in ensuring that your journey with us is marked by unwavering attention, timely deliveries, and a relentless pursuit of your utmost satisfaction. Our commitment goes beyond the ink and paper; it's a commitment to elevate your brand, foster lasting partnerships, and exceed your expectations in every endeavor.
            </p>


            {/* Third Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Award-Winning Excellence: Recognized for Innovation - Silver Award Winner</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                Our dedication to innovation and excellence has not only set us apart but has also earned us prestigious recognition. Achieving the remarkable feat of winning the Silver Award in the esteemed National IDMA (Indian Digital Media Awards) in 2013, specifically in the "Website-Corporate" category, serves as a testament to our commitment to pushing the boundaries of creativity and technology in the realm of digital media and corporate online presence. This accolade continues to inspire us, driving us to consistently deliver cutting-edge solutions and elevate our standards of excellence for the benefit of our valued clients.
                At InkPrint, we take pride in our commitment to quality assurance. Our stringent process begins with meticulous pre-flight checks, where we scrutinize every detail of your project to ensure perfection. We leave nothing to chance, employing cutting-edge technology to guarantee that your print job meets the highest standards of quality and accuracy. With us, you can trust that your final product will be a flawless representation of your vision.
            </p>

            {/* Fourth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Elevating Your Packaging Vision</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                When you choose InkPrint, you're partnering with experts who excel in bringing your unique packaging vision to life. Our extensive range of packaging solutions caters to all your needs, whether you're looking for innovative packaging designs or robust packaging materials. Our team of specialists possesses the skill and knowledge to transform your creative packaging ideas into tangible, high-quality solutions that capture the essence of your brand. We specialize in producing eye-catching packaging materials that set your products apart on the market.
            </p>

            {/* Fifth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Why Choose Us: Your Packaging Partner of Choice</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                InkPrint stands out as your packaging partner of choice for several compelling reasons. Our unwavering commitment to packaging excellence includes offering a wide array of customizable options to meet your specific packaging needs. We provide versatile business packaging solutions, ensuring that your packaging materials align perfectly with your branding and objectives. Our reliability is unmatched, and we take pride in delivering exceptional customer service throughout your packaging journey. Plus, our cost-effective solutions and flexible payment options make high-quality packaging accessible to businesses of all sizes. Choose InkPrint as your trusted partner to elevate your packaging game.
            </p>

       
            

            {/* Seventh Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Customization and Consultation: Tailored Solutions for Your Unique Needs</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                Every business is unique, and we recognize that. InkPrint offers personalized packages and expert consultations to align our services with your specific requirements. Our dedicated team collaborates closely with you to ensure that your printing solutions are tailored to suit your business preferences, goals, and budget
            </p>

            {/* Eigth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Get Started Today: Empowering Your Print Journey</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                The journey to exceptional printing and packaging starts here. InkPrint empowers you to transform your ideas into reality. Reach out to us today to embark on a print journey that combines creativity, innovation, and unwavering commitment to quality. Let's work together to make your vision come to life.
            </p>

            {/* Ninth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Contact Us</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                Ready to start your printing and packaging journey with InkPrint? Our team is here to assist you every step of the way. Get in touch with us for inquiries, consultations, or to place your orders. We're just a message or call away!<br/>
                Phone: [Insert Phone Number]<br/>
                Email: [Insert Email Address]<br/>
                Address: [Insert Physical Address]<br/>
                Office Hours: [Insert Operating Hours]<br/>
                Social Media: [Insert Links to Social Media Profiles]<br/>
                We look forward to hearing from you and helping you achieve exceptional printing and packaging solutions.</p>
                <Link to="/contactus">
            <span className="text-custom-text md:text-[12px] text-lg cursor-pointer">Your success is our priority!</span>
            </Link>
        </div>
    )
}

export default About;