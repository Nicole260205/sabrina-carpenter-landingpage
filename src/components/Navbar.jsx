import logo from "../assets/logo_nav.png";
import "../styles/navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ extraClass = "", customLogo }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`navbar ${extraClass}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={customLogo || logo} alt="Sabrina Carpenter's logo" />
        </Link>
      </div>

      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/discography">discography</Link>
          </li>
          <li>
            <Link to="/music-videos">music videos</Link>
          </li>
          <li>
            <Link to="/shop">shop</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Navbar;
