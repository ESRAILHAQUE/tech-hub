import React, { useState } from "react";
import { Link } from "react-router-dom";
import signUpImg from "../../assets/signUp/image.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-[1440px] mx-auto my-10">
      <div className="min-h-screen px-4 md:px-10 lg:px-28 mx-auto">
        <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-around gap-5">
          <img
            src={signUpImg}
            alt="SignUp Img"
            className="lg:h-screen md:w-96 lg:w-1/2 rounded"
          />

          <div className="w-full lg:w-1/3">
            <p className="text-center mb-2 lg:text-right">
              Have an account?
              <span className="text-primary-color font-medium">
                <Link to="/login"> Sign In!</Link>
              </span>
            </p>
            <p className="font-semibold text-2xl text-center">
              Get Started With TechHub
            </p>
            <h6 className="text-center mb-4">Getting started is easy</h6>
            <div className="flex gap-2 justify-center">
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
            <div className="mx-auto w-full max-w-sm">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input input-bordered border-primary-color focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control my-4">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input input-bordered border-primary-color focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered border-primary-color focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control my-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input input-bordered border-primary-color focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="input input-bordered border-primary-color focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-primary-color text-white">
                    Register
                  </button>
                </div>
              </form>
              <p className="mt-2">
                By continuing you indicate that you read and agreed to the Terms
                of Use
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
