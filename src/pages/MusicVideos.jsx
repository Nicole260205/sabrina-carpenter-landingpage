import Navbar from "../components/Navbar";
import Hero_Video from "../components/Hero_Video";
import Clipes from "../components/Clipes";
import Footer from "../components/Footer";
function MusicVideos() {
  return (
    <>
      <Navbar extraClass="navbar-video" />
      <Hero_Video />
      <Clipes />
      <Footer extraClass="footer-video" />
    </>
  );
}

export default MusicVideos
