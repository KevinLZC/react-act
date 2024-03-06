
export function Card(props) {
  return (
    <>
      <div>
        <img src={props.songImage}></img>
        <div>
          <h1>{props.songName}</h1>
          <p>{props.artistName}</p>
          <p>{props.albumName}</p>
          <p>{props.releaseDate}</p>
          {props.listened ? <p>Listened</p> : <p>Not Listened</p>}
        </div>
      </div>
    </>
  )
}