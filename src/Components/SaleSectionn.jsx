import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

const SaleSection = () => {
const data = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    prices: "$160",
    brand: "HAVIT",
    category: "Gamepad",
    stock: 25,
    rating: 4.5,
    reviews: 132,
    description: "Ergonomic USB gamepad with dual vibration and turbo function, ideal for PC gaming.",
    image: "https://dist.contentdriver.com.au/logitech/F310-940-000112/images/f310-hero.png",
    features: [
      "Dual vibration feedback",
      "Ergonomic design",
      "USB wired connection",
      "Compatible with Windows"
    ]
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    prices: "$780",
    brand: "AK",
    category: "Keyboard",
    stock: 40,
    rating: 4.2,
    reviews: 89,
    description: "Mechanical wired keyboard with RGB backlight, designed for gamers and typists.",
    image: "https://e-commercew.netlify.app/assets/wired-keyboard-BAyjGj3P.webp",
    features: [
      "Mechanical keys",
      "RGB lighting",
      "Durable ABS construction",
      "Plug & play"
    ]
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    prices: "$370",
    brand: "TechMatched",
    category: "Monitor",
    stock: 15,
    rating: 4.7,
    reviews: 205,
    description: "24-inch IPS LCD monitor with ultra-fast refresh rate and minimal response time.",
    image: "https://techmatched.pk/wp-content/uploads/2024/01/1-37.png",
    features: [
      "144Hz refresh rate",
      "IPS LCD panel",
      "Full HD resolution",
      "Adjustable stand"
    ]
  },
  {
    id: 4,
    name: "ASUS FHD Gaming Laptop",
    prices: "$980",
    brand: "ASUS",
    category: "Laptop",
    stock: 8,
    rating: 4.8,
    reviews: 97,
    description: "High-performance gaming laptop with Ryzen 7 CPU and RTX 4050 GPU.",
    image: "https://www.techstore.net.pk/wp-content/uploads/2024/10/asus-tuf-fa507nur-lp129-ryzen-7-7435hs-rtx-4050-price-in-pakistan-2-600x600.png",
    features: [
      "Ryzen 7 7435HS",
      "NVIDIA RTX 4050",
      "16GB RAM, 512GB SSD",
      "FHD 144Hz Display"
    ]
  },
  {
    id: 5,
    name: "RGB liquid CPU Cooler",
    prices: "$1980",
    brand: "XPG",
    category: "Cooler",
    stock: 12,
    rating: 4.6,
    reviews: 58,
    description: "Advanced RGB liquid CPU cooler for high-performance PC builds.",
    image: "https://static3.webx.pk/files/19643/Images/xpg-levante-x-360-black-liquid-cooler-price-in-pakistan-3-19643-1910785-041123095637357.png",
    features: [
      "360mm radiator",
      "ARGB lighting",
      "High-performance pump",
      "Intel & AMD socket support"
    ]
  }
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
