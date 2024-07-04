import { TiTick } from 'react-icons/ti';
import img1 from '../../assets/benefits/img1.png';
import img2 from "../../assets/benefits/img2.png";
import img3 from "../../assets/benefits/img3.png";
import img4 from "../../assets/benefits/img4.png";
import img5 from "../../assets/benefits/img5.png";
import img6 from "../../assets/benefits/img6.png";
function Benefits() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-28 items-center bg-primary-color p-6 max-w-[1440px] mx-auto px-4 lg:px-28 md:px-14">
      <div className=" flex flex-col justify-center mx-auto ">
        <div className="mx-auto">
          <img src={img1} alt="" className="w-32 md:w-48 lg:w-48 " />
        </div>
        <div className="-mt-14 md:-mt-20 lg:-mt-20 flex gap-16 mx-auto">
          <img src={img2} alt="" className="w-28 md:w-40 lg:w-40" />
          <img src={img3} alt="" className="w-28 md:w-40 lg:w-40" />
        </div>
        <div className="z-40 -mt-8 md:-mt-12 lg:-mt-12 flex gap-14 mx-auto">
          <img src={img4} alt="" className="w-24 md:w-36 lg:w-36" />
          <img src={img5} alt="" className="w-24 md:w-36 lg:w-36" />
        </div>
        <div className="mx-auto text-center -mt-12 md:-mt-16 lg:-mt-16 z-50">
          <img src={img6} alt="" className="w-28 md:w-40 lg:w-40" />
        </div>
      </div>
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-8">
          Benifits from our TechHub learning
        </h1>
        <ul className="space-y-3 pl-5">
          <li className="flex gap-2 items-center">
            <TiTick className=" text-black bg-white rounded-lg text-2xl font-thin " />
            Stay Informed with the Latest Trends
          </li>
          <li className="flex gap-2 items-center">
            <TiTick className=" text-black bg-white rounded-lg text-2xl font-thin " />
            Access Expert Reviews and Insights
          </li>
          <li className="flex gap-2 items-center">
            <TiTick className=" text-black bg-white rounded-lg text-2xl font-thin " />
            Enhance Your Knowledge and Skills
          </li>
          <li className="flex gap-2 items-center">
            <TiTick className=" text-black bg-white rounded-lg text-2xl font-thin " />
            Reliable and Trustworthy Information
          </li>
          <li className="flex gap-2 items-center">
            <TiTick className=" text-black bg-white rounded-lg text-2xl font-thin " />
            Stay Engaged with Regular Updates
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Benefits