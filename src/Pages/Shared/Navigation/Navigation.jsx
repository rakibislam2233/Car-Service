import React from "react";
import { Link } from "react-router-dom";
import { BsFillSunFill,BsMoonFill } from "react-icons/bs";
import logo from '../../../assets/assets/Logo/CarLogo.png'
const Navigation = ({ theme,setTheme }) => {
    console.log(theme);
  return (
    <div className="navbar w-full max-w-7xl mx-auto bg-base-100 dark:bg-[#23272F] dark:text-white px-2 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52 dark:bg-[#23272F] dark:text-white"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
            <li onClick={()=>setTheme(!theme)}>
            {
                theme?<button ><BsFillSunFill className="w-6 h-6"></BsFillSunFill></button>:<button><BsMoonFill className="w-6 h-6"></BsMoonFill></button >
            }
          </li>
          </ul>
        </div>
        <img className="w-12 h-12" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
          <li onClick={()=>setTheme(!theme)}>
            {
                theme?<button ><BsFillSunFill className="w-6 h-6"></BsFillSunFill></button>:<button><BsMoonFill className="w-6 h-6"></BsMoonFill></button >
            }
          </li>
          {/* <li>
            {
              user?<div className="">
               <h3> <Link to={'/bookings'}>My Bookings</Link></h3>
                <button className="btn btn-warning">Log Out</button></div>:<Link to='/login'><button className="btn btn-success">Login</button></Link>
            }
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn bg-orange-600 border-none">Appointment</button>
      </div>
    </div>
  );
};

export default Navigation;
