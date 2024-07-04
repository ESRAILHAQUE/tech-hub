import img1 from '../../assets/Teachers/img1.png';
import img2 from "../../assets/Teachers/img2.png";
import img3 from "../../assets/Teachers/img3.png";
function TeachersPanel() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-28 md:px-14">
      <div className="text-center my-10  ">
        <h2 className="text-primary-color text-4xl my-6">
          An easier way to be a substitute teacher and find subs
        </h2>
        <p className="text-justify">
          When schools and districts have reliable access to substitute teachers
          and subs have the freedom to choose what and when they teach, more
          classes are covered and student learning stays on track. At Swing, we
          building a technology-enabled marketplace that connects schools and
          subs in new and innovative ways.
        </p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-10 md:gap-8 my-16">
        <div className="text-center">
          <img src={img1} alt="" className=" mx-auto w-96 md:w-auto lg:w-80" />
          <h2 className="text-primary-color text-2xl font-medium">
            The Problem
          </h2>
          <p>Teacher absences disrupt student learning</p>
        </div>
        <div className="text-center">
          <img src={img2} alt="" className=" mx-auto w-96 md:w-auto lg:w-80" />
          <h2 className="text-primary-color text-2xl font-medium">
            The TechHub solution
          </h2>
          <p>A better way to connect subs and schools</p>
        </div>
        <div className="text-center">
          <img src={img3} alt="" className=" mx-auto w-96 md:w-auto lg:w-80" />
          <h2 className="text-primary-color text-2xl font-medium">
            The Results
          </h2>
          <p>Student learning stays on track</p>
        </div>
      </div>
    </div>
  );
}
export default TeachersPanel