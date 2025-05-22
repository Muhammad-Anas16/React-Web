import { useState, useEffect } from "react";

const images = [
  {
    name: "image1",
    src: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.landing-big_2x.jpg",
  },
  {
    name: "image2",
    src: "https://cdn.mos.cms.futurecdn.net/eb6jW2oVkZEvS4Ms3MRdGZ.jpg",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // change image every 3s
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="h-[70vh] flex items-center justify-center p-8 md:p-6">
      <div className="relative w-[100vw] md:w-[95vw] lg:w-[90vw] h-full">
        {/* Carousel Wrapper */}
        <div className="relative h-full overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                current === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                className="block w-full h-full object-cover"
                alt={image.name}
              />
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L1 5l4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
