import type React from 'react';
import Auth from '../utils/auth';

// Define the props for the component
interface TopTracksProps {
    FavoriteArtist: string;
    tracks: String[]; // artist is a RecommendedArtist object
}

// Define the component
const TopTracksCard: React.FC<TopTracksProps> = ({ tracks, FavoriteArtist }) => {
    const savePlaylistHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        console.log("Playlist saved");
        // send tracks and favorite artist to the database route
        try {
            const response = await fetch(`/api/playlists/createPlaylist`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
              }, 
                body: JSON.stringify({ tracks, FavoriteArtist })
            });
            const data = await response.json();
            console.log('log: data', data);
            if (response.ok) {
              //setArtists(data.toptracks.track); // Add the new artist to the list
              } else {
              //setError("Playlist not found");
            }
          } catch (error) {
            //setError("Failed to fetch playlist data from databse");
            console.log(error);
          }
    }
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{FavoriteArtist}</h5> {/* placeholder title, will need to add "entered artist name" */}
                <ul>
                    {/*create a listed item with each string in the tracks array*/}
                    {tracks.map((track, index) => (
                        <li key={index}>{track}</li>
                    ))}
                </ul>
            </div>
            {/* add a save button that calls the savePlaylistHandler function when it is clicked */}
            <button className="btn btn-primary" onClick={savePlaylistHandler}>Save Playlist</button>
        </div>
    );
};

export default TopTracksCard;