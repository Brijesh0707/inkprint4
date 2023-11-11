import { useEffect } from "react";
import PageTopNavigation from "../components/PageTopNavigation";
import { useGetAllPrivateQuery } from "../redux/policyrtk/PrivatePolicy";
import QandA from "../components/QandA";
function PrivacyPolicy() {
    const {data,isLoading} = useGetAllPrivateQuery()
    useEffect(() => {
        // This will always scroll the window to top
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="md:mx-[16px] mx-[80px] mb-24 text-custom-text-p">

            {/* For Navigation */}
            <PageTopNavigation firstRouteLink="/" firstRouteName="Home" secondRouteName="Privacy Policy" />

            {/* Heading */}
            <h2 className="md:text-[12px] text-[32px] mb-2">Privacy policy</h2>

            {data?
                data.map((item,index)=>(
                    <QandA key={index} title={item.title} subject={item.subject} />
                ))
                    :".....LOADING"
            }

        </div>
    )
}

export default PrivacyPolicy