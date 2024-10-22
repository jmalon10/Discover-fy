import React from 'react';
import type { PlaylistData } from "../interfaces/Playlist"; // Import PlaylistData type

// Define the props for the component
interface PlaylistProps {
    playlists: PlaylistData[] | null;
}

const PlaylistCard: React.FC<PlaylistProps> = ({ playlists }) => {
    return (
        <>
            <h2 className="pb-5 text-2xl font-semibold text-center text-white">Check out all your Playlists!</h2>
            {playlists && playlists.map((playlist) => (
                <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-sm mx-auto overflow-hidden mb-6 hover:bg-gray-800 transition-all duration-300" key={playlist.id}>
                    <div className="p-6">
                        {/* Playlist image 
                        <img 
                            src={playlist.image || 'https://via.placeholder.com/150'}  // Fallback image if none exists
                            alt={playlist.FavoriteArtist} 
                            className="rounded-full mx-auto w-24 h-24 object-cover" 
                        />*/}
                        <h3 className="text-lg font-semibold text-center mb-4 mt-4">{playlist.FavoriteArtist}</h3>

                        <h4 className="text-md font-semibold text-center mb-3">Top Tracks:</h4>
                        <ul className="space-y-3">
                            {playlist.tracks?.length ? (
                                playlist.tracks.map((track, index) => (
                                    <li key={index} className="text-sm flex items-center justify-between p-2 hover:bg-blue-700 rounded transition">
                                        {track}
                                    </li>
                                ))
                            ) : (
                                <p className="text-sm text-center text-gray-500">No tracks available</p>
                            )}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PlaylistCard;