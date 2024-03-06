import { useState } from 'react'
import './App.css'
import { Card } from './Card'
import '../fonts/Geist/Geist-Regular.otf';

const songs = [
  {
    songImage: 'https://i.scdn.co/image/ab67616d0000b273d13ca3ed0b13d9038667a536',
    songName: 'Uranium Fever',
    artistName: 'Elton Britt',
    albumName: 'Uranium Rock - Fallout 4 Radio',
    releaseDate: '1955',
    listened: false
  },
  {
    songImage: 'https://i.scdn.co/image/ab67616d0000b2732c81905d4a216deda92d91ae',
    songName: "Atomb Bomb Baby",
    artistName: 'The Five Stars',
    albumName: "Atomb Bomb Baby",
    releaseDate: '1957',
    listened: true
  },
  {
    songImage: 'https://i.scdn.co/image/ab6761610000e5eb09882b1b7b33732abd60fc38',
    songName: 'Europa',
    artistName: 'Santana',
    albumName: 'Amigos',
    releaseDate: '1976',
    listened: false
  },
]

function App() {
  const [showListened, setShowListened] = useState(false)

  const filteredSongs = showListened ? songs.filter(song => !song.listened) : songs

  return (
    <>
      <h1>Music playlist</h1>
      <img src={'https://alfinaleslodesiempre.files.wordpress.com/2018/04/cropped-sombrero-de-caca-1.png'} alt="Carlos Santana" />
      <div className='checkbox'>
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
