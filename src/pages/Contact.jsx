import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function Contact() {
  return (
    <>
      <Navbar extraClass="navbar-contact"/>
      <ContactForm />
      <Footer extraClass="footer-contact" />
    </>
  );
}

export default Contact
