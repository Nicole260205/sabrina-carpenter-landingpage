import love from "../assets/love_sab.png"
import '../styles/contact.css'

function ContactForm() {
  return (
    <>
      <div className="contact">
        <div className="contact-text">
          <h2>
            Want to reach out? Whether it's fan mall or collaboration ideas, I'd
            love to hear from you! Hit me up through our contact form, and let's
            connect. Your thoughts and support mean everything!
          </h2>
          <img src={love} alt="Love, Sab" />
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Leave your message here"></textarea>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm
