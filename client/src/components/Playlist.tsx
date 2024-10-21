import React from 'react';
import type { PlaylistData } from "../interfaces/Playlist"; // Import PlaylistData type

// Define the props for the component
interface PlaylistProps {
    playlists: PlaylistData[] | null;
    handleUpdate: (id: number) => void;
    handleDelete: (id: number) => void;
}

const PlaylistCard: React.FC<PlaylistProps> = ({ playlists, handleUpdate, handleDelete }) => {
    return (
        <>
            <h2 className="pb-5">Check out all your Playlists!</h2>
            {playlists && playlists.map((playlist) => (
                <div className="row align-center mb-5" key={playlist.id}>
                    <div className="col-md-6">
                        <img 
                            src={playlist.image || 'https://via.placeholder.com/150'}  // Fallback image if none exists
                            alt={playlist.title} 
                            style={{ width: '100%', borderRadius: '8px' }} 
                        />
                        <h3>{playlist.title}</h3>
                    </div>
                    <div className="col-md-6">
                        <h4>Top Tracks:</h4>
                        <ul>
                            {playlist.tracks?.length ? (
                              playlist.tracks.slice(0, 5).map((track) => (
                                <li key={track.id}>
                                  {track.name} by {track.artist}
                                </li>
                              ))
                            ) : (
                              <p>No tracks available</p>
                            )}
                        </ul>
                        <button onClick={() => handleUpdate(playlist.id)}>Update Playlist</button> {/* Button to update playlist */}
                        <button onClick={() => handleDelete(playlist.id)}>Delete Playlist</button> {/* Button to delete playlist */}
                    </div>
                </div>
            ))}
        </>
    );
};

export default PlaylistCard;