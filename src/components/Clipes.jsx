import videos from "../data/video";
import '../styles/clipes.css'
function Clipes() {
  return (
    <>
      <div className="clipes">
        <h1 className="clipes-title">Music Videos</h1>
        <div className="cards-videos">
          {videos.map((video, index) => (
            <div className="card" key={index}>
              <img src={video.thumb} alt={video.title} />
              <div className="card-info">
                <h4>{video.title}</h4>
                <p>{video.year}</p>
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <button>Watch</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Clipes
