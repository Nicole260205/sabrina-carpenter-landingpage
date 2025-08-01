import hero from '../assets/manchild-hero.png';
import '../styles/hero.css';
import paper from '../assets/paper-tear.png'

function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-continent">
          <h1 className="name">
            Sabrina <br /> Carpenter
          </h1>
          <button className="cta">Save Man's Best Friend on Spotify</button>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={hero}
            alt="Sabrina Carpenter - Man's Best Friend"
            className="hero-image"
          />
        </div>
      </div>
      <img src={paper} alt="papel rasgado" className="paper-tear" />
    </>
  );
}

export default Hero