import logo from "../assets/logo.png";
import "../styles/navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Sabrina Carpenter's logo" />
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="/">discography</a>
            </li>
            <li>
              <a href="/about">music videos</a>
            </li>
            <li>
              <a href="/services">shop</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </>
  );
}

export default Navbar;
