import { useEffect, useState } from 'react';
import PlaylistCard from '../components/Playlist'; // Component to display each playlist
import type { PlaylistData } from '../interfaces/Playlist';
import Auth from '../utils/auth';


const Playlists = () => {
  const [playlists, setPlaylists] = useState<PlaylistData[]>([]); // State to hold playlists
  useEffect(() => {
        getPlaylists();
  }
  , []);
  const getPlaylists = async () => {
    try {
      const response = await fetch(`/api/playlists/getAllPlaylists`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Auth.getToken()}`
        },
      }
      );
      const data = await response.json();
      console.log('log: PLAYLIST data', data);
      if (response.ok) {
        setPlaylists(data);
      } else {
        console.log("Playlist not found");
      }
    } catch (error) {
      console.log("Failed to fetch playlist data from databse");
      console.log(error);
    }
  }

  return (
    <PlaylistCard playlists={playlists} />
  );
};

export default Playlists;