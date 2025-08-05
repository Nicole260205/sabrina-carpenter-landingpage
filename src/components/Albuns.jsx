import '../styles/albuns.css';
import albums from "../data/albums";
import AlbumCard from "../components/AlbumCard";

function Albuns() {
  return (
    <>
      <div className="discography-page">
        <h1 className="discography-title">Discography</h1>
        <div className="album-grid">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Albuns
