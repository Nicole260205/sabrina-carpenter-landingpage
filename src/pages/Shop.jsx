import Navbar from "../components/Navbar"
import ShopNow from "../components/ShopNow"
import Footer from "../components/Footer";

function Shop() {
  return (
    <>
      <Navbar extraClass="navbar-shop" />
      <ShopNow />
      <Footer extraClass="footer-shop" />
    </>
  )
}

export default Shop
