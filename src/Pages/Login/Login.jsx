import { Link } from "react-router-dom";
import signUpImg from "../../assets/login/image1.png";
import logo from "../../assets/login/image.png"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { ImOpera } from "react-icons/im";
function Login() {
  return (
    <div className="max-w-[1440px] mx-auto my-10">
      <div className=" min-h-screen px-4 md:px-10  lg:px-28 mx-auto">
        <div className=" flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse justify-around gap-5 ">
          <img
            src={signUpImg}
            alt="SignUp Img"
            className="lg:h-screen md:w-96 lg:w-1/2 rounded  pr-4 md:pr-10  lg:pr-28"
          />

          <div className="w-full lg:w-1/3 relative">
            <div className="flex justify-between items-center mb-4">
              <img src={logo} alt="Logo" className="w-32 h-auto" />
              <p className="text-center lg:text-right">
                Don’t have an account?
                <span className="text-primary-color font-medium">
                  <Link to="/signUp"> Sign Up!</Link>
                </span>
              </p>
            </div>

            <h1 className="text-center mb-2 font-bold text-3xl">
              Welcome Back TechHub
            </h1>

            <h6 className="text-center mb-4">Login into your account</h6>
            <div className="flex gap-2 justify-center my-8">
              <button className="btn border-primary-color font-medium">
                <FcGoogle className="text-3xl" />
                Google
              </button>
              <button className="btn border">
                <FaFacebook className="text-3xl text-[#1877F2]" />
                Facebook
              </button>
            </div>
            <div className="divider">Or Continue with</div>
            <div className="mx-auto w-full max-w-sm  ">
              <form className="">
                <div className="form-control mb-4">
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered border-primary-color  focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered border-primary-color  focus:outline-none"
                    required
                  />
                </div>
                <div className="flex justify-between mt-2 items-center text-sm">
                  <p className="flex items-center gap-2">
                    <input type="checkbox" className="toggle" />
                    Remember me
                  </p>
                  <a href="#" className="text-[#D93F21]">
                    Forgot Password?
                  </a>
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-primary-color text-white">
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
