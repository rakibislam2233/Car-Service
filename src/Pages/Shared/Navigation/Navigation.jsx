import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import logo from "../../../assets/assets/Logo/CarLogo.png";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
const Navigation = ({ theme, setTheme }) => {
  const { user, logOut } = useContext(UserContext);
  const handelLogout = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("carServiceToken");
      })
      .catch((err) => console.log(err.message));
  };
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
              <Link to="/services">Service</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              {user && (
                <h3>
                  <Link to={"/booking"}>My Bookings</Link>
                </h3>
              )}
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
            <li onClick={() => setTheme(!theme)}>
              {theme ? (
                <button>
                  <BsFillSunFill className="w-6 h-6"></BsFillSunFill>
                </button>
              ) : (
                <button>
                  <BsMoonFill className="w-6 h-6"></BsMoonFill>
                </button>
              )}
            </li>
          </ul>
        </div>
        <img className="w-12 h-12 cursor-pointer" src={logo} alt="" />
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
            <Link to="/services">Service</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            {user && (
              <h3>
                <Link to={"/booking"}>My Bookings</Link>
              </h3>
            )}
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
          <li onClick={() => setTheme(!theme)}>
            {theme ? (
              <button>
                <BsFillSunFill className="w-6 h-6"></BsFillSunFill>
              </button>
            ) : (
              <button>
                <BsMoonFill className="w-6 h-6"></BsMoonFill>
              </button>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          {user ? (
            <div className="flex gap-2 items-center">
              <div className="tooltip  tooltip-bottom" data-tip={`${user.displayName}`}>
              <img
                className="w-12 h-12 cursor-pointer ring-2 ring-slate-50 rounded-full"
                src={user.photoURL}
                alt="photoUrl"
              />
              </div>
              
              <button
                onClick={handelLogout}
                className="btn bg-orange-600 border-none"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn  bg-orange-600 border-none">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
