import { useState, useEffect } from 'react';
import PlaylistCard from '../components/Playlist'; // Component to display each playlist
import { getPlaylists, createPlaylist, updatePlaylist, deletePlaylist } from '../api/playlistService'; // API functions
import type { PlaylistData } from '../interfaces/Playlist';

const Playlists = () => {
  const [playlists, setPlaylists] = useState<PlaylistData[]>([]);

  // Fetch all playlists when the component loads
  useEffect(() => {
    const fetchPlaylists = async () => {
      const data = await getPlaylists(); // Fetch playlists from API
      setPlaylists(data);
    };

    fetchPlaylists();
  }, []);

  // Function to create a new playlist
  const handleCreate = async () => {
    const title = prompt("Enter the new playlist title:"); // Prompt user for a playlist title
    if (title) {
      const newPlaylist: PlaylistData = {
        id: Math.floor(Math.random() * 1000), // Temporary ID
        title,
        image: 'https://via.placeholder.com/150', // Placeholder image
        tracks: [],
      };
      const createdPlaylist = await createPlaylist(newPlaylist);
      if (createdPlaylist) {
        setPlaylists([...playlists, createdPlaylist]); // Update state with new playlist
      }
    }
  };

  // Function to update an existing playlist
  const handleUpdate = async (id: number) => {
    const newTitle = prompt("Enter the new playlist title:");
    if (newTitle) {
      const updatedPlaylist = await updatePlaylist(id, { title: newTitle });
      if (updatedPlaylist) {
        setPlaylists(playlists.map((playlist) =>
          playlist.id === id ? { ...playlist, title: newTitle } : playlist
        ));
      }
    }
  };

  // Function to delete a playlist
  const handleDelete = async (id: number) => {
    await deletePlaylist(id); // Delete playlist from API
    setPlaylists(playlists.filter((playlist) => playlist.id !== id)); // Remove playlist from state
  };

  return (
    <div className="playlists-page">
      <h1>Your Playlists</h1>
      <button onClick={handleCreate}>Create New Playlist</button> {/* Button to create playlist */}
      <PlaylistCard playlists={playlists} handleUpdate={handleUpdate} handleDelete={handleDelete} /> {/* Display playlists */}
    </div>
  );
};

export default Playlists;