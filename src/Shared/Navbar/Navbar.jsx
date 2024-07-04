import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/login/image.png";
import logo1 from "../../assets/login/logo.png";
import Login from './../../Pages/Login/Login';

function Navbar() {
   const navLinks = (
     <>
       <li>
         <NavLink
           to="/"
           className="hover:border-b-2 hover:border-primary-color transition-all 3s"
         >
           Home
         </NavLink>
       </li>
       <li>
         <NavLink
           to="/teachers"
           className="hover:border-b-2 hover:border-primary-color transition-all 3s"
         >
           Teachers
         </NavLink>
       </li>
       <li>
         <NavLink
           to="/students"
           className="hover:border-b-2 hover:border-primary-color transition-all 3s"
         >
           Students
         </NavLink>
       </li>
       <li>
         <NavLink
           to="/school"
           className="hover:border-b-2 hover:border-primary-color transition-all 3s"
         >
           School
         </NavLink>
       </li>
       <li>
         <NavLink
           to="/services"
           className="hover:border-b-2 hover:border-primary-color transition-all 3s"
         >
           Services
         </NavLink>
       </li>
     </>
   );


  return (
    <div>
      <div className="navbar bg-base-100 lg:px-24 z-30">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"}>
            {" "}
            <img src={logo1} alt="Logo" className="w-32 h-auto" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 space-x-8  ">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to={'/login'}>
            <button className="btn border-primary-color rounded-full hover:bg-primary-color  hover:text-white px-8 mr-5">
              Login
            </button>
          </Link>
          <Link to={'/signUp'}>
            <button className="btn border-primary-color rounded-full hover:bg-primary-color  hover:text-white px-8">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
