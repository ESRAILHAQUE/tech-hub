import InstructorImg from '../../assets/Instructor/image.png'
function Instructor() {
  return (
    <div className="my-10 max-w-[1440px] mx-auto px-4 lg:px-28 md:px-14">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
        {/* Left side */}
        <div className=" text-justify lg:w-2/3">
          <h2 className="font-bold text-primary-color text-2xl text-center md:text-4xl lg:text-6xl mb-8">
            Become an Instructor
          </h2>
          <p className="mb-6">
            Join our community of tech enthusiasts and share your knowledge with
            a global audience. Help shape the future of technology by teaching
            what you love.
          </p>
          <p>
            Expand your reach and connect with students from around the world.
            Make a real impact by educating the next generation of tech
            innovators.
          </p>
          <div className="mt-9 flex gap-6 justify-center ">
            <button className="btn border-primary-color rounded-full hover:bg-primary-color hover:text-white px-3">
              Become a Teacher
            </button>
            <button className="btn border-primary-color rounded-full hover:bg-primary-color hover:text-white px-3">
              Post a Job
            </button>
          </div>
        </div>
        {/* Right Side */}

        <img
          src={InstructorImg}
          alt=""
          className="w-80  h-80 md:h-96 lg:h-96 mx-auto"
        />
      </div>
    </div>
  );
}
export default Instructor