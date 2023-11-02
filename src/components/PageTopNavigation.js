import { Link } from "react-router-dom";

function PageTopNavigation({firstRouteLink, firstRouteName, secondRouteName}) {
    return (
        <div className="md:mt-[6px] md:mb-[10px] py-[4px] mt-8 mb-6 md:text-[10px] text-sm">
            <Link to={firstRouteLink}><span className="text-custom-text-grey mr-3">{firstRouteName}</span></Link>
            <span className="text-custom-text-grey mr-1">&rang;</span>
            <span className="text-custom-text-hero font-semibold">{secondRouteName}</span>
        </div>
    )
}

export default PageTopNavigation;