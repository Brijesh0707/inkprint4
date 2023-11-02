import { useEffect } from "react";
import PageTopNavigation from "../components/PageTopNavigation";

function PrivacyPolicy() {
    useEffect(() => {
        // This will always scroll the window to top
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="md:mx-[16px] mx-[80px] mb-24 text-custom-text-p">

            {/* For Navigation */}
            <PageTopNavigation firstRouteLink="/" firstRouteName="Home" secondRouteName="All Products" />

            {/* Heading */}
            <h2 className="md:text-[12px] text-[32px] mb-2">Privacy policy</h2>

            {/* First Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">What information do we collect?</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey.
                When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address, phone number or email id. You may, however, visit our site anonymously.</p>

            {/* Second Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">What do we use your information for?</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                Any of the information we collect from you may be used in one of the following ways:
                <ol className="list-decimal ml-[20px]">
                    <li>To personalize your experience(your information helps us to better respond to your individual needs)</li>
                    <li>To improve our website(we continually strive to improve our website offerings based on the information and feedback we receive from you)</li>
                    <li>To improve customer service(your information helps us to more effectively respond to your customer service requests and support needs)</li>
                    <li>To process transactions
                        Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</li>
                    <li>To administer a contest, promotion, survey or other site feature</li>
                    <li>To send periodic emails</li>
                </ol>
                The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.
            </p>
            <br />
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                <span className="text-red-500">Note: </span>If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.
            </p>

            {/* Third Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">How do we protect your information?</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
                We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.
                After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.
            </p>

            {/* Fourth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Do we use cookies?</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information
                We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.
            </p>

            {/* Fifth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Do we disclose any information to outside parties?</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
            </p>

            {/* Sixth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Third party links</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
            </p>

            {/* Seventh Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Children’s Online Privacy Protection Act Compliance</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
            </p>

            {/* Eighth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Online Privacy Policy Only</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                Occasionally, This online privacy policy applies only to information collected through our website and not to information collected offline.
            </p>

            {/* Ninth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Your Consent</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                By using our site, you consent to our privacy policy.
            </p>

            {/* Tenth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">Changes to our Privacy Policy</h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                If we decide to change our privacy policy, we will post those changes on this page, and/or update the Privacy Policy modification date below. This policy was last modified on July 2015.
            </p>
        </div>
    )
}

export default PrivacyPolicy