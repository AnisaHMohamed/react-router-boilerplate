import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color:'white'
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-Links">
        <Link  style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/heroes'>
          <li>SuperWomen</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
