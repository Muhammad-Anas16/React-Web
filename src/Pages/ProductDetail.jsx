import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { useParams } from "react-router";
import { saleData } from "../Components/SaleData";

const ProductDetail = () => {
  const { id } = useParams();
  const currentData = saleData.find((data) => data.id == id);

  console.log("currentData :", currentData);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-7 mx-auto">
        <div className="lg:w-3/3 mx-auto flex items-center flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={currentData?.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {currentData?.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {currentData?.name}
            </h1>
            <div className="flex mb-4"></div>
            <p className="leading-relaxed">{currentData?.description}</p>
            {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div> */}
            <div className="flex mt-4">
              <span className="title-font font-medium text-2xl text-gray-900">
                {currentData.prices}.00
              </span>
              <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none rounded cursor-pointer text-center items-center gap-1.5">
                <LocalGroceryStoreOutlinedIcon fontSize="small" /> Add to Cart
              </button>
              {/* <button className="absolute bottom-0 right-0 left-0 bg-black bg-opacity-80 text-white px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <LocalGroceryStoreOutlinedIcon fontSize="small" /> Add to Cart
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
