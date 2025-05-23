import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

const SaleSection = () => {
  const data = [
    {
      name: "HAVIT HV-G92 Gamepad",
      prices: "$160",
      image:
        "https://dist.contentdriver.com.au/logitech/F310-940-000112/images/f310-hero.png",
    },
    {
      name: "AK-900 Wired Keyboard",
      prices: "$780",
      image:
        "https://e-commercew.netlify.app/assets/wired-keyboard-BAyjGj3P.webp",
    },
    {
      name: "IPS LCD Gaming Monitor",
      prices: "$370",
      image: "https://techmatched.pk/wp-content/uploads/2024/01/1-37.png",
    },
    {
      name: "ASUS FHD Gaming Laptop",
      prices: "$980",
      image:
        "https://www.techstore.net.pk/wp-content/uploads/2024/10/asus-tuf-fa507nur-lp129-ryzen-7-7435hs-rtx-4050-price-in-pakistan-2-600x600.png",
    },
    {
      name: "RGB liquid CPU Cooler",
      prices: "$1980",
      image:
        "https://static3.webx.pk/files/19643/Images/xpg-levante-x-360-black-liquid-cooler-price-in-pakistan-3-19643-1910785-041123095637357.png",
    },
  ];

  return (
    <section className="text-gray-600 body-font border border-gray-300">
      <div className="capitalize flex items-center justify-between px-5 pt-3">
        <h1 className="text-lg text-black font-bold ">Flesh Sales</h1>
        <button
          type="button"
          className="text-black border border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          See All
        </button>
      </div>
      <div className="container px-4 py-6 mx-auto">
        {/* Grid with 3 columns starting from smallest screen */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {data.map((item, index) => (
            <div key={index} className="w-full p-1">
              <div className="group relative h-28 rounded overflow-hidden bg-white shadow-sm">
                <img
                  alt="product"
                  className="object-contain w-full h-full p-2"
                  src={item.image}
                />
                <button className="absolute bottom-0 right-0 left-0 bg-black bg-opacity-80 text-white px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <LocalGroceryStoreOutlinedIcon fontSize="small" /> Add to Cart
                </button>
              </div>
              <div className="mt-1 text-center">
                <h2 className="text-gray-900 text-xs font-medium truncate">
                  {item.name}
                </h2>
                <p className="text-xs">{item.prices}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
