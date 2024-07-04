import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { FaRegStar, FaStar } from "react-icons/fa";
import img1 from "../../assets/Slider/img1.png";
import img2 from "../../assets/Slider/img2.png";
import img3 from "../../assets/Slider/img3.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ResizePlugin(slider) {
  const observer = new ResizeObserver(function () {
    slider.update();
  });

  slider.on("created", () => {
    observer.observe(slider.container);
  });

  slider.on("destroyed", () => {
    observer.unobserve(slider.container);
  });
}

const Slider = () => {
  const [sliderRef, slider] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
      },
    },
    [ResizePlugin]
  );

  return (
    <div className="">
      <div className="bg-primary-color py-8 max-w-[1440px] mx-auto px-4 lg:px-28 md:px-14 my-28">
        <h1 className="text-center text-white font-bold text-2xl lg:text-4xl mb-4">
          What do students say about TechHub?
        </h1>
        <div className="relative">
          <div className="wrapper text-center mx-auto">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide bg-white p-5 text-center rounded-lg">
                <img src={img1} alt="" className="mx-auto w-20" />
                <h1 className="font-semibold text-xl my-4">Jassica Andrew</h1>
                <div className="flex justify-center gap-1">
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                </div>
                <p className="mt-5 py-3">
                  My child has improved a lot after finishing school. Thank you
                  very much techhub
                </p>
              </div>
              <div className="keen-slider__slide bg-white p-5 text-center rounded-lg">
                <img src={img2} alt="" className="mx-auto w-20" />
                <h1 className="font-semibold text-xl my-4">
                  Darlene Robertson
                </h1>
                <div className="flex justify-center gap-1">
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                </div>
                <p className="mt-5 py-3">
                  My child knows how to write very good essays. English ability
                  is also much better. The cost is very cheap, so you should
                  register. Thank you very much techhub.
                </p>
              </div>
              <div className="keen-slider__slide bg-white p-5 text-center rounded-lg">
                <img src={img3} alt="" className="mx-auto w-20" />
                <h1 className="font-semibold text-xl my-4">Dianne Russell</h1>
                <div className="flex justify-center gap-1">
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                </div>
                <p className="mt-5 py-3">
                  My child has improved a lot after finishing school. Thank you
                  very much techhub
                </p>
              </div>
              <div className="keen-slider__slide bg-white p-5 text-center rounded-lg">
                <img src={img1} alt="" className="mx-auto w-20" />
                <h1 className="font-semibold text-xl my-4">Prity Zinta</h1>
                <div className="flex justify-center gap-1">
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                </div>
                <p className="mt-5 py-3">
                  My child has improved a lot after finishing school. Thank you
                  very much techhub
                </p>
              </div>
            </div>
          </div>
          <button
            className="absolute left-4 lg:-left-16 top-1/2 transform -translate-y-1/2 bg-white p-4 font-bold text-2xl rounded-full shadow-md "
            onClick={() => slider.current?.prev()}
          >
            <IoIosArrowBack className="text-primary-color" />
          </button>
          <button
            className="absolute right-4 lg:-right-16 top-1/2 transform -translate-y-1/2 bg-white p-4 font-bold text-2xl rounded-full shadow-md"
            onClick={() => slider.current?.next()}
          >
            <IoIosArrowForward className="text-primary-color" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
