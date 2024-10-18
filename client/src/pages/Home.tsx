// src/pages/HomePage.jsx

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Artist } from '../interfaces/artists';

const HomePage = () => {
  const [artists, setArtists] = useState<Artist[]>([]); // Initialize artists state

  useEffect(() => {
    // Fetch artist data when the component mounts
    const fetchArtists = async () => {
      console.log('Inside ')
      try {
        const apiKey = process.env.LASTFM_API_KEY; // Store your API key in a .env file
        const response = await axios.get(
          `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`
        );
        setArtists(response.data.artists.artist); // Store artists in the state
      } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div>
      <header>
        <h1>Welcome to discover-FY</h1>
        <p>Your personal music playlist manager</p>
      </header>
      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Manage Your Playlists</h2>
            <p>
              Create and manage your playlists with ease. Add or remove songs
              from your playlists. Edit the song details, such as the title,
              artist, and album.
            </p>
            <Link to="/playlists" className="btn btn-primary">
              View Playlists
            </Link>
          </div>
          <div className="col-md-6">
            <img src="playlist.jpg" alt="Playlist" className="img-fluid rounded" />
          </div>
        </div>
      </section>

      

      

      {/* Footer */}
      <footer className="text-center mt-4">
        <p>&copy; 2021 discover-FY</p>
      </footer>
    </div>
  );
};

export default HomePage;
