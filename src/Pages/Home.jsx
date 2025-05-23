
import SliderSection from "../Components/SlideListSection";
import SaleSection from "../Components/SaleSectionn";
import CetagorySection from "../Components/CetagorySection";
import ProductSection from "../Components/ProductSection";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <SliderSection />
      <SaleSection />
      <CetagorySection />
      <ProductSection />
    </div>
  );
};

export default HomePage