import "../styles/about.css";
import paper from "../assets/paper-tear.png";
import kiss1 from "../assets/kiss1.png";
import kiss2 from "../assets/kiss2.png";
import note1 from "../assets/note1.png";
import note2 from "../assets/note2.png";

function About() {
  return (
    <>
      <div className="about">
        <img src={kiss1} className="decor kiss kiss1" alt="red kiss" />
        <img src={kiss2} className="decor kiss kiss2" alt="pink kiss" />
        <img src={note1} className="decor note note1" alt="note 1" />
        <img src={note2} className="decor note note2" alt="note 2" />

        <div className="about-text">
          <p>
            <strong>Sabrina Carpenter here! </strong> I'm a singer, songwriter
            and actress who loves to explore the ups and downs of life through
            my music. My journey has been a wild ride, and I pour my heart into
            my songs —whether it's celebrating freedom or navigating the
            complexities of love and friendship. I'm passionate about connecting
            with people and creating art that resonates. Let's embrace the
            messiness of life together and keep shining bright!
          </p>
        </div>
      </div>
      
    </>
  );
}

export default About;
