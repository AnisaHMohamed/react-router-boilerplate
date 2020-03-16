import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <Link style={navStyle} to="/">
        <h3>Shero React Router BoilerPlate</h3>
      </Link>
      <ul className="nav-Links">
        <Link style={navStyle} to="/heroes">
          <li>SuperWomen</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
