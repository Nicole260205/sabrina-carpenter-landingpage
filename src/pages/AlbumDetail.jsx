import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, Link } from "react-router-dom";
import albums from "../data/albums";
import "../styles/albumDetail.css";

function AlbumDetail() {
  const { id } = useParams();
  const album = albums.find((a) => a.id === id);

  if (!album) return <p>Album not found</p>;

  return (
    <>
      <Navbar extraClass="navbar-detail" />
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
      <Footer extraClass="footer-detail" />
    </>
  );
}

export default AlbumDetail;
