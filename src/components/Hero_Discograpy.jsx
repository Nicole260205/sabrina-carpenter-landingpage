import hero from "../assets/discogrophy.png";
import "../styles/discograpy.css";

function Hero_Discograpy() {
  return (
    <div className="hero-discography-container">
      <img
        src={hero}
        alt="Sabrina Carpenter laying in front of vinyl records"
      />
      <div className="overlay-text">
        <div className="discography-text">
          <p>
            <strong>Music has always been my diary.</strong> Each album captures
            a chapter — from heartbreak to growth. I love experimenting with
            lyrics and emotions, letting every project reflect a moment in my
            life. Dive into my discography and find the songs that speak to you.
          </p>
        </div>
        <h1>Discography</h1>
      </div>
    </div>
  );
}

export default Hero_Discograpy;
