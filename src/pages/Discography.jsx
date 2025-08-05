import Albuns from "../components/Albuns";
import Hero_Discograpy from "../components/Hero_Discograpy";
import Footer from "../components/Footer";
function Discography() {
  return (
    <>
      <Hero_Discograpy />
      <Albuns />
      <Footer extraClass="footer-album" />
    </>
  );
}

export default Discography
