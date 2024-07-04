import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../../assets/Footer/wave.svg";
import logo from "../../assets/login/image.png";

function Footer() {
  return (
    <div
      className="bg-cover bg-no-repeat w-full text-center py-10 relative mt-96 max-w-[1440px] mx-auto px-4 lg:px-28 md:px-14"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container mx-auto text-white mt-72">
        <div className="flex items-center flex-col md:flex-row md:justify-between text-center md:text-left">
          <div className="mt-8 text-white mb-8 md:mb-0 mr-6 md:w-1/4">
            <Link to={"/"}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-col mb-8 md:mb-0 md:w-1/4">
            <h6 className="footer-title">Resources</h6>
            <Link className="link link-hover" to="/branding">
              The TechHub
            </Link>
            <Link className="link link-hover" to="/design">
              Partner Schools
            </Link>
            <Link className="link link-hover" to="/marketing">
              Blog & Teaching Tips
            </Link>
            <Link className="link link-hover" to="/advertisement">
              FQAs
            </Link>
          </div>
          <div className="flex flex-col mb-8 md:mb-0 md:w-1/4">
            <h6 className="footer-title">How it works</h6>
            <Link className="link link-hover" to="/about-us">
              About
            </Link>
            <Link className="link link-hover" to="/contact">
              Who are we?
            </Link>
            <Link className="link link-hover" to="/jobs">
              We are recruiting
            </Link>
          </div>
          <div className="flex flex-col md:w-1/4">
            <h6 className="footer-title">Contact Us</h6>
            <a className="link link-hover" href="tel:+9198765432154">
              (91) 98765 4321 54
            </a>
            <a className="link link-hover" href="mailto:support@mail.com">
              support@mail.com
            </a>
          </div>
        </div>
      </div>

      {/* Centered form section */}
      <div className="mx-4">
        <div className="absolute  inset-x-0 mx-auto max-w-md p-6 bg-white shadow-md rounded-md border border-primary-color -top-32 text-center ">
          <h1 className="text-4xl font-extrabold mb-4 text-primary-color">
            Get Started Now!
          </h1>
          <p className="mb-6 text-gray-600">
            Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
            diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
            quam viverra orci.
          </p>
          <form className="">
            <div className="form-control mb-4">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full p-2 border border-primary-color focus:outline-none rounded"
                required
              />
            </div>
            <div className="form-control mb-4">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full p-2 border border-primary-color focus:outline-none rounded"
                required
              />
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-accent w-full "
            />

            <div className="form-control mt-6">
              <button className="btn   bg-primary-color text-white py-2 rounded-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
