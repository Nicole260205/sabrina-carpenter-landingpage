import logo from '../assets/logo.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Sabrina Carpenter's logo" />
        </div>
        <div className="navbar-links">
            <ul>
                <li><a href="/">discograpy</a></li>
                <li><a href="/about">music videos</a></li>
                <li><a href="/services">shop</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar
