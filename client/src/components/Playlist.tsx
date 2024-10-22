import React from 'react';
import type { PlaylistData } from "../interfaces/Playlist"; // Import PlaylistData type

// Define the props for the component
interface PlaylistProps {
    playlists: PlaylistData[] | null;
}

const PlaylistCard: React.FC<PlaylistProps> = ({ playlists }) => {
    
    return (
        <>
            <h2 className="pb-5">Check out all your Playlists!</h2>
            {playlists && playlists.map((playlist) => (
                <div className="row align-center mb-5" key={playlist.id}>
                    <div className="col-md-6">
                        {/*<img 
                            src={playlist.image || 'https://via.placeholder.com/150'}  // Fallback image if none exists
                            alt={playlist.FavoriteArtist} 
                            style={{ width: '100%', borderRadius: '8px' }} 
                        />*/}
                        <h3>{playlist.FavoriteArtist}</h3>
                    </div>
                    <div className="col-md-6">
                        <h4>Top Tracks:</h4>
                        <ul>
                        {playlist.tracks?.length ? (
            playlist.tracks.map((track, index) => (
              <li key={index}>{track}</li>
            ))
                             ) : (
                              <p>No tracks available</p>
                            )}
                        </ul>
                        </div>
                </div>
            ))}
        </>
    );
};

export default PlaylistCard;