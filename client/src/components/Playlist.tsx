import React from 'react';
import type { PlaylistData } from "../interfaces/Playlist"; // Define PlaylistData in interfaces


// Define the props for the component
interface PlaylistProps {
    playlists: PlaylistData[] | null; // Playlists can be an array of PlaylistData objects or null
    handleDelete?: (id: number) => void; // Optional delete handler
}

const PlaylistCard: React.FC<PlaylistProps> = ({ playlists, handleDelete }) => {
    return (
        <>
            <h2 className="pb-5">
                Check out all your Playlists!
            </h2>
            {playlists && playlists.map((playlist) => (
                <div className="row align-center mb-5" key={playlist.id}>
                    <div className="col-md-6">
                        <img 
                            src={playlist.image} 
                            alt={playlist.title} 
                            style={{ width: '100%', borderRadius: '8px' }} 
                        />
                        <h3>{playlist.title}</h3>
                    </div>
                    <div className="col-md-6">
                        <h4>Top Tracks:</h4>
                        <ul>
                            {playlist.tracks.slice(0, 5).map((track) => (
                                <li key={track.id}>
                                    {track.name} by {track.artist}
                                </li>
                            ))}
                        </ul>
                        {/* Optional delete functionality */}
                        {handleDelete && (
                            <button 
                                className="btn btn-danger" 
                                onClick={() => handleDelete(playlist.id)}
                            >
                                Delete Playlist
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default PlaylistCard;