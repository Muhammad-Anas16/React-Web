import SliderSection from "../Components/SlideListSection";
import SaleSection from "../Components/SaleSectionn";
import CetagorySection from "../Components/CetagorySection";
import ProductSection from "../Components/ProductSection";
import NewArrival from "../Components/NewArrival";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <SliderSection />
      <SaleSection />
      <CetagorySection />
      <ProductSection />
      <NewArrival />
      <Footer />
    </div>
  );
};

export default HomePage;