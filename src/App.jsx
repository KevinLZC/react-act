import { useState } from 'react'
import './App.css'
import { Card } from './Card'

const songs = [
  {
    songImage: '',
    songName: 'Europa',
    artistName: 'Santana',
    albumName: 'Amigos',
    releaseDate: '1976',
    listened: false
  },
  {
    songImage: '',
    songName: "Flor D'Luna",
    artistName: 'Santana',
    albumName: "Flor D'Luna",
    releaseDate: '1977',
    listened: true
  },
  {
    songImage: 'https://i.scdn.co/image/ab6761610000e5eb09882b1b7b33732abd60fc38',
    songName: 'Europa',
    artistName: 'Santana',
    albumName: 'Amigos',
    releaseDate: '1976-03-26',
    listened: false
  },
]

function App() {
  const [showListened, setShowListened] = useState(false)

  const filteredSongs = showListened ? songs.filter(song => !song.listened) : songs

  return (
    <>
      <h1>Santana Songs</h1>
      <img src={'https://i.scdn.co/image/ab6761610000e5eb09882b1b7b33732abd60fc38'} alt="Carlos Santana" />
      <div>
        <label>
          <input
            type="checkbox"
            checked={showListened}
            onChange={() => setShowListened(prevState => !prevState)}
          />
          Show Not Listened
        </label>
      </div>
      {filteredSongs.map((song, index) => (
        <Card
          key={index}
          songImage={song.songImage}
          songName={song.songName}
          artistName={song.artistName}
          albumName={song.albumName}
          releaseDate={song.releaseDate}
          listened={song.listened}
        />
      ))}
    </>
  )
}

export default App
