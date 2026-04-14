import { Link } from "react-router-dom";
import songList from "../data/SongData";

function Songs() {

    return (
        <div>
            <h1>Songs Page</h1>
            <ul>
                {songList.map((song) => (
                    <li key={song.id}>
                      <Link to={`/songs/${song.id}`}>{song.title} - {song.artist}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Songs
