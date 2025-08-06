import Navbar from "../components/Navbar";
import Albuns from "../components/Albuns";
import Hero_Discograpy from "../components/Hero_Discograpy";
import Footer from "../components/Footer";
function Discography() {
  return (
    <>
      <Navbar extraClass="navbar-album" />
      <Hero_Discograpy />
      <Albuns />
      <Footer extraClass="footer-album" />
    </>
  );
}

export default Discography
