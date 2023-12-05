import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ProductInformation from "../../components/Product/ProductInformation";
import ProductImage from "../../components/Product/ProductImage";
import ProductCustomisation from "../../components/Product/ProductCustomisation";

function Product() {
    const location = useLocation();
    const locationArray = location.pathname.split('/').slice(1);
    return (
        <div className="mt-[195px] mx-[60px]">
            <div className="flex items-center mb-[40px]">
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
            <div className="flex justify-between">
                    <ProductImage/>
                    <ProductCustomisation/>
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