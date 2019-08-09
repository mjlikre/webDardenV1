import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
const index = () => {
  return (
    <div>
      <nav className="navbar navbar navbar-expand-lg shadow-sm">
        <Link className="navbar-brand naturalWHite rounded p-2 " to="/">
          <i className="fa fa-home" /> Home
        </Link>
        <div className="collapse navbar-collapse float-right" id="navbarText">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                className="nav-link float-right naturalWHite"
                to="/profiles/"
              >
                <i className="fa fa-users" />
                Profiles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link float-right naturalWHite" to="/signin">
                <i className="fa fa-sign-in"/>
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link naturalWHite" to="/destinationr">
                <i className="fa fa-id-badge" />
                User Actions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link naturalWHite" to="/contactUs">
                <i className="fa fa-id-badge" />
                Contact us
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
};
export default index;

