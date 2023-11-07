import { useEffect } from "react"
import PageTopNavigation from "../components/PageTopNavigation";
import QandA from "../components/QandA";
import { useGetAllTermsQuery } from "../redux/termrtk/TermAndCondition";

function TermsAndConditions() {
    const {data,isError,isLoading} = useGetAllTermsQuery()
    console.log(data)
    useEffect(() => {
        // This will always scroll the window to top
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="md:mx-[16px] mx-[80px] mb-24 text-custom-text-p">

            {/* For Navigation */}
            <PageTopNavigation firstRouteLink="/" firstRouteName="Home" secondRouteName="Terms &amp; conditions" />
            <h1 className='pb-1 md:text[13px] text-[32px] text-black'>Terms & Conditions</h1>

            {data?
                data.map((item,index)=>(
                <QandA  key={index} title={item.title} subject={item.subject}/>
            )):'....LOADING'

            }
            
        </div>
    )
}

export default TermsAndConditions;