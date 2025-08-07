import Navbar from "../components/Navbar";
import Hero_Video from "../components/Hero_Video";
import Clipes from "../components/Clipes";
import Footer from "../components/Footer";
import darkLogo from "../assets/dark_logo.png";

function MusicVideos() {
  return (
    <>
      <Navbar extraClass="navbar-video" customLogo={darkLogo} />
      <Hero_Video />
      <Clipes />
      <Footer extraClass="footer-video" />
    </>
  );
}

export default MusicVideos
