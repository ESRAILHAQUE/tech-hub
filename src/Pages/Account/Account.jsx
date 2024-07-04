import { Link } from "react-router-dom";
import accountImg from "../../assets/account/image.png";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

function Account() {
  return (
    <div className="max-w-[1440px] mx-auto my-10">
      <div className="min-h-screen px-4 md:px-8 lg:px-28 mx-auto">
        <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse justify-around gap-5 items-center">
          <div
            className="hero h-screen w-full mx-auto  lg:w-1/2 rounded bg-cover bg-center "
            style={{
              backgroundImage: `url(${accountImg})`,
            }}
          >
            <div className="bg-white p-4 lg:p-8 w-[95%] lg:w-[80%] rounded mt-72 lg:mt-80 h-auto">
              <button className="btn bg-primary-color text-white mb-6  hover:text-primary-color hover:border-primary-color">
                <AiFillLike className="  text-[#ffd24b] text-xl " />
                Top Notch Stock Resources
              </button>

              <p>
                Today, we create innovative solutions to the challenges that
                consumers face in both their everyday lives and events.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[70%]  lg:w-1/3">
            <h1 className="text-center mb-2 font-bold text-3xl">
              Welcome Back TechHub
            </h1>

            <h6 className="text-center mb-12">Login into your account as a</h6>

            <div className="flex flex-col space-y-8 w-full">
              <Link to={"/account"}>
                <button className="btn w-full border-primary-color text-primary-color hover:bg-primary-color hover:text-white">
                  Teacher
                </button>
              </Link>
              <Link to={"/account"}>
                <button className="btn w-full border-primary-color text-primary-color hover:bg-primary-color hover:text-white">
                  Student
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Account;
