import React from "react";
import { useAuth } from "../hooks";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { isAuth, authUser } = useAuth();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/" end>
          Journey-Compass
        </NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink className="navbar-brand" to="/" end>
              Home
            </NavLink>
          </li>

          {isAuth && (
            <>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/editor">
                  {/* <i className="ion-compose"/> */}
                  &nbsp; New Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/settings">
                  {/* <i className="ion-compose"/> */}
                  &nbsp; Settings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/about">
                  {/* <i className="ion-compose"/> */}
                  &nbsp; About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="navbar-brand"
                  to={`/@${authUser?.username}`}
                >
                  {/* image */}
                  Hi {authUser?.username}
                </NavLink>
              </li>
            </>
          )}

          {!isAuth && (
            <>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/register">
                  {/* <i className="ion-compose"/> */}
                  Sign up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/login">
                  {/* <i className="ion-compose"/> */}
                  Sign in
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
