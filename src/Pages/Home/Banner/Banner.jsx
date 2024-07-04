import banner from "../../../assets/banner/image.png";

function Banner() {
  return (
    <div className="bg-primary-color px-8 lg:pl-24 overflow-hidden">
      <div className="flex justify-between items-center flex-col md:flex-row lg:flex-row">
        <div className=" font-bold">
          <h1 className="font-bold text-4xl lg:text-7xl text-center mt-1 ">
            TechHub,{" "}
          </h1>
          <p className="text-white my-4 text-2xl lg:text-4xl">
            Your Gateway to the <br />
            Future of Technology
          </p>
          <div className="flex gap-3 justify-center lg:gap-10 my-5 ">
            <button className="btn bg-transparent rounded-full text-white hover:text-primary-color">
              Find a Teacher{" "}
            </button>
            <button className="btn bg-transparent rounded-full text-white hover:text-primary-color">
              Become a Teacher
            </button>
          </div>
        </div>
        <div className="hidden md:block lg:block relative">
          <img
            src={banner}
            alt="Banner"
            className="w-[500px] h-[500px] -top-6 -right-40 relative"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
