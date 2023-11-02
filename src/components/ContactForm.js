import InputField from "./InputField";
import CtnBtn from "./CtnBtn";

function ContactForm() {
    return (
            <div className="p-[24px] border rounded-xl border-blue w-full">
                <h1 className="text-4xl font-medium">Contact us</h1>
                <div className="flex">
                    <InputField name="firstName" label="First Name" type="text" placeholder="John" require />
                    <InputField name="lastName" label="Last Name" type="text" placeholder="Doe" require />
                </div>
                <div className="flex">
                    <InputField name="email" label="Email" type="email" placeholder="John@abc.com" require />
                    <InputField name="subject" label="Subject" type="text" placeholder="Subject" require />
                </div>
                <p className="text-[16px] text-custom-text-darkGrey mt-[24px] mb-[10px]">Message</p>
                <textarea rows="5" placeholder="Any message for us.." className="border border-grayLight py-[6px] px-[12px] rounded focus:outline-none mb-[24px] w-full" />
                <CtnBtn className="mt-[32px] py-[10px] px-[24px] bg-custom-bg-gray text-white rounded cursor-pointer">
                    Send Email
                </CtnBtn>
            </div>
    )
}

export default ContactForm