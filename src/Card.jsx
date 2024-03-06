import PropTypes from 'prop-types'

export function Card(props) {

  const { songImage, songName, artistName, albumName, releaseDate, listened } = props

  return (
    <div className="card">
      <img src={songImage} alt={songName} />
      <div className="card-details">
        <h1> {songName}</h1>
        <p>Artist: {artistName}</p>
        <p>Album: {albumName}</p>
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