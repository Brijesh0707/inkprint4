import { useEffect } from "react";
import PageTopNavigation from "../components/PageTopNavigation";
import ContactForm from "../components/ContactForm";
import GetInTouch from "../components/GetInTouch";

function Contact() {
  useEffect(() => {
    // This will always scroll the window to top
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="mx-[60px] mb-24 w-[92%] md:mx-[12px]">

      {/* For Navigation */}
      <PageTopNavigation firstRouteLink="/" firstRouteName="Home" secondRouteName="Contact Us" />
      <div className="flex justify-between md:flex-col">

        {/* Contact us component*/}
        <ContactForm />

        {/* Get in touch component */}
        <GetInTouch />
      </div>
    </div>
  )
}

export default Contact