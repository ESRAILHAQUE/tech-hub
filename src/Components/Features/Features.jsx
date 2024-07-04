function Features() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-28 md:px-14 my-16">
      <h2 className="text-center my-8 font-semibold text-3xl md:text-4xl lg:text-4xl">
        OUR KEY FIGURES
      </h2>
      <div className="flex flex-col gap-20 text-center items-center justify-center md:flex-row lg:flex-row">
        <div className="bg-primary-color p-6 w-52 pt-12 text-center h-64 rounded-tl-[70px] rounded-br-[70px]">
          <span className="bg-white p-4 rounded-full text-primary-color font-semibold text-4xl">
            48
          </span>
          <h2 className="text-white mt-8 text-3xl mb-2">HOURS</h2>
          <p className="text-white">Time to finalize a recruitment</p>
        </div>
        <div className="bg-primary-color p-6 w-52 pt-12 text-center h-64 rounded-tr-[70px] rounded-bl-[70px]">
          <span className="bg-white p-4 rounded-full text-primary-color font-semibold text-4xl">
            49
          </span>
          <h2 className="text-white mt-8 text-3xl mb-2">OFFERS</h2>
          <p className="text-white">
            Offers permanently active throughout France
          </p>
        </div>
        <div className="bg-primary-color p-6 w-52 pt-12 text-center h-64 rounded-tl-[70px] rounded-br-[70px]">
          <span className="bg-white p-4 rounded-full text-primary-color font-semibold text-4xl">
            48
          </span>
          <h2 className="text-white mt-8 text-3xl mb-2">Schools</h2>
          <p className="text-white">Number of establishments that trust us</p>
        </div>
      </div>
    </div>
  );
}
export default Features