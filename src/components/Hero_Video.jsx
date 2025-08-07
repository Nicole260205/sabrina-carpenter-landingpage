import hero from "../assets/music_video_hero.png";
import '../styles/heroVideo.css'
function Hero_Video() {
  return (
    <>
      <div className="hero-video-container">
        <img src={hero} alt="Sabrina Carpenter see herself in a mirror" />
        <div className="overlay-text-video">
          <h1>Music Videos</h1>
          <div className="video-text">
            <p>
              <strong>Get ready for some serious visual magic.</strong> From raw
              acoustic sessions to full-on cinematic productions, these music
              videos bring each song to life in its own unique way. Whether it’s
              through storytelling, colors, or just pure vibes, every clip was
              crafted to connect with you — press play and dive into the world
              behind the music.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero_Video
