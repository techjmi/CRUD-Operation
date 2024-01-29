import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../hooks/Auth";
import Profile from "../miscellaneous/Profile";

const Navbar = () => {
  const { isLoggedIn, logOutUser, user } = useAuth();
  console.log("User in Navbar:", user);
  const adminLink = user?.isAdmin && (
    <NavLink className="navbar-brand text-light ms-2" to="/admin">
      Admin
    </NavLink>
  );

  useEffect(() => {
    console.log("IsLoggedIn in Navbar:", isLoggedIn);
  }, [isLoggedIn, user]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark py-0  sticky-top">
        <div className="container-fluid mx-2">
          <Profile />
          {adminLink}
          {/* {user.isAdmin && (
            <NavLink className="navbar-brand text-light ms-2" to="/admin">
              Admin
            </NavLink>
          )} */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto pr-5">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/contact">
                  Contact
                </NavLink>
              </li>
              {isLoggedIn ? (
                <li className="nav-item">
                  <button className="nav-link text-light" onClick={logOutUser}>
                 
                 Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className="nav-item text-light">
                    <NavLink className="nav-link text-light" to="/register">
                      Registration
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-light" to="/login">
                      Login
                    </NavLink>
                  </li>
                </>
              )}

              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/service">
                  Service
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
