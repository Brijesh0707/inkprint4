import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ProductInformation from "../../components/Product/ProductInformation";

function Product() {
    const location = useLocation();
    const locationArray = location.pathname.split('/').slice(1);
    return (
        <div className="mt-[195px] mx-[60px]">
            <div className="flex items-center">
                <Link to="/">Home</Link>
                <IoIosArrowForward className="text-[#949494] mx-[16px]"/>
                {locationArray.map((route, index) => {
                    return (
                        <div className="flex items-center" key={route}>
                            <Link to="/">{route}</Link>
                            {index + 1 === locationArray.length ? '' : <IoIosArrowForward  className="text-[#949494] mx-[16px]"/>}
                        </div>
                    )
                })}
            </div>
            <div>
                <div>

                </div>
                <div>
                    <h1>Custom Packaging Boxes</h1>
                    <h1>₹ 14000.00</h1>
                    <p>Unit price ₹59.60</p>
                    <p>Dispatched by Friday, September 15, 2023</p>
                </div>
            </div>
            <div>
                <div>
                <ProductInformation/>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Product;