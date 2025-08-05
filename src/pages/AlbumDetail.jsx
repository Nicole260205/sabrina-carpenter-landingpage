import { useParams, Link } from "react-router-dom";
import albums from "../data/albums";
import "../styles/albumDetail.css"; // certifique-se de ter esse CSS

function AlbumDetail() {
  const { id } = useParams();
  const album = albums.find((a) => a.id === id);

  if (!album) return <p>Album not found</p>;

  return (
    <div className="album-detail">
      <img src={album.detailImage} alt={album.title} />

      <div className="album-info">
        <h2>{album.title}</h2>
        <p>{album.description}</p>

        <div className="album-buttons">
          <Link to="/discography" className="back">
            ← Back
          </Link>
          <a
            href={album.spotify}
            target="_blank"
            rel="noreferrer"
            className="spotify"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </div>
  );
}

export default AlbumDetail;
