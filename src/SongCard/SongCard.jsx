import PropTypes from 'prop-types'
import './SongCard.css'

export function Card(props) {

  const { songImage, songName, artistName, albumName, releaseDate, listened } = props

  return (
    <div className="card">
      <img src={songImage} alt={songName} />
      <div className="card-details">
        <h1> {songName}</h1>
        <h2>Artist: {artistName}</h2>
        <h3>Album: {albumName}</h3>
        <p>Release: {releaseDate}</p>
        {listened ? <p style={{ color: "green" }}>Listened</p> : <p style={{ color: "red" }}>Not Listened</p>}
      </div>
    </div>
  )
}

Card.propTypes = {
  songImage: PropTypes.string.isRequired,
  songName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  listened: PropTypes.bool.isRequired
}