import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/" className="link">
          <i className="fa fa-code" aria-hidden="true"></i>
          Welcome
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/d" className="link">
            Developers
          </Link>
        </li>
        <li>
          <Link to="/login" className="link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="link">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
