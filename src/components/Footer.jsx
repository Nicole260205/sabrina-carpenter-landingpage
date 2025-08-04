import paper from "../assets/paper-tear.png";
import logo from "../assets/logo.png";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <img src={paper} alt="papel rasgado" className="paper-tear-footer" />

        <div className="footer-content">
          <div className="footer-column left">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookies</a>
          </div>

          <div className="footer-column center">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="rights">© 2025 Todos os direitos reservados</p>
          </div>

          <div className="footer-column right">
            <a href="#">
              <FaInstagram className="social-icon" />
            </a>
            <a href="#">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="#">
              <FaTwitter className="social-icon" />
            </a>
            <a href="#">
              <FaYoutube className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
