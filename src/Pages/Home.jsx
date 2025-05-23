
import SliderSection from "../Components/SlideListSection";
import SaleSection from "../Components/SaleSectionn";
import CetagorySection from "../Components/CetagorySection";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <SliderSection />
      <SaleSection />
      <CetagorySection />
    </div>
  );
};

export default HomePage