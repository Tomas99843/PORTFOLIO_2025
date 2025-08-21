import React from "react";
import { Link } from "react-scroll";
import logo from "/images/Logo.webp";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="container_home" smooth={true} duration={500}>
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
      <div className="navLinks">
        <Link to="container_home" smooth={true} duration={500} className="navbar-link">
          Home
        </Link>
        <Link to="about_me" smooth={true} duration={500} className="navbar-link">
          About Me
        </Link>
        <Link to="projects" smooth={true} duration={500} className="navbar-link">
          Projects
        </Link>
        <Link to="contact_me" smooth={true} duration={500} className="navbar-link">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;