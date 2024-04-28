import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Firebase/Firebaseprovider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
const Headers = () => {
  const { user, logout } = useContext(AuthContext);
  const handleSignOut = () => {
    logout()
      .then(() => toast.success("logout successfull"))
      .catch((error) => toast.error(error.message));
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/TouristsSpot"}>TouristsSpot</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/AddTouristsSpot"}>AddTouristsSpot</NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost lg:text-xl">
            JourneyHub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/TouristsSpot"}>TouristsSpot</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/AddTouristsSpot"}>AddTouristsSpot</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
              data-tooltip-place="bottom"
            >
              {" "}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full .my-anchor-element">
                    {" "}
                    <img alt={user.displayName} src={user.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button className="btn-red btn" onClick={handleSignOut}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link className="btn btn-primary" to={"/Login"}>
                Login
              </Link>
              <Link className="btn btn-secondary" to={"/Register"}>
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Headers;
