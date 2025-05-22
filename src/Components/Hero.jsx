const Hero = () => {
  return (
    <section className={`h-[90vh] text-gray-600 body-font`}>
      <div className="container mx-auto flex px-5 py-4 md:py-12 md:flex-row flex-col-reverse gap-3 items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="capitalize title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            the largest rang
            <br className="hidden lg:inline-block" />
            of products
          </h1>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
        </div>

        {/* Image section hidden on md and below */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Logo-Background-PNG-Image.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
