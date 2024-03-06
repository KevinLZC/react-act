export function Card(props) {
  return (
    <div className="card">
      <img src={props.songImage} alt={props.songName} />
      <div className="card-details">
        <h1>{props.songName}</h1>
        <p>{props.artistName}</p>
        <p>{props.albumName}</p>
        <p>{props.releaseDate}</p>
        {props.listened ? <p style={{color: "green"}}>Listened</p> : <p style={{color: "red"}}>Not Listened</p>}
      </div>
    </div>
  );
}
