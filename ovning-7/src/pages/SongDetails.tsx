import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { type Song, songList } from "../data/SongData";

function SongDetails() {
  const { id } = useParams();


    const song: Song | undefined = songList.find((song: Song) => song.id === Number(id));

    if (!song) {
      return <h1>Song not found</h1>
    }
  return (
    <div>
      <h1>{song.title}</h1>
      <p>{song.artist}</p>
      <Link to="/songs">Go back to songs</Link>
    </div>
  );
}

export default SongDetails;
