import { useState } from "react";
import Header from "../../../components/ProductCategory/Header";
import PageTopNavigation from "../../../components/PageTopNavigation";
import { TbArrowsDownUp } from "react-icons/tb";
import Dialog from "../../../components/ProductCategory/Dialog";
import LeftAccordion from "../../../components/ProductCategory/LeftAccordion";
import AllProductCard from "../../../components/ProductCategory/AllProductCard";
import cardImage1 from "../../../assets/img/allProductCard.png";
import cardImage2 from "../../../assets/img/product1.png";
import cardImage3 from "../../../assets/img/product2.png";
import cardImage4 from "../../../assets/img/product3.png";
import cardImage5 from "../../../assets/img/product4.png";
import cardImage6 from "../../../assets/img/product5.png";
import cardImage7 from "../../../assets/img/product6.png";
import cardImage8 from "../../../assets/img/product7.png";
import cardImage9 from "../../../assets/img/product8.png";
import cardImage10 from "../../../assets/img/product9.png";

const arrayOfObjects = [
  {
    title: 'Candle Box',
    slug: 'candle-box',
    minQty: 100,
    isLiked: true,
    img: cardImage1,
    popularity: 9,
    avgRating: 3.5,
    dateAdded: "09-11-2023",
    basePrice: 300,
  },
  {
    title: 'Paper Bags',
    slug: 'paper-bags',
    minQty: 100,
    isLiked: false,
    img: cardImage2,
    popularity: 10,
    avgRating: 4.5,
    dateAdded: "09-09-2023",
    basePrice: 100,
  },
  {
    title: 'Paper Tapes',
    slug: 'paper-tapes',
    minQty: 100,
    isLiked: true,
    img: cardImage3,
    popularity: 3,
    avgRating: 2.5,
    dateAdded: "09-10-2023",
    basePrice: 200,
  },
]

function PackagePrinting() {
  const [viewModal, setViewModal] = useState(false);
  const [sortType, setSortType] = useState(0);
  const [data, setData] = useState(arrayOfObjects);
  const [loading, setLoading] = useState(false);
  const sortMode = ["default", "popularity", "average rating", "latest", "Low To High", "High to Low"];
  function sortData(query) {
    setLoading(true);
    switch (query) {
      case 0:
        setData(arrayOfObjects);
        break;
      case 1:
        const popularitySortedData = [...data];
        popularitySortedData.sort((a, b) => b.popularity - a.popularity);
        setData(popularitySortedData);
        break;
      case 2:
        const avgRatingSortedData = [...data];
        avgRatingSortedData.sort((a, b) => b.avgRating - a.avgRating);
        setData(avgRatingSortedData);
        break;
      case 3:
        const byDateSortedData = [...data];
        byDateSortedData.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        setData(byDateSortedData);
        break;
      case 4:
        const lowToHighSortedData = [...data];
        lowToHighSortedData.sort((a, b) => a.basePrice - b.basePrice);
        setData(lowToHighSortedData);
        break;
      case 5:
        const highToLowSortedData = [...data];
        highToLowSortedData.sort((a, b) => b.basePrice - a.basePrice);
        setData(highToLowSortedData);
        break;
      default:
        break;
    }
    setLoading(false);
  }
  return (
    <div>
      <Header />
      <div className="flex justify-between mx-[60px] mt-[100px]">
        <LeftAccordion />
        <div className="w-[75%] mt-[30px]">
          <div className="flex justify-between mb-[32px]">
            <h1 className="text-[24px] font-medium">
              Explore all options
            </h1>
            <div className="flex relative">
              <button className="flex items-center h-fit text-custom-text mr-[32px]" onClick={() => setViewModal(!viewModal)}>
                Sort by {sortMode[sortType]} <TbArrowsDownUp className="ml-[10px]" />
              </button>
              <Dialog visibility={viewModal} setVisibility={setViewModal} sortType={sortType} setSortType={setSortType} sortData={sortData} />
              <span>{data.length} products</span>
            </div>
          </div>
          <div className="flex flex-wrap">
            {data.map((item) => {
              return (<AllProductCard key={item.slug} slug={item.slug} title={item.title} minQty={item.minQty} isLiked={item.isLiked} img={item.img} />)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackagePrinting;