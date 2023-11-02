import { useEffect } from "react"
import PageTopNavigation from "../components/PageTopNavigation";

function TermsAndConditions() {
    useEffect(() => {
        // This will always scroll the window to top
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="md:mx-[16px] mx-[80px] mb-24 text-custom-text-p">

            {/* For Navigation */}
            <PageTopNavigation firstRouteLink="/" firstRouteName="Home" secondRouteName="Terms &amp; conditions" />

            {/* Heading */}
            <h2 className="md:text-[12px] text-[32px] mb-2">Terms &amp; conditions</h2>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                By placing an order, you are forming a legally binding contract with Inkprint.in, for products and services, and you agree to be bound by the following Terms and Conditions.
                <br />
                Inkprint.in reserves the right to update our Terms and Conditions without notice.</p>

            {/* First Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">
                Payment
            </h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                The fees for Inkprint.in products and services, which include the cost of processing, printing, shipping and/or mailing, and any other charges applicable, are due and payable together with the submission of an order. Inkprint.in requires pre-payment on all orders with the exception of certain customers pre-approved for Credit Terms. All mailing services and postage related fees must be prepaid. Please note that no orders will be mailed until an approved and signed mailing services invoice is returned from the customer authorizing payment. Any amount due to Inkprint.in, which is not paid, may result in non-delivery of the order, and interest charges as 2% per month on late payments. Customers are responsible for all related collection costs, legal fees, and interest. All returned checks will be charged a fee of INR 500. (Cheque option is valid for Indian clients only).
            </p>

            {/* Second Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">
                Color Reproduction & Quality
            </h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                Inkprint.in will meet print industry standards regarding color and quality. The accuracy of each color reproduction is guaranteed to be within a minimum of 90% of the proof approved. Inkprint.in accepts no responsibility whatsoever for color variations between submitted images and the actual artwork or product they represent because of the limitations in printing. Inkprint.in cannot guarantee color matching unless a hard proof is ordered.
                Clients must provide print-ready files suited to the offset printing process. Inkprint.in is not liable for pixilation & blurriness due to low-resolution images provided by the client. Clients are 100% responsible for all text and layouts. Furthermore, Inkprint.in is not responsible for errors and omissions in artwork, either supplied by the client or edited by Inkprint.in, once approved by the client.
                Clients must provide all full-color printing images in CMYK format. Inkprint.in is not responsible for the color shift that occurs in conversions from RGB & Pantone to CMYK color modes. Orders requiring spot colors must be created using PMS colors.
                Over-runs and Under-runs Inkprint.in follows the industry standard of +/- 10% regarding over-runs and under-runs. Overruns or under-runs not to exceed 10% of the amount ordered shall constitute an acceptable delivery. If you receive more prints than you ordered, these are complementary extras that are sent to you “no charge.” Any deficiency shall be credited to your account proportionately. If a required “no less than” quantity is needed, this must be stated when the order is placed.
                Inkprint.in will contact the client (by e-mail or by phone) when errors are detected in supplied files.
                The client will be alerted to the issue and given the following choices:
                <ol className="list-decimal ml-[20px]">
                    <li>Resubmit a corrected file.</li>
                    <li>Request an estimate for Inkprint.in to correct your files.</li>
                </ol>
                This action will require additional payment before your order will proceed.
            </p>

            {/* Third Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">
                Soft & Hard Proofs
            </h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                A soft proof is sent to the client’s email address in PDF format. The soft proof will be completed within one business day once the print-ready files have been uploaded to the order. The client can view it on screen or download and print. The soft proof represents only the design layout, text accuracy, image proportion, and placement; it is not meant for reviewing color accuracy or density. Inkprint.in cannot guarantee color quality unless a hard proof is ordered.
                Hard proof is a full color, one-sided and untrimmed inkjet proof calibrated to our presses and printed on standard semi-gloss proofing paper. Hard proofs are meant to proof color ONLY. We do not run “press proofs” as they are too costly and wasteful to be justified. If you need to see printing on actual paper stock, we recommend that you order samples.
            </p>

            {/* Fourth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">
                Hard proofs will be mailed overnight to the account address
            </h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                Unless otherwise stated in the order notes, within one business day of receiving print-ready files to the order. Hard proofs must be returned to Inkprint.in to initiate order turnaround. If your order is color critical, Inkprint.in strongly suggests you purchase a hard proof.
                When a proof is ready, the client will be notified by e-mail.Any changes to orders must be in writing. Inkprint.in will not proceed with verbal corrections or approvals.
            </p>

            {/* Fifth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">
                Turnaround Time
            </h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                The turnaround time selected by the client begins with online proof approval of our soft proofs or when approved hard proofs are returned to our location. If your job or proof is approved by 5:00 P.M., printing turnaround time begins that business day. For instance, an order placed with a three-day turnaround approved by 5:00 P.M. Wednesday would be completed and shipped after 4:00 P.M. Monday. Please make a note that Inkprint.in’s offices are closed on Saturdays, Sundays, and Holidays. Your selected turnaround time does not include shipping and should be taken into consideration when choosing your method of shipping.
                Printing turnaround for approved orders is guaranteed. If your deadline is not met, our policy is to refund any rush charges or upgrade a future order to include rush services. Only orders with written instructions regarding a specific ship date will be considered for a full refund. The date requested, however, must be achievable with the selected print turnaround.
            </p>

            {/* Sixth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">
                Mailing Services
            </h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                Mailing list(s), while in Inkprint.in’s control, is/are the sole property of the client and shall be used only with the client’s instructions. Once the piece is delivered to the Shipping companies, Inkprint.in’s responsibility ends. Inkprint.in is only responsible for the preparation and delivery of mailing pieces. In no case is Inkprint.in liable for loss of business, incidental or consequential damages, or costs in excess of billing for services related to the specific job.
            </p>

            {/* Seventh Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">
                Shipping & Handling
            </h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                Delays or damages during shipping are the sole responsibility of the carrier providing shipping services. Inkprint.in is not responsible for delays or damages caused during shipping.
            </p>

            {/* Eighth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">
                Shipping In India
            </h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                We offer Surface & Air shipping to all major cities of India & to Metro cities delivery time will be lesser than the rest of India depending upon shipping companies’ connectivity. If your jobs are time critical then you must buy Air shipping options. For saving our customers from shipping errors we use only quality shipping companies for deliveries.
            </p>

            {/* Ninth Paragraph */}
            <h4 className="font-medium my-4 md:text-[12px] text-lg">
                International Shipping
            </h4>
            <p className="text-custom-text-p font-light md:text-[12px] text-lg">
                We support Cargo Shipping Services by Air and by Ships both (sea mode)
            </p>
        </div>
    )
}

export default TermsAndConditions;