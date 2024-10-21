import { useState } from 'react';
import PlaylistCard from '../components/Playlist'; // Component to display each playlist
import { retrieveArtists } from '../api/artistsAPI'; // Import the artist retrieval function
import type { PlaylistData } from '../interfaces/Playlist';

const Playlists = () => {
  const [playlists, setPlaylists] = useState<PlaylistData[]>([]); // State to hold playlists

  // Function to create a new playlist from artist tracks
  const handleCreate = async () => {
    const artist = prompt("Enter the artist's name:"); // Prompt user to enter an artist name
    const playlistTitle = prompt("Enter the new playlist title:"); // Prompt user for a playlist title

    if (artist && playlistTitle) {
      try {
        // Retrieve the artist's tracks using the artist name
        const artistData = await retrieveArtists(artist); // Call to artistsAPI.tsx
        if (!artistData || !artistData.toptracks || !artistData.toptracks.track) {
          console.error('Artist data not found');
          return;
        }

        // Format the tracks to match the playlist data structure
        const tracks = artistData.toptracks.track.map((track: any) => ({
          name: track.name,
          artist: track.artist.name
        }));

        // Create the new playlist
        const newPlaylist: PlaylistData = {
          id: Math.floor(Math.random() * 1000), // Temporary ID
          title: playlistTitle,
          image: 'https://via.placeholder.com/150', // Placeholder image
          tracks: tracks
        };

        // Update the state to add the new playlist to the list
        setPlaylists([...playlists, newPlaylist]); // Add the new playlist to the list

      } catch (error) {
        console.error('Error retrieving artist tracks or creating playlist:', error);
      }
    }
  };

  // Function to update an existing playlist title
  const handleUpdate = async (id: number) => {
    const newTitle = prompt("Enter the new playlist title:");
    if (newTitle) {
      // Update the title of the playlist in the state
      setPlaylists(playlists.map((playlist) =>
        playlist.id === id ? { ...playlist, title: newTitle } : playlist
      ));
    }
  };

  // Function to delete a playlist
  const handleDelete = async (id: number) => {
    // Remove the playlist from the state
    setPlaylists(playlists.filter((playlist) => playlist.id !== id));
  };

  return (
    <div className="playlists-page">
      <h1>Your Playlists</h1>
      <button onClick={handleCreate}>Create New Playlist from Artist</button> {/* Button to create playlist */}
      <PlaylistCard playlists={playlists} handleUpdate={handleUpdate} handleDelete={handleDelete} /> {/* Display playlists */}
    </div>
  );
};

export default Playlists;