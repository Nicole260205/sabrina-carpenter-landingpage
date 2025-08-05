import {Link} from 'react-router-dom'
function AlbumCard({album}) {
  return (
    <Link to={`/albums/${album.id}`} className="album-card">
      <img src={album.cover} alt={album.title} />
      <p>{album.title} <br /> ({album.year}) </p>
    </Link>
  )
}

export default AlbumCard
